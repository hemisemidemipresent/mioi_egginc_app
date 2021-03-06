import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, useRouteMatch, Redirect, useParams } from "react-router-dom"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import path from "path"
import CoopRewards from "./CoopRewards"
import Loading from "../../Loading"
import CoopExpiry from "./CoopExpiry"
import CoopEstimate from "./CoopEstimate"
import ShareCoop from "./ShareCoop"
import CoopMembers from "./CoopMembers"
import CoopExpiryEstimate from "./CoopExpiryEstimate"
import HelpTooltip from "../../Decorator/HelpTooltip"
import LabelToggle from "../../controls/LabelToggle"
import ReactGA from "react-ga"
import CoopSettings from "./CoopSettings"

const useStyle = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		position: "relative",

		"&>*": {
			marginTop: 10,
			marginBottom: 10,
		}
	},
	type: {
		margin: 0,
		position: "relative",
	}
}))

export default function CoopSummary(props) {
	const contract = props.contract
	const classes = useStyle()
    const currentRoute = useRouteMatch()
	const coop = useSelector(store => store.contract.coops[props.contract.name])
	const [selectedLeague, setSelectedLeague] = useState("standard")

	const handleLeagueChange = state => {
		if (state === false) setSelectedLeague("standard")
		else setSelectedLeague("elite")
	}

	const logTierChange = (evt, newState) => {
		ReactGA.event({
			category: "Contract",
			action: "Co-op Tier Changed",
			label: newState ? "Elite" : "Standard",
		})
	}

	useEffect(() => {
		if (coop.fetched && coop.league) setSelectedLeague(coop.league)
	}, [(coop && coop.league)])

	const coopRewardSet = (contract.goals[selectedLeague]) || contract.rewards

    if (coop && coop.fetched) {
		console.log(coop)
        return (
            <div style={props.style} className={classes.root}>
                <Redirect to={path.join(currentRoute.url, coop.coop)} />
                <Route path={path.join(currentRoute.path, ":coopId")}>
					<Typography className={classes.type} align="center" variant="h4">{coop.coop}<ShareCoop coop={coop}/><CoopSettings/></Typography>
					<LabelToggle state={selectedLeague === "elite"} labels={["Standard", "Elite"]} onChange={handleLeagueChange} onClick={logTierChange}/>
					<CoopRewards eggsLaid={coop.eggs} rewards={coopRewardSet}/>
					<Typography variant="h5" align="center">
						Completion Pace
						<HelpTooltip 
							helpText={"The completion pace shows the ratio between your estimated completion time and the remaining time. Aim to keep this under the red \'success threshold\' line."}
						/>
					</Typography>
                    <CoopExpiryEstimate contract={contract} rewards={coopRewardSet} coop={coop}/>
                    <Typography align="center" variant="h5">Members ({coop.members.length}/{contract.coopSize})</Typography>
                    <CoopMembers coop={coop} />
                </Route>
            </div>
        )
    }
    else {
		return null
    }
}