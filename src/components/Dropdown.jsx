import React, { useState } from "react";
import languages from "../data/languages";
function Dropdown({lang_type, lang,setLang,data=[]})
{
    const [languages1,setLanguages1]=useState((data.length!=0)?data:languages);
   
    // console.log(languages)
    return ( <div>
        
        <label htmlFor={lang_type} className="mx-2" >{lang_type}  </label>
        
         <select name={lang_type} id={lang_type} onChange={(e)=>{console.log(e);setLang(e.target.value)}}> 
       
       {(languages1!=undefined)?languages1?.map((option,idx) =>{ return <option key={option.value} value={Object.values(option)}>{Object.keys(option)}</option>}):""}
        {/* <input type="select" name="sourec_lang" id="sourec_lang">  */}
        {/* <option id="1">"wde"</option> */}
            {/* {Object.values(languages).forEach((value,idx)=>{ console.log(value,idx);return <option key={idx} value={languages[value]}>{value}</option>})} */}
            {/* </input> */}
        </select> 
    </div> );
}
export default Dropdown;