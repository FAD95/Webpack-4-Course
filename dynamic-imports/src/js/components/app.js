import React, { useState } from "react";
import data from "../../data.json";
import Loaders from "./loaders";
import logo from "../../images/platzi.png";
import video1 from "../../videos/que-es-core.mp4";
import video2 from "../../videos/que-es-core.webm";

import "../../less/less.less"
import "../../sass/sass.scss"
import "../../stylus/stylus.styl"

function App() {
  const [loaderList, setloaderList] = useState([]);
  const handleClick = async () => {
    setloaderList(data.loaders);
    const {myAlert} = await import('./alert')
    myAlert('omg, este modulo se ha cargado dinamicamente!')
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
      <p className="less">Esto es Less</p>
      <p className="sass">Esto es Sass</p>
      <p className="stylus">Esto es Stylus</p>
    </div>
  );
}

export default App;
