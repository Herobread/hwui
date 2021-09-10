import './Daily.css';
import { Redirect } from 'react-router';
import { useParams } from "react-router-dom";

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
    if (blockClock == 0){
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
        // no one needs to know that clock is not working))
    }
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

var blockClock = 0;

function createEventList(id) {
    var eventList = [];

    //var date = new Date("2021-08-23T07:00:00.000Z");
    var date = new Date();

    // var dayPos = date.getDay();
    var dayPos = id;
    //console.log("Day: " + dayPos);
    var isFirst = 1;
    var cabinet = "";
    var isId = "";
    var now = "";
    var timeCompare = 0;

    if(id != date.getDay()) {
        blockClock = 1;
        isFirst = 0;
        date.setHours(0,0,0);
    }
    else {
        blockClock = 0;
    }

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
    const { id } = useParams();
    return (
        <div className="event-wrapper">
            <div id="event-wrapper">
                {createEventList(id)}
            </div>
        </div>
    );
}
setInterval(ClockChanger, 1000);

export default Daily;

/// schedule
var table = [
        [["Chill","00:00","00:00"," "]
    ],
    [
        ['"Free" time',"00:00","08:35"," "],
        ["Astronomy/World liturature","08:35","09:20","121"],
        ["Break","09:20","09:30"," "],
        ["Ukrainian language","09:30","10:15","322/121"],
        ["Break","10:15","10:25"," "],
        ["Ukrainian language","10:25","11:10","322/121"],
        ["Lunch","11:10","11:25"," "],
        ["P.E.","11:25","12:10","-"],
        ["Break","12:10","12:20"," "],
        ["Algebra, lecture","12:20","13:05","121"],
        ["Break","13:05","13:15"," "],
        ["Algebra, lecture","13:15","14:00","121"],
        ["Dinner","14:00","14:10"," "],
        ['"Free" time',"14:10","00:00"," "]
    ],
    [
        ['"Free" time',"00:00","08:35"," "],
        ["Informatics","08:35","09:20","105a/104"],
        ["Break","09:20","09:30"," "],
        ["Informatics","09:30","10:15","105a/104"],
        ["Break","10:15","10:25"," "],
        ["Geometry, lecture","10:25","11:10","121"],
        ["Lunch","11:10","11:25"," "],
        ["Geometry, lecture","11:25","12:10","121"],
        ["Break","12:10","12:20"," "],
        ["English","12:20","13:05","121/317"],
        ["Break","13:05","13:15"," "],
        ["World history","13:15","14:00","121"],
        ["Dinner","14:00","14:10"," "],
        ['"Free" time',"14:10","00:00"," "]
    ],
    [
        ['"Free" time',"00:00","08:35"," "],
        ["Biology","08:35","09:20","121"],
        ["Break","09:20","09:30"," "],
        ["Geometry/Physics","09:30","10:15","121/208"],
        ["Break","10:15","10:25"," "],
        ["Geometry/Physics","10:25","11:10","121/208"],
        ["Lunch","11:10","11:25"," "],
        ["Physics/Geometry","11:25","12:10","208/121"],
        ["Break","12:10","12:20"," "],
        ["Physics/Geometry","12:20","13:05","208/121"],
        ["Break","13:05","13:15"," "],
        ["P.E.","13:15","14:00","-"],
        ["Dinner","14:00","14:10"," "],
        ['"Free" time',"14:10","00:00"," "]
    ],
        [['"Free" time',"00:00","08:35"," "],
        ["Geography","08:35","09:20","121"],
        ["Break","09:20","09:30"," "],
        ["Algebra, lecture","09:30","10:15","121"],
        ["Break","10:15","10:25"," "],
        ["English","10:25","11:10","121/317"],
        ["Lunch","11:10","11:25"," "],
        ["Ukrainian literature","11:25","12:10","121"],
        ["Break","12:10","12:20"," "],
        ["Ukrainian literature","12:20","13:05","121"],
        ["Break","13:05","13:15"," "],
        ["Physics, lecture","13:15","14:00","121"],
        ["Break","14:00","14:10"," "],
        ["Physics, lecture","14:10","14:55","121"],
        ["Dinner","14:55","15:05"," "],
        ['"Free" time',"15:05","00:00"," "]
    ],
        [['"Free" time',"00:00","08:35"," "],
        ["IT","08:35","09:20","103/105a"],
        ["Break","09:20","09:30"," "],
        ["Ukrainian protection","09:30","10:15","121"],
        ["Break","10:15","10:25"," "],
        ["Ukrainian history","10:25","11:10","121"],
        ["Lunch","11:10","11:25"," "],
        ["Algebra/Physics","11:25","12:10","121/lab10"],
        ["Break","12:10","12:20"," "],
        ["Algebra/Physics","12:20","13:05","121/lab10"],
        ["Break","13:05","13:15"," "],
        ["Physics/Algebra","13:15","14:00","lab10/121"],
        ["Break","14:00","14:10"," "],
        ["Physics/Algebra","14:10","14:55","lab10/121"],
        ["Dinner","14:55","15:05"," "],
        ['"Free" time',"15:05","00:00"," "]
    ],
        [['"Free" time',"00:00","08:35"," "],
        ["Physics, lecture","08:35","09:20","121"],
        ["Break","09:20","09:30"," "],
        ["Physics, lecture","09:30","10:15","121"],
        ["Break","10:15","10:25"," "],
        ["Chemistry","10:25","11:10","303"],
        ["Lunch","11:10","11:25"," "],
        ["P.E.","11:25","12:10","-"],
        ["Break","12:10","12:20"," "],
        ["English","12:20","13:05","121/317"],
        ["Dinner","13:05","13:15"," "],
        ['"Free" time',"13:15","00:00"," "]
    ]
]
