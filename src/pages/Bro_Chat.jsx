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
    <div className="container w-full flex flex-row my-0">
      <Gpt_Options />
  <Chat_Ask />
 <Chat_Reply />
</div>

);
}
export default Bro_Chat