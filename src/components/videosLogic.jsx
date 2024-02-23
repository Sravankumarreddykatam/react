const Videoslogic = ({videos_data,del,title}) => {
    return ( 
     
      <div className="vid">
        <h1>{title}</h1>
         <div className="videologic">
      
      {(videos_data.length==0) ? <h1>NO VIDEOS TO DISPLAY</h1> :
      videos_data.map((data) =>
      (
         <div className="video">
             <div className="thumbnail">
                 <img  src={data.thumbnail} alt="" />
             </div>
             <div className="details">
                 <div className="channelIcon">
                     <img src={data.channelIcon} alt="" />
                 </div>
                 <div className="title">
                     <p>{data.title}</p>
                     <p>{data.channelName}</p>
                     <p>{data.views}M views</p>
                     <button onClick={()=>del(data.id,data.channelName)}>delete</button>
                 </div>
             </div>
         </div>
      )
      )
      }
    </div>






      </div>
          
      
     );
}
 
export default Videoslogic;