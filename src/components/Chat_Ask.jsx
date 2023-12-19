import React,{useState} from "react";

function Chat_Ask()
{
    const [ques,setQues]=useState([]);
  const [currQues,setCurrQues]=useState('write here');
  function handleClick(){
    setQues((prev)=>[...prev,currQues]);
    console.log()
    // setCurrQues('write here');
  }
    return (
<div className="basis-2/4 bg-gray-200 h-auto mx-10">
    <h2>Ask Bro</h2>
    <div className="relative h-full">
    <input className="absolute inset-x-5 bottom-20 w-4/5" type="text" name="" id="" onChange={(e)=>{ setCurrQues(e.target.value)}} value={currQues}/>
    <button className=" bg-red-200 absolute inset-x-5 bottom-10 w-1/5 mx-auto" type="button" onClick={handleClick}>Ask</button>
    {/* <div className="absolute bottom-28 bg-green-200 w-4/5 px-5 my-2 h-4/5 mx-5">
    {(ques.length!=0)? ques.slice(0).map((item,idx)=>{ console.log(idx,28+(4*(idx+1)));return <p className={`absolute bottom-${6+(idx*4)} bg-yellow-200 mx-auto w-fit`}>{item}</p>}) :<p>0</p>}
    </div> */}

<div className="absolute flex flex-col bottom-28 container bg-green-200 w-4/5 px-5 my-2  mx-5">
    {(ques.length!=0)? ques.slice(0).map((item,idx)=>{ console.log(idx,28+(4*(idx+1)));return <p className={` basis-2/3 space-y-8 bg-yellow-200 mx-auto h-fit w-fit my-2`}>{item}</p>}) :<p></p>}
    </div>


    {/* {(ques.length!=0)? ques.slice(0).map((item,idx)=>{return <p className={` absolute bottom-${(10 * (idx+1))} bg-yellow-200 my-2 mx-auto w-fit`}>{item}</p>}) :<p>0</p>} */}
</div>
    
  </div>
    );
}
export default Chat_Ask;