import React from "react";
import getMessages from "../actions/getMessages";

const Home = () =>{
    console.log("data : ",getMessages(1,50));
    return <div className="home">
        <h1>home</h1>
        <ul id="data">
        </ul>
    </div>;
}

export default Home;