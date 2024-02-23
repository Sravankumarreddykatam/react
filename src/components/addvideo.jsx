import { useRef } from "react";
import"../styles/addvideo.css"
const AddVideo = () => {
    let thumb=useRef()
    let title=useRef()
    let Channelname=useRef()
    let channelIcon=useRef()
    let views=useRef()

    let submit=(e) =>
    {
        e.preventDefault()
        let user={
            thumbnail:thumb.current.value,
            title:title.current.value,
            channelName:Channelname.current.value,
            channelIcon:channelIcon.current.value,
            views:views.current.value

        }

        fetch('http://localhost:3423/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })


    }





    return ( 
        <div className="addvideo">
       <div className="form">
            <form onSubmit={submit}>
              
                    <label htmlFor="">Thumbnail:</label>
                    <input ref={thumb} type="url" />
                    <br /><br />
                    <label htmlFor="">Title:</label>
                    <input ref={title} type="text" />
                    <br /><br />
                    <label htmlFor="">ChannelName:</label>
                    <input ref={Channelname} type="text" />
                    <br /><br />
                    <label htmlFor="">ChannelIcon:</label>
                    <input ref={channelIcon} type="url" name="" id="" />
                   <br /><br />
                    <label htmlFor="">Views:</label>
                    <input ref={views} type="text" />
                    <br /><br />
                    <button type="submit">Add Video</button>
              
            </form>
        </div>
        </div>
     );
}
 
export default AddVideo;
