import React, { useState, useEffect } from 'react'
import axios from 'axios'

const style = {
    border: "2px solid black",
    background: "skyblue",
    padding: "2px",
};

function News() {
    const [data, setData] = useState([]);
    const url = "http://api.weatherapi.com/v1/current.json?key=5a543d13fcae409497e164629222905&q=Jakarta&aqi=no";


    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data.current.condition.icon);
                // console.log(res.data.current.condition.icon);
                // console.log(res.data.current);

            })
        //   .catch((err) => console.log(err));

        // console.log(data);
    }, []);



    return (
        <div className="container-fluid">
            <div>
                <img src={data} style={style} />
            </div>
        </div>
    )
}

export default News