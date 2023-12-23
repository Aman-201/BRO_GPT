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
        <div className="basis-3/4 bg-indigo-200 h-screen">
             <h1>Bro's Reply</h1>
             <div className="relative h-full">
             <div className="absolute flex flex-col bottom-28 container bg-green-200 w-4/5 px-5 my-2  mx-5">
    {(allAns.length!=0)? allAns.slice(0).map((item,idx)=>{ console.log(idx,28+(4*(idx+1)));return <p key={idx} className={` basis-2/3 space-y-8 bg-yellow-200 mx-auto h-fit w-fit my-2`}>{item}</p>}) :<p></p>}
    </div>
                </div>
             {/* <h2>{ans}</h2> */}
        </div>
       
    );
}
export default Chat_Reply;