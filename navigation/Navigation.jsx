import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    var date = new Date();
    return (
        <div id="navbar">
            <div className="item">
                <NavLink to="/schedule">
                    <div className="nav-item">Schedule</div>
                </NavLink>
            </div>
            <div className="item">
                <NavLink to={"/daily/"+date.getDay()}>
                    <div className="nav-item">Daily</div>
                </NavLink>
            </div>
        </div >
    );
}

export default Navigation;