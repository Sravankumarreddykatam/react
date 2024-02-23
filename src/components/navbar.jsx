import { Link } from "react-router-dom";
import "../styles/navbar.css"



const Navbar = () => {
    return ( 
<div className="navbar">
<div className="logo">
    
   <Link to="/"><img width="100px" src="/images/logo.png" alt="" /></Link>
</div>
<div className="search">
    <input type="text"  placeholder="Search"/>
</div>
<div className="options">
    <Link to="/addvideo">Addvideo</Link>
    <a>sign in</a>
</div>

</div>


     );
}
 
export default Navbar;