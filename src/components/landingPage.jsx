import '../styles/landingPage.css'
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="selectlogin">
                <h1 className='link1'>Library Management System</h1>
                <img className='logo11' height='50px' width='50px' src="images/userlogo11.png" alt="" />
                <img className='logo22' height='50px' width='50px' src="images/userlogo22.png" alt="" />
                <Link to='/admin-login' className="linkname1">Admin </Link> 
                <Link to='/user-login' className="linkname2">User </Link>
            </div>

        </div>
    )
}
export default LandingPage;