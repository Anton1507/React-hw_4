import React, { useEffect } from 'react';
import UserCard from '../components/UserCard';
import {connect} from 'react-redux';
import {useState} from 'react';

const Users = ({
    participants,
    deleteParticipant
})=>{
    const [users,setUsers]=useState([...participants])
    const [search,setSearch]=useState('');


   useEffect(()=>{
    const filteredUsers = participants.filter(p=>{
        return p.name.toLowerCase().includes(search.toLowerCase()) 
    })
    setUsers(filteredUsers)
   },[participants,search]);

   const handelSearch = e=>{
       const {value} =e.target;
       setSearch(value);
   }
    return (
        <div className="users">
            <input type="text" placeholder="Enter text.." value={search} onChange={handelSearch}/>
            <hr/>
            <div className="users__containers">
            {users.map(user=><UserCard deleteParticipant={deleteParticipant} data={user} key={user.id}/>)}
               
            </div>
            
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        participants: state.participants
    }
    
}

const mapDispatchToProps=dispatch=>{
    return{
        deleteParticipant:id=>dispatch({type:'REMOVE_PART',payload:id})
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(Users)
