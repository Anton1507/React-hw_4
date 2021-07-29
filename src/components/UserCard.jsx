import React from 'react';
import parseTime from '../helpers/parsTime';


const UserCard = ({
    data,
    deleteParticipant
})=>{
    return(<div className="cart">
    <p>ID:{data.id}</p>
    <p>{data.name} {data.surname}</p>
    <p>Time:{parseTime(data.time)}</p>
    <button onClick={()=>deleteParticipant(data.id)}>Delete</button>
</div>)
}
export default UserCard;