import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './../Styles/NotFound.css'; // Import the CSS file

function NotFound() {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <FontAwesomeIcon icon={faBan} className='custom-icon' />
            <h4 className="custom-heading">Error 404 - Page Not Found</h4>
            <button type="button" className="custom-btn" onClick={() => navigate('/')}>Back to home</button> {/* Use className instead of class */}
        </div>
    )
}
export default NotFound;
