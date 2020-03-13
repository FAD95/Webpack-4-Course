import React, { useState } from "react";
import data from "../../data.json.js";
import Loaders from "./loaders"

function App() {

  const [loaderList, setloaderList] = useState([]);
  const handleClick = ()=>{
      setloaderList(data.loaders)
  }
  return (
    <div>
      <ul>
        {loaderList.map(item => <Loaders {...item} key={item.id}/>)}
      </ul>
      <button onClick={handleClick}>List</button>
    </div>
  );
}

export default App;
