import React, { useState } from "react";
import data from "../../data.json";
import Loaders from "./loaders"
console.log(data.loaders);

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
