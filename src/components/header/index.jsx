import { Link } from "react-router-dom";
import './index.css'

const Header = ()=>{

    return (
        <div className="my-nav">
            
            <Link to='/'>
              <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" width="80px" />
            </Link>
            <ul>
                <Link to='/'>Home</Link>
                <Link to ='/jobs'> Jobs</Link>
            </ul>

            <button className="btn btn-info"> Logout</button>
        
        </div>
    )

}

export default Header;