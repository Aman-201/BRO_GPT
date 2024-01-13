import React, { useState } from "react";
import Dropdown from "./Dropdown"
function Gpt_Options()
{
  const [gptV,setGptV]=useState('3.5')
    return (
<div className="basis-1/4 bg-zinc-500 mx-10 border rounded-lg border-slate-400 shadow-lg h-screen">
    <h2 className="">gpt options</h2>
    <div  className=" my-4 h-auto mx-1 border rounded-lg border-slate-400 shadow-lg">
      <Dropdown lang_type="GPT Version" lang={gptV} setLang={setGptV} data={[{"3.0":"3.0"},{"3.5":"3.5"},{"4.0":"4.0"}]}/>
    </div>
  </div>
    );
}
export default Gpt_Options;