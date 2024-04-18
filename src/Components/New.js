import React from 'react'
import { useState } from 'react';
const New = () => {
     const[count, setCount]= useState(0);
     const[count1, setCount1]= useState(10);
     function change()
     {
        setCount(count+1);
     }
     function change1()
     {
      if(count1>0)
        setCount1(count1-1);
     }
     return (
    <div>
        <p>{count}</p>
      <button onClick={change}>Like</button>&nbsp;&nbsp; &nbsp; &nbsp;
      {count1}
      <button onClick={change1}>DisLike</button>
    </div>
  )
}

export default New
