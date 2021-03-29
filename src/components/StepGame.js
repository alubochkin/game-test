import React, { useMemo, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fieldGametAC, resultCordinateAc } from '../redux/actions';

const useStyles = makeStyles((theme) => ({

  wrapStep: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  step: {
    padding: 20,
    border: '#92d2c1 3px solid',
    margin: 2,
    color: '#92d2c1',
  }
  
}));

const StepGame = ({startPosition, fieldValue}) => {
  const classes = useStyles();
  const dispatch = useDispatch();



  // const [steps, setsteps] = useState([]);


  const arrowArray = {
    'X++': <ArrowForwardIcon />,
    'Y++': <ArrowDownwardIcon />,
    'X--': <ArrowBackIcon />,
    'Y--' : <ArrowUpwardIcon />
  }



  const {startX, startY} = startPosition;   
  let XY = {
      X: startX, 
      Y: startY
  };

  const arrSteps = [];

  const generateStep = () => {


    let stepElements = new Array(6).fill([]);

    const logicSteps = () => {

      const variantStep = (n) => ['+', '-'][Math.floor(Math.random() * 2)];
      let startStep = Object.keys(XY)[Math.floor(Math.random() * 2)] ; // x || y

      if (startStep === 'X' && XY.X === 0) {
        arrSteps.push(arrowArray['X++'])
        XY.X++;
      } 
      if (startStep === 'Y' && XY.Y === 0) {
        arrSteps.push(arrowArray['Y++'])
        return XY.Y++;
      } 

      if (startStep === 'X' && XY.X === fieldValue.x - 1 ) {
        arrSteps.push(arrowArray['X--'])
        return XY.X--;
      } 
      if (startStep === 'Y' && XY.Y === fieldValue.y - 1 ) {
        arrSteps.push(arrowArray['Y--'])
        return XY.Y--;
      } 

      if (startStep === 'X' && XY.X > 0 && XY.X < fieldValue.x - 1 ) {
        if (variantStep() === '+') {
          arrSteps.push(arrowArray['X++'])
          return XY.X++;
        } 
        if (variantStep() === '-') {
          arrSteps.push(arrowArray['X--'])
          return XY.X--;
        } 
      } 
      if (startStep === 'Y' && XY.Y > 0 && XY.Y < fieldValue.x - 1 ) {
        if (variantStep() === '+') {
          arrSteps.push(arrowArray['Y++'])
          return XY.Y++;
        } 
        if (variantStep() === '-') {
          arrSteps.push(arrowArray['Y--'])
          return XY.Y--;
        } 
      }       
    }

    while (arrSteps.length < 6)  {
      logicSteps();
    }
    
  }
  
  if (startPosition) {
    generateStep();
    dispatch(resultCordinateAc({resultCordinate: XY}));
  }

  console.log(arrSteps);



  return (
    <div className={classes.wrapStep}>
      {arrSteps.map((step, i) => <div key={i} className={classes.step}>{step}</div>)}
    </div>

  )
}

export default StepGame;