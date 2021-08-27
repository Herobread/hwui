import './Header.css'

const Header = (props) => {
    var date = new Date();
    return (
        <div>
            <h1 id="header">{props.text}</h1>
        </div>
    );
}

export default Header;