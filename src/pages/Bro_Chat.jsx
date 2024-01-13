import React, { useState } from "react";
import { Chat_Ask, Gpt_Options , Chat_Reply} from "../components";
function Bro_Chat(){
  // const [ques,setQues]=useState([]);
  // const [currQues,setCurrQues]=useState('write here');
  // function handleClick(){
  //   setQues((prev)=>[...prev,currQues]);
  //   console.log()
  //   // setCurrQues('write here');
  // }
return (
    <div className="container  flex bg-zinc-500 flex-row my-0 mx-auto">
      <Gpt_Options />
  <Chat_Ask />
 <Chat_Reply />
</div>

);
}
export default Bro_Chat