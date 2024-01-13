import react from "react";

function Text_Box({text_data,setTextData})
{
    return( <textarea  className={` border-2 relative container w-full mx-auto my-5 h-40 text-justify  text-pretty break-all font-sans border rounded-lg border-cyan-400 bg-sky-500 text-cyan-50 shadow-lg text-justify my-2`} type="text" name="" id="" value={text_data} onChange={(e)=>{setTextData(e.target.value)}} />
        );
}
export default Text_Box;