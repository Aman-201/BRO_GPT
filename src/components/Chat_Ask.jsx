import React,{useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import { getQues } from "../store/chatSlice";
function Chat_Ask()
{
  const dispatch=useDispatch();
    const [ques,setQues]=useState([]);
  const [currQues,setCurrQues]=useState('write here');
  function handleClick(){
    setQues((prev)=>[...prev,currQues]);
    console.log(ques.length)
    {if(ques.length>5){ques.shift();setQues(ques)}};
    
    console.log()
    // setCurrQues('write here');
  }
  useEffect(()=>{
    const data=currQues;
    dispatch(getQues({data}))
  },[ques])
    return (
<div className="basis-2/4 bg-zinc-500	 h-auto mx-10 border rounded-lg border-slate-400 shadow-lg">
    <h2>Ask Bro</h2>
    <div className="relative h-screen">
    <div className="absolute flex flex-col flex-wrap bottom-28 w-full mx-auto px-5 my-2 ">
  {/* classes inside p of ques :- mx-auto h-fit w-fit basis-2/3 space-y-8  */}
    {(ques.length!=0)? ques.slice(0).map((item,idx)=>{ console.log(idx,28+(4*(idx+1)));return <p key={idx} className={` flex-wrap font-sans border rounded-lg border-slate-400 shadow-lg text-slate-50 text-justify my-2`}>{item}</p>}) :<p></p>}
    </div>
    <input className=" rounded-sm absolute inset-x-5 bottom-20 w-5/5 font-sans" type="text" name="" id="" onChange={(e)=>{ setCurrQues(e.target.value)}} value={currQues}/>
    <button className=" bg-red-200 rounded-lg absolute inset-x-5 bottom-10 w-1/5 mx-auto" type="button" onClick={handleClick}>Ask</button>
    {/* <div className="absolute bottom-28 bg-green-200 w-4/5 px-5 my-2 h-4/5 mx-5">
    {(ques.length!=0)? ques.slice(0).map((item,idx)=>{ console.log(idx,28+(4*(idx+1)));return <p className={`absolute bottom-${6+(idx*4)} bg-yellow-200 mx-auto w-fit`}>{item}</p>}) :<p>0</p>}
    </div> */}

{/* <div className="absolute flex flex-col flex-wrap bottom-28 w-full mx-auto px-5 my-2">
  {/* classes inside p of ques :- mx-auto h-fit w-fit basis-2/3 space-y-8  */}
    {/*{(ques.length!=0)? ques.slice(0).map((item,idx)=>{ console.log(idx,28+(4*(idx+1)));return <p key={idx} className={` flex-wrap bg-yellow-200  my-2`}>{item}</p>}) :<p></p>}
    </div> */}


    {/* {(ques.length!=0)? ques.slice(0).map((item,idx)=>{return <p className={` absolute bottom-${(10 * (idx+1))} bg-yellow-200 my-2 mx-auto w-fit`}>{item}</p>}) :<p>0</p>} */}
</div>
    
  </div>
    );
}
export default Chat_Ask;