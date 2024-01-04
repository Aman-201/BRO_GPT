import React, { useEffect, useState } from "react";
import { Text_Box, Dropdown } from "../components";
import axios  from "axios";
import configs from "../config/configs";

function Bro_Translate(){
    const [text1,setText1]=useState('');
    const [text2,setText2]=useState('');
    const [lang1,setLang1]=useState('');
    const [lang2,setLang2]=useState('');
    
    useEffect(()=>{
        if(lang1 && lang2 && text1)
       { console.log(lang1,lang2,text1);
        console.log(typeof(lang1));
        console.log(typeof(lang2));
        console.log(typeof(text1));
        // console.log(typeof(lang2))
    (async()=>{
        try{
            // console.log("inside try")
            const encodedParams = new URLSearchParams();
            console.log(encodedParams);
            encodedParams.set('q', text1);
            encodedParams.set('target', lang2);
            encodedParams.set('source', lang1);
            console.log("inside async")
            // console.log("api key----",configs.rapidApiKey)

            const options = {
                method: 'POST',
                url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
                headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                //   'Accept-Encoding': 'application/gzip',
                  'X-RapidAPI-Key': configs.rapidApiKey,
                  'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
                },
                data: encodedParams,
              };
              console.log("before try")
              try {
                console.log("inside try")
                const response = await axios.request(options);
                // console.log(typeof(response))
                // console.log(response.data);
                console.log(response.data.data.translations[0].translatedText);
                setText2(response.data.data.translations[0].translatedText)
                
            } catch (error) {
                console.error(error);
            }
        }
        catch(error){
            console.log(error)
        }
        
    })()
    //api code
    
   
// encodedParams.set('q', text1);
// encodedParams.set('target', lang1);
// encodedParams.set('source', lang2);

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': '923abbaa57msh6a99864040968f4p16c21cjsne6b431b67afa',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams,
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data.translations[0].translatedText);
//     setText2(response.data.translations[0].translatedText)
    
// } catch (error) {
// 	console.error(error);
// }


    }
    },[lang1,lang2])
return (
    <div>
        <h1>Welcome to bro translator</h1>
        <div>
           <Text_Box text_data={text1} setTextData={setText1}/>
        </div>
        <div>
            <span><Dropdown lang_type="source_lanuage" lang={lang1} setLang={setLang1}/></span> <span><Dropdown lang_type="target_lanuage" lang={lang2} setLang={setLang2} /></span>
        </div>
        <div>
        <Text_Box text_data={text2} setTextData={setText2}/>
        </div>
    </div>
);

}
export default Bro_Translate;