import Typed from 'react-typed';
import './Table.css'

function TableDaySegment(props) {
    var date = new Date();
    date.setDate(props.date);
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <td className="dayNum">
            <p className={props.isRed ? "num red" : "num"}>{date.getDate()}</p>
            <p className="day">{weekday[date.getDay()]}</p>
            <p className="dayMobile">{weekday[date.getDay()].substring(0, 3)}</p>
        </td>
    )
}

function TableDescSegment(props) {
    return (
        <td>
            <p className="content">{props.description}</p>
        </td>
    );
}

function Table(props) {
    return (
        <div id="tableFlex">
            <table id="dayTable">
                <tr id="dayPanel">
                    <TableDaySegment date={new Date().getDate() - 1} />
                    <TableDaySegment date={new Date().getDate()} isRed="true " />
                    <TableDaySegment date={new Date().getDate() + 1} />
                    <TableDaySegment date={new Date().getDate() + 2} />
                    <TableDaySegment date={new Date().getDate() + 3} />
                    <TableDaySegment date={new Date().getDate() + 4} />
                    <TableDaySegment date={new Date().getDate() + 5} />
                </tr>
            </table>
            <table id="contentTable">
                <tr id="contentPanel">
                    <TableDescSegment description={props.description[0]} />
                    <TableDescSegment description={props.description[1]} />
                    <TableDescSegment description={props.description[2]} />
                    <TableDescSegment description={props.description[3]} />
                    <TableDescSegment description={props.description[4]} />
                    <TableDescSegment description={props.description[5]} />
                    <TableDescSegment description={props.description[6]} />
                </tr>
            </table>
        </div>
    );
}

export default Table;