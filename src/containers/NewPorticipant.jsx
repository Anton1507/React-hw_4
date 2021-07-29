import React, { useState } from 'react';
import {connect} from 'react-redux';
import parseTime from '../helpers/parsTime'


const Registration = ({
     setIsReg,
      setData 
    }) => {

    const handelSubmit = e => {
        e.preventDefault();
        const {name,surname} = e.target.elements;
        setData(state => {
            return {
                ...state,
                name: name.value,
                surname: surname.value,
            }
        })
        setIsReg(false)
    }

    return (

        <div className="reg">
        <h3>Registration Participant</h3>
        <form onSubmit={handelSubmit}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Surname</label>
            <input type="text" name="surname" />
            <button type="submit"  >Registrate</button>
        </form>
        </div>



    )
}






const Timer = ({
    setIsReg,
    data,
    setData,
    addUser
}) => {
    const [time, setTime] = useState(0);
    const [timerId, setTimerId] = useState(null);

    const handelStart = () => {
        const id = setInterval (() => { 
            setTime(time => time + 1) 
        },1000)
        setTimerId(id);
    }
    const handelStop = ()=>{
        clearInterval(timerId)

    }
    const handelCancel =()=>{
        handelStop();
        setIsReg(true);
        setData({
            name:'',
            surname:'',
            time:'',
            id:null,
        })
         
    }
    const handelSave=()=>{
        handelStop();
        setIsReg(true);
        addUser({...data,
            time,
             id: new Date().getTime()
            })
        setData(()=>{return {  name:'',
                                surname:'',
                                time:0,
                                id:null,
                                }
                        }
                )
    }
    return (
        <div className="reg">
            <h3>{data.name}{data.surname}</h3>
            <div>
                <h4>Time:{parseTime(time)}</h4>
                <button onClick={handelStart}>Start</button>
                <button onClick={handelStop}>Stop</button>
                <hr />
                <button onClick={handelCancel}>Cansel</button>
                <button onClick={handelSave}>Save</button>
            </div>
        </div>
    )

}

const NewParticipant = ({addUser}) => {
    
    
    const [isReg, setIsReg] = useState(true);
    const [data, setData] = useState({
        name: '',
        surname: '',
        time: '',
        id: null,
    })
    return (
        <div className="new_part">
            {isReg ?

                <Registration
                    
                    setIsReg={setIsReg}
                    setData={setData}
                /> :

                <Timer
                 setData={setData} 
                 data={data} 
                 setIsReg={setIsReg}
                 addUser={addUser}
                  />
            }

        </div>
    )
}

const  mapDispatchToProps= dispatch => {
    return {
        addUser:(data)=> dispatch({type:'ADD_PART',payload:data})
    }
}
export default connect(null,mapDispatchToProps) (NewParticipant);