import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Banner from './banner/Banner';

function resizer() {
    try {
        if (window.innerWidth <= 700) {
            for (var i = 0; i < 6; i += 1) {
                document.getElementById("dayPanel").children[i].style.height = document.getElementById("contentPanel").children[i].clientHeight - 0 + 'px';
            }
            console.log(document.getElementById("dayPanel").children[0].clientHeight);
        }
    } catch (error) {

    }
}

function parseData(link) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
        if (xhr.status === 200) {
            var data = [];
            try {
                data = JSON.parse(xhr.responseText);
                if (data["code"] == "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
                    ReactDOM.render(
                        <React.StrictMode>
                            <App descArray={[]} />
                            <Banner text="Error raised: failed to get data from API (Some fatal hosting error)" />
                        </React.StrictMode>,
                        document.getElementById('root')
                    );
                }
            } catch (e) {
                console.error("JSON parse error");
            }
            console.dir(xhr.responseText);
            console.dir(data);
            var now = new Date().getDate();
            var descArr = ["", "", "", "", "", ""];
            for (var i = 0; i < data.length; i++) {
                descArr[1 + ((new Date(data[i].date).getDate()) - now)] += data[i].subject + ": " + data[i].description + "\n\n";
                console.dir(descArr);
                ReactDOM.render(
                    <React.StrictMode>
                        <App descArray={descArr} />
                    </React.StrictMode>,
                    document.getElementById('root')
                );
                resizer();
            }
        }
        else {
            console.warn("XHR Code not 200", xhr.status);
        }
    }

    xhr.ontimeout = function (e) {
        console.error("XHR Timeout");
        ReactDOM.render(
            <React.StrictMode>
                <App descArray={[]} />
                <Banner text="Error raised: failed to get data from API (timeout)" />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    xhr.onerror = function (e) {
        console.error("XHR Error");
        ReactDOM.render(
            <React.StrictMode>
                <App descArray={[]} />
                <Banner text={"Error raised: failed to get data from API (" + xhr.status + ")"} />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
    xhr.open("GET", link);
    xhr.send();
}

export { parseData };