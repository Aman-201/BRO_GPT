import React from "react";
import languages from "../data/languages";
function Dropdown({lang_type, lang,setLang})
{
    // console.log(languages)
    return ( <div>
        <label htmlFor={lang_type}>{lang_type}</label>
         <select name={lang_type} id={lang_type} onChange={(e)=>{console.log(e);setLang(e.target.value)}}> 
       {(languages!=undefined)?languages?.map((option,idx) =>{ return <option key={option.value} value={Object.values(option)}>{Object.keys(option)}</option>}):""}
        {/* <input type="select" name="sourec_lang" id="sourec_lang">  */}
        {/* <option id="1">"wde"</option> */}
            {/* {Object.values(languages).forEach((value,idx)=>{ console.log(value,idx);return <option key={idx} value={languages[value]}>{value}</option>})} */}
            {/* </input> */}
        </select> 
    </div> );
}
export default Dropdown;