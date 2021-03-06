import React from "react"
import HeadedCard from "../../HeadedCard"
import PlayerIDInput from "../../appSettings/PlayerIDInput"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import { convertSymbol, getDayIndex } from "../../../tools"
import Loading from "../../Loading"
import FlexContainer from "../../FlexContainer"
import ImageLabel from "../../Decorator/ImageLabel"
import DailyGiftCollection from "./DailyGiftCollection"
import NextEgg from "../../FarmValueContainer/FarmStats/NextEgg"
import { calculateFarmStats } from "../../../tools"
import Image from "../../Decorator/Image"

const useStyle = makeStyles(theme => ({
	root: {
		"& > *": {
			marginTop: 10,
			marginBottom: 10,
		},
	},
	meEggs: {
		paddingTop: 8,
		paddingBottom: 8,
	},
}))

export default function PlayerCard(props) {
	const classes = useStyle()
	const playerData = useSelector(store => store.playerData)
	// const farm = useSelector(store => {
	// 	if (store.playerData.fetched) store.playerData.farmsList.find(farm => farm.farmType === 2)
	// })
	// const game = useSelector(store => store.playerData.game)
	// const farmStats = calculateFarmStats(farm, game)
	const fetched = playerData.fetched
	const fetching = playerData.fetching
	const userId = playerData.userId
	const giftCollected = fetched ? playerData.game.lastDailyGiftCollectedDay >= getDayIndex(new Date()) : undefined
	

	const IDPrompt = () => (
		<div>
			<Typography variant="h5">
                Welcome to mioi.io's Egg, Inc. companion app
            </Typography>
            <br/>
            <Typography variant="body1">
                The dashboard shows you all of the information you need at a glance. To get you the tailored information you're after, enter your PlayerID below. 
            </Typography>
            <br/>
            <Typography variant="body2">
                The PlayerID will be saved on the device you're viewing this on.
            </Typography>
            <PlayerIDInput/>
		</div>
	)

	const PlayerDataDisplay = () => (
		<div className={classes.root}>
			<DailyGiftCollection collected={giftCollected}/>
			<FlexContainer className={classes.meEggs}>
				<ImageLabel imageSrc={"/images/SOUL_EGGS.png"} label={convertSymbol(playerData.game.soulEggsD)} height={80} />
				<ImageLabel imageSrc={"/images/PROPHECY_EGGS.png"} label={convertSymbol(playerData.game.eggsOfProphecy)} height={80} />
			</FlexContainer>
			<Typography variant="caption">Latest game data: {new Date(playerData.approxTime * 1000).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                    hour12: true,
                })}</Typography>
		</div>
	)

	const cardTitle = playerData.userName ? `Hello, ${playerData.userName}` : "Welcome"
    return (
        <HeadedCard cardID="player" collapsable title={cardTitle}>
			{!fetched && <IDPrompt/>}
			{fetching && fetched && <Loading/>}
			{!fetching && userId && <PlayerDataDisplay/>}
        </HeadedCard>
    )
}