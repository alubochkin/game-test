import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import StartView from './StartView';
import { useDispatch, useSelector } from 'react-redux';
import { fieldGametAC } from '../redux/actions';

const useStyles = makeStyles((theme) => ({

  fieldWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 3, 
    width: 'max-Content'
  },
  rows: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gap: 3, 
    width: 'max-Content'
  },
  fieltItem: {
    width: 150,
    height: 150,
    background: '#92d2c1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starting: {
    fontSize: 50,
    color: '#dc1717',
  },
  win: {
    background: 'blue'
  }
  
  
}));


const FieldGame = ({fieldValue, startPosition}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const resultCordinate =  useSelector(state => state?.resultCordinate);

  const winRef = useRef()
  
  const [field, setfield] = useState([]);

  const generateField = ({x, y}, pos) => {
    const {startX = 0, startY = 0} = {...pos};
    const field = new Array(x).fill(new Array(y).fill('')).map(el => el.map(item => ''));
    field[startX][startY] = <StartView />; 
    
    dispatch(fieldGametAC({fieldGame: field}))
    return field;   
  }



  useMemo(() => setfield(generateField(fieldValue, startPosition)), [startPosition]);



  const isResultGameHandler = (e, cordinate) => {
    console.log(resultCordinate.resultCordinate, cordinate)
    if (JSON.stringify(resultCordinate.resultCordinate) === JSON.stringify(cordinate) ) {
      e.target.style.cssText = 'background:blue; color: #fff'
      e.target.textContent = 'ВЕРНО'

      console.log(winRef, 'win')
    } else {
      e.target.style.cssText = 'background:red; color: #fff'
      e.target.textContent = 'НЕ ВЕРНО'
    }
  }

  return (
    <div className={classes.fieldWrapper}>
      { field.map((el, i) => 
        <div key={i} className={classes.rows}> 
          { el.map((item, j) => 
            <div className={classes.fieltItem} 
            onClick={(e) => isResultGameHandler(e, {X: i, Y: j}) }
            data-index={i + ':' + j} 
            ref={winRef}
            key={Math.random()*Math.random()}>{item}
            </div>
          )}
        </div>)
      
      }
    </div>
  )
}

export default FieldGame;
