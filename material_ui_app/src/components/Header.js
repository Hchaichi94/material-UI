import { Badge, Grid, IconButton, InputBase } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item >
                            <InputBase />
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item >

                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon />
                                </Badge>
                            </IconButton>

                            <IconButton>
                                <Badge badgeContent={3} color="primary">
                                    <ChatBubbleOutlineIcon />
                                </Badge>
                            </IconButton>

                            <IconButton>
                                <PowerSettingsNewIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar >
        </div >
    );
}
