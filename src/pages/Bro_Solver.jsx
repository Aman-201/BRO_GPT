import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI,HarmCategory,HarmBlockThreshold} from "@google/generative-ai"
import { Buffer } from 'buffer';
import configs from "../config/configs";

window.Buffer = Buffer;
function Bro_Solver(){
    const [imgSrc,setImgSrc]=useState('');
    const [caption,setCaption]=useState('');
    const [image,setImage]=useState('');
    const [imageInlineData,setImageInlineData]=useState('');
    const [solution,setSolution]=useState('');
    const genAI = new GoogleGenerativeAI(configs.bardApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        console.log(reader);
        reader.readAsDataURL(file);
        // console.log(reader.readAsDataURL(file))
        reader.onload = () => {console.log(reader.result);resolve(reader.result)}
        reader.onerror = (error) => reject('Error: ', error);
    })


    // Converts a File object to a GoogleGenerativeAI.Part object.

async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        // console.log(reader)
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
    });

    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
}









    // useEffect(()=>{
    //     if(imgSrc!='' && imgSrc!=undefined)
    //     {
              
    //           const MODEL_NAME = "gemini-pro-vision";
    //           const API_KEY = "AIzaSyDoz7XvFkNa2W_5DTjJDxOnj6SplBc4CN8";
              
    //           async function run() {
    //             const genAI = new GoogleGenerativeAI(API_KEY);
    //             const model = genAI.getGenerativeModel({ model: MODEL_NAME });
              
    //             const generationConfig = {
    //               temperature: 0.4,
    //               topK: 32,
    //               topP: 1,
    //               maxOutputTokens: 4096,
    //             };
              
    //             const safetySettings = [
    //               {
    //                 category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    //                 threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //               },
    //               {
    //                 category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    //                 threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //               },
    //               {
    //                 category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    //                 threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //               },
    //               {
    //                 category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    //                 threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //               },
    //             ];
              
    //             if (!{imgSrc}) {
    //               throw new Error("Could not find images in current directory.");
    //             }
              
    //             const parts = [
    //               {text: {caption}},
    //               {
    //                 inlineData: {
    //                   mimeType: "image/png",
    //                   data: Buffer.from(imgSrc).toString("base64")
    //                 }
    //               },
    //             ];
              
    //             const result = await model.generateContent({
    //               contents: [{ role: "user", parts }],
    //               generationConfig,
    //               safetySettings,
    //             });
              
    //             const response = result.response;
    //             console.log(response.text());
    //           }
              
    //           run();

    //     }
    // },[imgSrc])
    function handleImage(e)
    {
        console.log("inside handle img");
        const file=e.target.files[0];

        // getting base64 from file to render in DOM
        getBase64(file)
        .then((result) => {
            setImage(result);
        })
        .catch(e => console.log(e))

        // generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });


    }

    async function aiImageRun() {
        console.log("indise ai run")
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent([
            caption, imageInlineData
        ]);
        const response = await result.response;
        const text = response.text();
        console.log(response)
        console.log(text)
        setSolution(text);
    }

    function handleClick()
    {
        console.log("inside handleClick")
        aiImageRun();
    }
    return <div className="h-screen bg-rose-300">
 <h1 className="bg-rose-500 rounded-3xl w-3/5 text-rose-200 text-pink-50 mx-auto relative top-6 font-sans text-3xl py-8">Welcome to bro solver</h1>
 <div className="flex flex-col w-4/5 relative top-20 mx-auto my-auto ">
 <div className="flex flex-row w-full bg-rose-300 rounded-xl border border-rose-500 mx-auto my-auto">
    <p className=" text-rose-200 text-pink-50 font-sans  mx-1">Add Caption for Image</p>
    <textarea name="" id="" cols="30" rows="2" className="mx-2 my-2 bg-rose-300 border border-rose-500 font-sans text-pink-50" onChange={(e)=>{console.log(e.target.value); setCaption(e.target.value)}}></textarea>
    <input type="file" name="" id="" className="mx-2 my-3" onChange={(e)=>{console.log(e.target.value);console.log(e); setImgSrc(URL.createObjectURL(e.target.files[0]));handleImage(e)}} />
    {(imgSrc)?<img src={image} className="mx-2 my-2 w-16 h-16"></img>:<p></p>}
    <button className="rounded-full bg-rose-400 border border-rose-500 text-rose-200 font-sans" type="submit" onClick={handleClick}> get solution</button>
 </div>

 <div className="w-4/5 my-5 mx-auto bg-rose-400 border border-pink-200 h-full">
    <p className="text-rose-200 bg-rose-400 text-pink-50 font-sans border border-pink-200 w-full text-xl mx-auto rounded-lg my-3">solver response</p>

{(solution!='')?<pre className="mx-auto my-auto bg-rose-400 border border-pink-200 text-rose-200 text-pink-50 rounded-lg font-sans">{solution}</pre>:''}
 </div>
 </div>
 
    </div>
   

}
export default Bro_Solver;

//todo correct the issue of overflowing of the response text from the div container