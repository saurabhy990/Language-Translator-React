 
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const[data,setData] =  useState('')//input text state
  const[result ,setResult] =useState('')//api state 
  const[sourceLanguage,setSourceLanguage] = useState('en')
  const[targetLanguage,setTargetLanguage] = useState('hi')


   

 async function getTranslateData(){
    try{  
     
      const requestData= {
        'source_language': sourceLanguage,
        'target_language': targetLanguage,
        'text': data
      }
      
      // const encodedParams = new URLSearchParams();
      //   encodedParams.set('source_language', 'en');
      //   encodedParams.set('target_language', 'hi');
      //   encodedParams.set('text',data);

      const options = { 
        method :'post',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers:{
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '2bb8d71a89mshee5986df3e0af23p118153jsn33f76d96ba11',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'

            
        },
        data: requestData
         
             
      }

      const res = await  axios.request(options)//api call 
      console.log(res);
      setResult(res.data.data.translatedText)
     

    }catch{
        console.log("error Invalid Request ");
    }
   
    
 }
  return (
   
 


    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'4px',margin:"200px",backgroundColor:"whitesmoke"}}>
      <h2>Language Translator</h2>
      <label htmlFor="">Source Language</label>
      <select name="source"  
             onChange={(e)=>setSourceLanguage(e.target.value)} 
             value={sourceLanguage}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="te">Telgu</option>
        <option value="zh-TW">Chinese</option>
        <option value="ja">Japnese</option>
        <option value="bn">Bengali</option>
      </select>
      <br/>
      <label htmlFor="">Target Language</label>
      <select name="target" 
            
            onChange={(e)=>setTargetLanguage(e.target.value)}
            value={targetLanguage}>
      <option value="hi">Hindi</option>
      <option value="en">English</option>
      <option value="te">Telgu</option>
      <option value="zh-TW">Chinese</option>
      <option value="ja">Japnese</option>
      <option value="bn">Bengali</option>
      
      </select>
      <br/>
       <input type="text" name="data" id="" placeholder='enter text' onChange={(e)=>setData(e.target.value)} />
       <button onClick={getTranslateData} >Translate</button>
       <br/> 

       <h1>{ result}</h1>
    </div>
  );
}

export default App;
