import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parseTime from '../helpers/parsTime';

const ShowWinner=({
    handleShowWinner,
    count
})=>{
    return(
        <div className="winner">
            <h3>Total participants:{count}</h3>
            <button onClick={handleShowWinner}>Show winner</button>
        </div>
    )
}

const WinnerInfo = ({
    winner
})=>{
    return ( 
        <div className="winner">
            <h3>ID:{winner.id}</h3>
            <p>{winner.name}{winner.surname}</p>
            <p>Time: {parseTime(winner.time)}</p>
           
        </div>
    )
}

const Winner = ()=>{
   
    const count = useSelector(state =>state.participants.length);
    
    console.log(count);
    
    const winner = useSelector(state=>state.winner);
    const dispatch=useDispatch();
    const handleShowWinner=()=>{
        dispatch({type:'SHOW_WINNER'})
    }
    return winner?
    <WinnerInfo winner={winner}/>:
    <ShowWinner count={count} handleShowWinner={handleShowWinner}/>
      
    
};

export default Winner;