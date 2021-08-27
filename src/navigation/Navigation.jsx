import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div id="navbar">
            <div className="item">
                <NavLink to="/schedule">
                    <div className="nav-item">Schedule</div>
                </NavLink>
            </div>
            <div className="item">
                <NavLink to="/daily">
                    <div className="nav-item">Daily</div>
                </NavLink>
            </div>
            <div className="item">
                <NavLink to="/something">
                    <div className="nav-item">Something</div>
                </NavLink>
            </div>
        </div >
    );
}

export default Navigation;