import React from 'react';
import FlagIcon from '@material-ui/icons/Flag';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  wrappStart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  starting: {
    fontSize: 50,
    color: '#dc1717',
  }
  
  
}));

const StartView = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrappStart}>
      START
      <FlagIcon className={classes.starting} />
    </div>
  )
}

export default StartView;
