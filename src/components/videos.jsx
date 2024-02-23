import { useState,useEffect } from "react";
import "../styles/videos.css"
import Videoslogic from "./videosLogic";

const Videos = () => {
    
    let[videos,setVideos]=useState([])
    useEffect(()=>{
      let fetchdata=async()=>{
        let response =await fetch('  http://localhost:3423/videos')
        let data=await response.json()
        setVideos(data)
    
      
      }
    fetchdata()
    }
    ,[])
 
  let d=(id,channelName)=>
  {
    setVideos(videos.filter((data)=>id!=data.id))
    alert(`${channelName} is removed`)
    
  }
    return ( 
        <div className="videos">
        
       <Videoslogic videos_data={videos} del={d}  title={"ALL Video"}/>
       <Videoslogic videos_data={videos.filter(x=>x.views>=5)} del={d}  title={">5M views"}/>
       <Videoslogic videos_data={videos.filter(x=>x.views<5)} del={d}  title={"<5M views"}/>

        </div>
     );
}
 
export default Videos;