import './Header.css';
import { NavLink, BrowserRouter as Router, useParams } from "react-router-dom";


function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    return days[date];
  }

const Header = (props) => {
    let { id } = useParams();

    let idNext = parseInt(id)+1;
    let idPrevious = parseInt(id)-1;
    if(idNext == 7)
        idNext = 0;

    if(idPrevious == -1)
        idPrevious = 6;

    var textH = props.text;

    textH = getWeekDay(id);

    var date = new Date();

    if (props.isButtons == 1) {
        return (
            <div id="header-wrapper">
                <h1 id="header" style={{ float: "left" }}>{textH}</h1>
                <NavLink to={"/daily/"+idNext}>
                    <div className="nav-item right"><img src="https://i.ibb.co/PWdPhZQ/coolarrow-removebg-preview.png"/></div>
                </NavLink>
                <NavLink to={"/daily/"+idPrevious}>
                    <div className="nav-item left"><img src="https://i.ibb.co/PWdPhZQ/coolarrow-removebg-preview.png"/></div>
                </NavLink>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1 id="header">{props.text}</h1>
            </div>
        );
    }
}

export default Header;