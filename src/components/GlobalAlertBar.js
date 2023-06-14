import React, { useRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useStateValue } from '../utils/reducers/StateProvider';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function GlobalAlertBar() {
  const sb = useRef();

  const [{ alertOpen, alertMessage, alertType }, dispatch] = useStateValue();

  const handleClose = (event, reason) => {
    console.debug('handleClose clicked', alertOpen, reason);
    if (reason === 'clickaway') {
      return;
    }
    dispatch({
      type: 'SET_ALERT_OPEN',
      alertOpen: false,
    });
  };

  const rootStyle = {
    marginTop: '20px',
    width: '100%',
  };

  return (
    <>
      <Snackbar
        style={rootStyle}
        ref={sb}
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alertType}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
