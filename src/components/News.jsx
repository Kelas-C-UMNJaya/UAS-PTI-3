import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Offcanvas } from 'react-bootstrap';

const BG = {
    backgroundColor: 'wheat',
}
const JD = {
    backgroundColor: 'skyblue',
}

function News() {
    const [data, setData] = useState([]);
    const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=d6b0df65b98a4f6eb4afca3a36c99a39"; // Berita Indonesia

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
        <div>

            <Button variant="primary" onClick={handleShow} className="mx-3">
                News
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton style={JD}>
                    <Offcanvas.Title >Trending News</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={BG}>
                    {data.map((data, indeks) => (
                        <div key={indeks}>
                            <div>
                                {data.description}
                            </div>
                            <hr />
                        </div>
                    ))}


                </Offcanvas.Body>
            </Offcanvas>









            {/* {data.map((data, indeks) => (
                <div key={indeks}>
                    <div>
                        {data.description}
                    </div>
                    <hr />
                </div>
            ))}; */}
        </div>
    );
}


export default News;