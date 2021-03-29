import React, {Fragment, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FieldGame from './FieldGame';
import StepGame from './StepGame';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  gridGame: {
    display: 'grid',
    gap: 30,
  },
  bottomBlock: {

  },
  gameWrapper: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    alignItems: 'start',
    gap: 50,
  }
}));

export default function ContainerGame() {
  const classes = useStyles();


  const [disabled, setDisbled] = useState(false);
  const [startPosition, setStartPosition] = useState(false);

  const startGame = (e) => {
    // setDisbled(true);
    setStartPosition({
      startX: Math.floor(Math.random() * 3),
      startY: Math.floor(Math.random() * 3)
    });
  }


  return (
    <Fragment>
      <Container maxWidth="lg">
        <div className={classes.gridGame} style={{ backgroundColor: '#fff', height: '100vh' }} >
          <div className={classes.bottomBlock}>
          <Button 
            onClick={startGame} 
            disabled={disabled} 
            variant="contained" 
            color="secondary"
            >
            Начать игру
          </Button>
          </div>

          <div className={classes.gameWrapper}>
            <FieldGame  startPosition={startPosition} fieldValue={{x: 3, y: 3}} />
            <StepGame   startPosition={startPosition} fieldValue={{x: 3, y: 3}}/>            
          </div>

        </div>
      </Container>
    </Fragment>
  );
}