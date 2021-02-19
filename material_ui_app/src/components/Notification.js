import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';



export default function Notification(props) {
    const { notify, setNotify } = props
    return (
        <Snackbar>
            <Alert>

            </Alert>

        </Snackbar>
    )
}
