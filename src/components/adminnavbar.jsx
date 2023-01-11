import { Link } from "react-router-dom";
import '../styles/adminnavbar.css'
const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="navbar">
                <h2>Admin Portal</h2>
                <ul className="links">
                    <li><Link to='/admin/'> Dashboard</Link></li>
                    <li><Link to='/admin/add-book'>Add Book</Link></li>
                    <li><Link to='/admin/add-user'>Add User</Link></li>
                    <li><Link to='/admin/book-list'>Book List</Link></li>
                    <li><Link to='/admin/user-list'>User List</Link></li>
                    <li><Link to="/">LOG OUT</Link></li>
                </ul>
                
            </div>

        </div>
    );
    
}

export default AdminNavbar;