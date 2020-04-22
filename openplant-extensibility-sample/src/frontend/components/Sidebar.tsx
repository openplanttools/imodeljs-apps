/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioIconChecked from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioIconUnchecked from '@material-ui/icons/RadioButtonUncheckedRounded';
import { Page } from "./Imodels";
import "./Sidebar.css";
import * as Settings from "../../common/Settings.json"

const drawerWidth = 280;
export const classNames =  Settings.classNames;
export let sidebarList: string[];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 30,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function MiniDrawer(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [state,setClass] = React.useState({schemaClass:classNames[0], checkedIconIndex:0});
  const [sidebarListLabels, setSidebarLabels] = React.useState([""]);
  const displayData = props.displayData; const imodelConnection = props.imodelConnection;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const getSidebarListLabels = async () => {
    let displayLabels:any = [];
    let singleQuotedclassNames = classNames.map(s => `'${s}'`).join(', ');
    let query = `select distinct p.name, p.displaylabel from meta.ecclassdef p where p.name in (${singleQuotedclassNames})
                  and p.schema.id=(select p.ecinstanceid from meta.ecschemadef p where p.name='${Settings.schemaName}')`;
    console.log(query);
    let elementProps = await imodelConnection.query(query );
    for await (const item of elementProps) {
      displayLabels.push(item);
    }
    console.log("DisplayLabels ", displayLabels);
    return classNames.map((cName:any) => {
      let label = displayLabels.filter( (dLabel: any) => dLabel.name == cName );
      if (label.length > 0 ){
        return label[0].displayLabel;
      }
      return "";

    });
  };

  React.useEffect(() => {
    console.log(sidebarListLabels.length);
    if (sidebarListLabels.length <= 1){
      getSidebarListLabels().then((dLabels: string[]) => {
        console.log( dLabels);
        sidebarList = dLabels;
        setSidebarLabels(dLabels);
      });
    }
  });

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOnclickList = (index:any) => {
    console.log(classNames[index]);
    setClass({schemaClass:classNames[index], checkedIconIndex:index});
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
      style={{height:40, backgroundColor:"#008BE1"}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{marginTop:-10}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          OpenPlant Extensibility Sample
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer

        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{marginTop:50}}>
          {sidebarListLabels.map((text: string, index: number) => (
            <ListItem button key={text} onClick={() => handleOnclickList(index)}>
              <ListItemIcon>{index  === state.checkedIconIndex ? <RadioIconChecked /> : <RadioIconUnchecked />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <div style={{padding: "43px 2px 2px 2px"}}>
        {console.log(state.schemaClass)}
        <Page
        key = {state.schemaClass}
        displayData={displayData}
        className={state.schemaClass}
        imodelConnection = {imodelConnection} />
      </div>
    </div>
  );
}
