import { Badge, Grid, IconButton, InputBase } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',

    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,  /*interpolation */
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: "#f2f2f2"
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}));

export default function Header() {

    const classes = useStyles();

    return (

        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">

                    <Grid item >
                        <InputBase placeholder="Search topics" className={classes.searchInput} startAdornment={<SearchIcon fontSize="small" />} />
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

    );
}
