import './Daily.css';
import { Redirect } from 'react-router';

const Clock = (props) => {
    if (props.isFirst == 1)
        return (
            <p className="event-info" id="Clock">00:00</p>
        );
    else
        return (
            <p className="event-info">{props.info}</p>
        );
}

function ClockChanger() {
    var date = new Date();

    var timeLeft = parseInt((endTimeNow.getTime() - date.getTime()) / 1000);
    var seconds = timeLeft % 60 < 10 ? '0' + timeLeft % 60 : timeLeft % 60;
    timeLeft /= 60;
    var minutes = parseInt(timeLeft % 60) < 10 ? '0' + parseInt(timeLeft % 60) : parseInt(timeLeft % 60);

    var time = (parseInt(timeLeft / 60) > 0 ? parseInt(timeLeft / 60) + ":" : "") + minutes + ":" + seconds;

    if (time == "00:00" && window.location.pathname == "/daily") {
        console.log(createEventList());
        window.location.reload(false);
        //document.getElementById('event-wrapper').forceUpdate();
    }

    try {
        document.getElementById("Clock").textContent = time;
    } catch (error) {
        // no one needs to know that clock is not working)
    }

}

const Event = (props) => {
    return (
        <div className="event-item">
            <p className="event-name">{props.name}</p>
            <p className="event-time">{props.time}</p>
            <Clock isFirst={props.isFirst} info={props.info} />
        </div>
    );
}

var endTimeNow = new Date();

function createEventList() {
    var eventList = [];

    //var date = new Date("2021-08-23T07:00:00.000Z");
    var date = new Date();

    var dayPos = date.getDay();
    //console.log("Day: " + dayPos);
    var isFirst = 1;
    var cabinet = "";
    var isId = "";
    var now = '';
    var timeCompare = 0;
    for (var i = 0; i < table[dayPos].length; i += 1) {
        cabinet = table[dayPos][i][3];

        var startTime = new Date();
        startTime.setHours(table[dayPos][i][1].substring(0, 2));
        startTime.setMinutes(table[dayPos][i][1].substring(3, 5));
        startTime.setSeconds(0);

        var endTime = new Date();
        endTime.setHours(table[dayPos][i][2].substring(0, 2));
        endTime.setMinutes(table[dayPos][i][2].substring(3, 5));
        endTime.setSeconds(0);

        if (table[dayPos][i][2] == "00:00")
            endTime.setDate(endTime.getDate() + 1);

        isId = "";
        now = "";
        if (isFirst == 1) {
            now = "Now: ";
            timeCompare = i;
            endTimeNow = endTime;
        }

        if (startTime.getTime() - date.getTime() > 0 || endTime.getTime() - date.getTime() > 0) {
            eventList.push(<Event name={now + table[dayPos][i][0]} time={table[dayPos][i][1] + `-` + table[dayPos][i][2]} info={cabinet} isFirst={isFirst} />);
            isFirst = 0;
        }
    }

    return eventList;
}

const Daily = () => {
    return (
        <div className="event-wrapper">
            <div id="event-wrapper">
                {createEventList()}
            </div>
        </div>
    );
}
setInterval(ClockChanger, 1000);

export default Daily;

/// schedule
var table = [
    [ //sunday
        ["Chill", '00:00', '00:00', " "]
    ],
    [ //monday
        ["\"Free\" time1", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time1", '15:15', '00:00', " "]
    ],
    [ // tuesday
        ["\"Free\" time2", '00:00', '08:25', " "],
        ["Subject1 long name", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time2", '15:15', '00:00', " "]
    ],
    [ // wednesday
        ["\"Free\" time3", '00:00', '08:25', " "],
        ["Ukrainian history", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Eglish/Informatics", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time3 fds fds afd afdsdfsd f ds", '15:15', '00:00', " "]
    ],
    [ // thursday
        ["\"Free\" time4", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '09:30', "121"],
        ["Lunch", '9:30', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time4", '15:15', '00:00', " "]
    ],
    [ // Friday
        ["\"Free\" time5", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time5", '15:15', '00:00', " "]
    ],
    [ // Saturday
        ["\"Free\" time6", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time6", '15:15', '00:00', " "]
    ]
]
