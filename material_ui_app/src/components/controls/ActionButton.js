import { makeStyles } from '@material-ui/core'
import React from 'react'
import Button from './Button'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        minWidth: 0
    },
    secondary: {
        BackgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.main,
        }
    },
    primary: {
        BackgroundColor: theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme.palette.primary.main,
        }
    }
}))


export default function ActionButton(props) {
    const { color, children, onClick } = props
    const classes = useStyles()

    return (

        <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
            {children}
        </Button>
    )
}
