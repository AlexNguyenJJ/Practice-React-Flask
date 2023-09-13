import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("http://132.249.242.169/flask/data/").then(res => {
              if (!res.ok) {
              throw new Error('Network response was not ok');
              }
              return res.json();
            })
            .then(data => {
                console.log(data)
                // Setting a data from api
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
            .catch(error => console.log(error.data));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>
            </header>
        </div>
    );
}

export default App;
