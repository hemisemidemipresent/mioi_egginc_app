import orders from "./orders.json"
import calculateFarmStats from "./farmStatTools"

const validSymbols = orders.map(order => order.symbol)

export { calculateFarmStats }

export function contractNameFormat(value) {
    value = value.replace(" ", "-").toLowerCase()
    value = value.replace(/[^A-Za-z0-9\-]/, "")
    return value
}

export function getExpireETA(validUntil, string=false) {
    let currentEpoch = Date.now() / 1000;
    let expire = validUntil - currentEpoch; // in seconds
    if (string === true) {
        return convertEpoch(expire);
    }
    return expire;
}

export function convertEpoch(epochTime) {
    let d = Math.floor(epochTime / (3600*24));
    let h = Math.floor(epochTime % (3600*24) / 3600);
    let m = Math.floor(epochTime % 3600 / 60);
    let s = Math.floor(epochTime % 60);
    let stringValues = [d, h, m, s];
    // run through the array and format a suitable string
    let timeString = ''
    if (stringValues[0] > 0) {
        timeString += stringValues[0] + 'd ';
    }
    if (stringValues[1] > 0) {
        timeString += stringValues[1] + 'h ';
    }
    if (stringValues[2] > 0) {
        timeString += stringValues[2] + 'm ';
    }
    // if (stringValues[3] > 0) {
    //     timeString += stringValues[3] + 's ';
    // } 
    if (timeString == "") {
        return "0";
    }
    else {
        return timeString.slice(0, timeString.length - 1);
    }
}

export function timeConvert(time, base="ms") { 
    //return String(Math.floor(time/24/60) + " days, " + Math.floor(time/60%24) + ' hours and ' + Math.ceil(time%60) + ' minutes');
    var units = {
        year: 24*60*365,
        month: 24*60*30,
        week: 24*60*7,
        day: 24*60,
        hour: 60,
        minute: 1
    }
	var result = []
	if (base === "ms") {
		time = time / 1000
	}
    for(var name in units) {
      var p =  Math.floor(time / units[name]);
      if(p == 1) result.push(' ' + p + ' ' + name);
      if(p >= 2) result.push(' ' + p + ' ' + name + 's');
      time %= units[name]
    
    }
    return result;
}

export function magnitudeGet(str) {
    var key = String(str.match(/([A-z]{1,2})$/g));
    for(var i = 0; i < orders.length; i++) {
        if(orders[i].symbol === key) {
            return orders[i].magnitude;
        }
    }
    return 0;
}

export function convertName(n) { //converting the format of unreadable number into the game's name format
	if (typeof n === "undefined" || n === null) return "0"
	if (isNaN(n)) {
        return 'Need More Info';
    }
    else if (levelOf(n) < 1){
        return Math.floor(n);
    }
    else if (levelOf(n) <= orders.length) {
        return Math.round((n / cutoffOf(n)) * 1000) / 1000 + ' ' + (orders[levelOf(n)-1].name);
    }
    else {
        return Math.round((n / cutoffOf(n)) * 1000) / 1000 + '[e' + ((levelOf(n) + 1) * 3) + ']';
    }
}

export function convertSymbol(n) { //converting the format of unreadable number into the game's symbol format
	if (typeof n === "undefined" || n === null) return "0"
	if (n < 1000000) {
        return n.toLocaleString();
    }
    else if (levelOf(n) < 1){
        return Math.floor(n);
    }
    else if (levelOf(n) <= orders.length) {
        return Math.round((n / cutoffOf(n)) * 1000) / 1000 + (orders[levelOf(n)-1].symbol);
    }
    else {
        return Math.round((n / cutoffOf(n)) * 1000) / 1000 + 'e' + ((levelOf(n) + 1) * 3)
    }
}

export function isValidSymbol(string) {	
	return validSymbols.includes(string)
}

export function isSymbolFormat(string) {
	const expression = RegExp(`^\\d{1,3}((\\.\\d{1,3})?(${ validSymbols.toString().replace(/,/g, '|')})?|\\.)?$`)
	return expression.test(string)
}

export function convertSymbolToNumber(string) {
	return  (string.replace(/\D*$/, '')) * Math.pow(10, (magnitudeGet(String(string.match(/\D*$/)))))
}

export function round(n, precision) {
    return Math.round(n * Math.pow(10, precision)) / Math.pow(10, precision);
}

export function percentString(n, precision, limit=false) {
    let value = limit ? Math.min(Math.max(0, n), 1) : n
    return (value * 100).toFixed(precision) + '%';
}

function orderOf(n) {
    return Math.floor(Math.log(n) / Math.LN10 + 0.000000001) / 3;
}

function levelOf(n) {
    // Returns an integer representing its order of magnitude where 1 = million and 2 = billion etc.
    return Math.floor(orderOf(n) - 1);
}

function cutoffOf(n) {
    // Returns the floor of n's "illion". E.g. 28 million returns 1 million, 794 billion returns 1 billion
    return Math.pow(10, Math.floor(orderOf(n)) * 3);
}

export function getRewardDetails(reward) {
    const imageRootSrc = "/images"
    let path = null
    let quantity = null
    switch (reward.type) {
        case "BOOST": {
            path = "b_icon_" + reward.subtype,
            quantity = `+${reward.quantity}`
            break
        }
        case "RESEARCH": {
            path = `r_icon_${reward.subtype}`
            quantity = `+${reward.quantity}`
            break
        }
        case "PIGGY_LEVEL": {
            path = reward.type
            quantity = `+${reward.quantity}`
            break
        }
        case "PIGGY_MULTIPLY": {
            path = reward.type
            quantity = `x${reward.quantity}`
            break
        }
        case "PIGGY_BANK":
        default: {
            path = reward.type
            quantity = convertSymbol(reward.quantity)
            break
        }
    }
    return {
        path: `${imageRootSrc}/${path}.png`,
        quantity: quantity,
    }
}

export function getImageSrc(id) {
	return `/images/${id}.png`
}

export function contractTimeSoloEstimate(parameters) {
	const hatchCalm = 1 + (parameters.hatchCalm * 0.1)
	//BREAKPOINT CALCULATION		
	let a = parameters.hatchRate * hatchCalm * 4;
	let b = (parameters.layingRate / parameters.population);
	let c = parameters.population;
	let d = parameters.eggsLaid;
	let y = parameters.target;
	let qA = (a * b) / 2;
	let qB = b * c;		
	let qC = d - y;
	let determinant = Math.pow(qB, 2) - 4 * qA * qC
	let numerator = determinant < 0 ? 0 : -1 * qB + Math.sqrt(determinant)		
	let denominator = 2 * qA;		
	let xToTarget =  numerator / denominator;		
	let breakpoints = [0]		
	let xMaxPopulation = (parameters.maxPopulation - c) / a;		
	let xMaxShippingRate = ((parameters.shippingRate / b) - c) / a;		
	breakpoints.push(xToTarget, xMaxPopulation, xMaxShippingRate);		
	breakpoints.sort((a, b) => a - b );
	//WHATIFS		
	let maxFarmPopulation = (a * xToTarget) + c;		
	let maxFarmShipping = ((a * xToTarget) + c) * b;		
	//CALCULATE TIME		
	let time = 0;		
	time =+ breakpoints[1]		
	
	let warning = null

	for (let i = 1; i < breakpoints.length; i++) {		
		if (breakpoints[i] == xToTarget) {		
			break;		
		}		
		else if (breakpoints[i] == xMaxPopulation) {		
			d += findEggsLaid(breakpoints[i], breakpoints[i - 1], a, b, c);		
			time += findTime(y, b, c, d);
			warning = {
				type: "maxPopulation",
				value: maxFarmPopulation,
			}
			break;
		}		
		else if (breakpoints[i] == xMaxShippingRate) {
			d += findEggsLaid(breakpoints[i], breakpoints[i - 1], a, b, c);
			time += findTime(y, b, c, d);
			warning = {
				type: "shippingRate",
				value: maxFarmShipping,
			}
			break;
		}
	}
		
	function findEggsLaid(endBreakpoint, startBreakpoint, a, b, c) {
		let xRuntime = endBreakpoint - startBreakpoint;
		return (a * b / 2) * Math.pow(xRuntime, 2) + b * c * xRuntime;
	}
		
	function findTime(y, b, c, d) {
		return (y - d) / (b * (a * breakpoints[1] + c));
	}

	return [time, warning];
}