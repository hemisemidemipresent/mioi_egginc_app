import React, { useEffect, useRef } from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import { connect, useSelector, useDispatch } from "react-redux"

// ACTIONS
import * as UIActions from "../../actions/UIActions"
import { useClickAway } from "../../customHooks/customHooks"

import MenuButton from "../MenuButton"
import SidebarMenuHeader from "./SidebarMenuHeader"
import SidebarMenuItem from "./SidebarMenuItem"
import { SwipeableDrawer, List, Drawer, Divider } from "@material-ui/core"
// ICONS
// import { HomeIcon, ReceiptIcon, HelpIcon, SettingsIcon } from "@material-ui/icons"
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyle = makeStyles(theme => ({
    drawer: {
        maxWidth: "280px",
        width: "100vw",
    },
    drawerPaper: {
        maxWidth: "280px",
        width: "100vw",
        backgroundColor: theme.palette.background.paper,
    },
    toolbar: theme.mixins.toolbar,
}))

function SidebarMenu(props) {
    const UI = useSelector(state => state.UI)
    const dispatch = useDispatch()
    const classes = useStyle()
    const theme = useTheme()

    const menuItems = {
        "Dashboard" : {
            path: "/",
            icon: HomeIcon,
        },
        "Contracts" : {
            path: "/contract",
            icon: ReceiptIcon,
        },
        "Farm Value" : {
            path: "/farmvalue",
            icon: HomeIcon,
        },
        "Game Guide" : {
            path: "/guide",
            icon: HelpIcon,
        },
	}
	const menuItems2 = {
		"App Settings" : {
            path: "/settings",
            icon: SettingsIcon,
        }
	}
    const sidebarMenuItemComponents = Object.entries(menuItems).map(([text, { path, icon }]) => {
        return <SidebarMenuItem text={text} href={path} key={path} onClick={props.hideSidebar} icon={icon}/>
	})
	const sidebarMenuItemComponents2 = Object.entries(menuItems2).map(([text, { path, icon }]) => {
        return <SidebarMenuItem text={text} href={path} key={path} onClick={props.hideSidebar} icon={icon}/>
	})
    let DynamicDrawer = (props) => {
        if (true || window.innerWidth < theme.breakpoints.values.md) {
            return (
                <SwipeableDrawer 
                    hysteresis={0.27} 
                    minFlingVelocity={300} 
                    anchor={UI.menuOnLeft ? "left" : "right"} 
                    className={classes.drawer}
                    classes={{paper: classes.drawerPaper}}
                    open={UI.isSidebarVisible}
                    onOpen={() => dispatch(UIActions.showSidebar())} 
                    onClose={() => dispatch(UIActions.hideSidebar())}
                >
                    {props.children}
                </SwipeableDrawer>
            )
        }
        else {
            return (
                <Drawer
                    variant="permanent"
                    anchor={UI.menuOnLeft ? "left" : "right"} 
                    className={classes.drawer}
                    classes={{paper: classes.drawerPaper}}
                >
                    {props.children}
                </Drawer>
            )
        }
    }
    
    return (
        <DynamicDrawer>
            <div>
                <SidebarMenuHeader left={UI.menuOnLeft}/>
                <List>
                    {sidebarMenuItemComponents}
					<Divider/>
					{sidebarMenuItemComponents2}
                </List>
            </div>
        </DynamicDrawer>
    )
}

const mapStateToProps = store => {
    const {UI: {sizeFormat, isSidebarVisible, menuOnLeft} } = store;
	return {
        sizeFormat,
        isSidebarVisible,
        menuOnLeft,
	}
}

const mapDispatchToProps = {
	...UIActions
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu)