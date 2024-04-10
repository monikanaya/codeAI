import React, { useContext } from 'react'
import'./Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'



const Main =() => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p><b>AskMee</b></p>
           <img src={assets.user_icon} alt=''/>
        </div>
        
        <div className="main-container">
        {!showResult?
        <>
        <div className="greet">
            <p><span>Hello!</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
              <div className="card">
                <p>suggest beautiful place to see on an upcoming road.</p>
                <img src={assets.compass_icon} alt=''/>
              </div>
              <div className="card">
                <p>Briefly summerize this concept: urban planning.</p>
                <img src={assets.bulb_icon} alt=''/>
              </div>
              <div className="card">
                <p>Brainstrom team bonding activities for our work retreat.</p>
                <img src={assets.message_icon} alt=''/>
              </div>
              <div className="card">
                <p>Improving the readability of the following code.</p>
                <img src={assets.code_icon} alt=''/>
              </div>
          </div>
        </>

        :<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt=''/>
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt=''></img>
            {loading  
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
             
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
        }
          </div>
          </div >
          }
          
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)}value={input} type='text' placeholder='enter a prompt here' />
              <img src={assets.gallery_icon} alt=''/>
              <img src={assets.mic_icon} alt=''/>
              {input? <img onClick={()=>onSent()}src={assets.send_icon} alt=''/>:null}
            </div>
          </div>
          

        </div>
    </div>
  )
}

export default  Main