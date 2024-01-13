import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import axios from "axios";
import configs from "../config/configs";
function Chat_Reply()
{
    const ques=useSelector((state)=>{console.log("inside chat reply state value of ques is ----> ",state.ques);return state.ques})
    const [ans,setAns]=useState('');
    const [allAns,setAllAns]=useState([]);
    useEffect(()=>{
        let data = JSON.stringify({
            "prompt": {
              "text": ques
            }
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: configs.bardUrl+configs.bardApiKey,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          if(ques!="write here" && ques!="" && ques!=null)
          {
            console.log("api call made for ques :----->",ques)
            axios.request(config)
          .then((response) => {
            setAns(JSON.stringify(response.data.candidates[0].output))
            setAllAns((prev)=>[...prev,JSON.stringify(response.data.candidates[0].output)])
            console.log(response.data.candidates[0].output);
          })
          .catch((error) => {
            setAns("error while getting the ans , please as some relevent ques")
            setAllAns((prev)=>[...prev,"error while getting the ans , please as some relevent ques"])
            console.log(error);
          });}
          
    },[ques])


    return (
        <div className="basis-2/4 bg-zinc-500 border rounded-lg border-slate-400 shadow-lg">
             <h1>Bro's Reply</h1>

             <div className="relative h-screen bg-zinc-500 w-5/5">
             <div className="absolute flex flex-col bottom-12 w-5/5 my-2 px-5 mx-auto text-wrap">
    {(allAns.length!=0)? allAns.slice(0).map((item,idx)=>{ console.log(idx,28+(4*(idx+1)));return <p key={idx} className={`flex-wrap whitespace-break-spaces whitespace-pre-wrap	 font-sans border rounded-lg border-slate-400 shadow-lg text-slate-50 text-justify my-2`}>{item}</p>}) :<p></p>}
    </div>
                </div>
             {/* <h2>{ans}</h2> */}
        </div>
       
    );
}
export default Chat_Reply;



//todo :- update the responsiveness of response space overlaping with others and /n in items(response of api)