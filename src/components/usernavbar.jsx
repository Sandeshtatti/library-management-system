import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (
        <div className="usernavbar">

            <div className="navbar">
                <h2>User Portal</h2>
                <ul className="links">
                    <li><Link to='/user/'> Dashboard</Link></li>
                    <li><Link to='/user/book-list'>Book List</Link></li>
                    <li><Link to="/">LOG OUT</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default UserNavbar;