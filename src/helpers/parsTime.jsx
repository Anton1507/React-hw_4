import React from 'react';

const parseTime=(secs)=>{
    const sec = secs%60;
    const min = (secs-sec)/60;

    return `${min>9 ?'' : '0'+min}:${sec>9 ?'' : '0'+sec}`

}
export default parseTime;