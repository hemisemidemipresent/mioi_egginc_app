import React from "react"
import { useTheme } from "@material-ui/core/styles"
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from "react-step-progress-bar"
import { percentString, convertSymbol, getRewardDetails } from "../../../tools/eggincTools"
import { Paper, Tooltip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"

const useStyle = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",

		"& div.RSPBprogressBarText": {
			color: theme.palette.getContrastText(theme.palette.background.off),
		}
	},
	wrap: {
		margin: "10px 20px",
		borderRadius: 10,
	},
}))

export default function CoopRewards(props) {
	const theme = useTheme()
	const classes = useStyle()
	const detailedRewardsBar = useSelector(store => store.settings.detailedRewardsBar)
    const rewards = props.rewards
    let eggsLaid = props.eggsLaid || 0
	
	function getSteps(rewardArray, totalEggs) {
		return rewardArray.map((reward, index) => {
			return (
				<Step key={index} transition="scale">
					{({ accomplished, index }) => {
						let greyFilter = accomplished ? null : "grayscale(0.7)"
						let shadow = accomplished ? "drop-shadow(0px 0px 3px rgba(0, 200, 0, 0.8))" : null
						const stepStyle = {
							filter: ["drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))", greyFilter].join(" "),
							transform: accomplished ? "scale(1.2)" : null,
							pointerEvents: "none",
						}
						
						return (
							<Tooltip 
								arrow
								title={`${percentString(totalEggs / reward.goal, 0, true)} completed`} 
								placement="top"
								enterTouchDelay={300}
								leaveTouchDelay={5000}
							>
								<div>
									<img width={40} src={getRewardDetails(reward).path} style={stepStyle}></img>
								</div>
							</Tooltip>
						)
					}}
				</Step>
			)
		})
	}

	const RewardBar = props => {
		const finalGoal = props.rewards[props.rewards.length - 1].goal
		let progress = Math.min(Math.max(0, eggsLaid / finalGoal * 100), 100)    

		// const fill = `linear-gradient(to right, #5498ff, #ff5454)`
		const fill =`linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`
		const steps = getSteps(props.rewards, props.eggsLaid)

		const Wrapper = !props.detailed ? Tooltip : ({children}) => <div>{children}</div>

		return (
			<Wrapper arrow title={`${convertSymbol(eggsLaid)}/${convertSymbol(finalGoal)}`} enterTouchDelay={300} leaveTouchDelay={5000}>
				<Paper elevation={4} className={classes.wrap}>
					<ProgressBar 
						height={20}
						percent={progress} 
						unfilledBackground={theme.palette.background.off}
						filledBackground={fill}
						stepPositions={props.rewards.map(reward => reward.goal / finalGoal * 100)}
						text={props.detailed && `${convertSymbol(eggsLaid)}/${convertSymbol(finalGoal)}`}
					>
						{steps}
					</ProgressBar>
				</Paper>
			</Wrapper>
		)
	}

	let progressBars
	if (detailedRewardsBar) {
		progressBars = rewards.map((reward, index) => <RewardBar detailed rewards={[reward]} eggsLaid={eggsLaid} key={index}/>)
	}
	else {
		progressBars = <RewardBar rewards={rewards} eggsLaid={eggsLaid}/>
	}

    return (
		<div style={props.style} className={classes.root}>
			{progressBars}
		</div>
	)
}