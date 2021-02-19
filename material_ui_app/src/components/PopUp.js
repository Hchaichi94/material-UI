import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import Controls from './controls/Controls'

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0'
    }
}))





export default function PopUp(props) {

    const classes = useStyles()
    const { title, children, openPopup, setOpenPopup } = props

    return (

        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }} >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.Button color="secondary" onClick={() => setOpenPopup(false)}>
                        <CloseIcon />
                    </Controls.Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog >

    )
}
