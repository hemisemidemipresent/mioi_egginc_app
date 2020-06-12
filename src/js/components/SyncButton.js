import React from "react"
import SyncIcon from '@material-ui/icons/Sync';
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayerCoops } from "../tools"

// ACTIONS
import { fetchNews } from "../actions/appActions"
import { validatePlayerId } from "../actions/settingsActions"
import { getActiveContracts } from "../actions/contractActions"

const useStyle = makeStyles(theme => ({
	root: {
		padding: 0,
	},
	"@keyframes spin": {
		"100%": {
			transform: "rotate(360deg)",
		},
	},
	spin: {
		animation: "$spin 1000ms linear infinite reverse",
	}
}))

export default function SyncButton(props) {
	const classes = useStyle()
	const dispatch = useDispatch()
	const settings = useSelector(store => store.settings)
	const activeContractsFetching = useSelector(store => store.contract.activeContracts.fetching)
	const playerData = useSelector(store => store.playerData)
	const playerDataFetching = playerData.fetching
	const newsFetching = useSelector(store => store.app.news.fetching)
	const coopIds = playerData.fetched ? playerData.contracts.contractsList : null

	const handleClick = evt => {
		dispatch(getActiveContracts())
		if (settings.playerId) dispatch(validatePlayerId(settings.playerId))
		fetchPlayerCoops(coopIds, dispatch)
		dispatch(fetchNews(5))
	}

	const noAnimation = {
		animation: "none",
	}

	const spinning = activeContractsFetching || playerDataFetching || newsFetching

	return (
		<IconButton className={classes.root} color="inherit" aria-label="Sync" onClick={handleClick}>
			<SyncIcon className={classes.spin} fontSize="large" style={spinning ? null : noAnimation}/>
		</IconButton>
	)
}