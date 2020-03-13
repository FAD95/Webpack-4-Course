import React, { useState } from "react";
import data from "../../data.json.js";
import Loaders from "./loaders";
import logo from "../../images/platzi.png";
import video1 from "../../videos/que-es-core.mp4";
import video2 from "../../videos/que-es-core.webm";

function App() {
  const [loaderList, setloaderList] = useState([]);
  const handleClick = () => {
    setloaderList(data.loaders);
  };
  return (
    <div>
      <header>
        <img src={logo} alt="Logo Platzi" width={60} poster={logo}/>
        <p>Que linda es mi app en react</p>
      </header>
      <main>
      <video src={video1} controls width={420}></video>
      <ul>
        {loaderList.map(item => (
          <Loaders {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>List</button>
      </main>
      
    </div>
  );
}

export default App;
