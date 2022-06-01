import React, { useState, useEffect } from 'react'
import axios from 'axios'

function News() {
    const [data, setData] = useState([]);
    const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=32d4ac78c0a3402a8e580a387a5af5d8"; // Berita Indonesia
    // const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-04-28&sortBy=publishedAt&apiKey=32d4ac78c0a3402a8e580a387a5af5d8"; // Berita Tesla


    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data.articles);
                console.log(res.data.articles);
            })
        //   .catch((err) => console.log(err));

        console.log(data);
    }, [data]);



    return (
        <div className="container">
            {data.map((data, indeks) => (
                <div key={indeks}>
                    <div>
                        {data.description}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default News