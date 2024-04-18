import React from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
const New1 = () => {

  const[count, setCount]= useState(0);

  function change()
  {
    setCount(count+1);
  }
  function change1()
  {
    setCount(count-1)
  }
  return (
    <div>
       <ReactPlayer url={'https://www.youtube.com/watch?v=1Jpaw0CCobk'} controls></ReactPlayer>
       <button onMouseOver={change}> Content</button>
       <button onMouseOver={change1}>NewContent</button>
       <p>{count}</p>
    </div>
  )
}

export default New1
