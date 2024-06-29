import React, { useEffect , useState } from "react";
import "./../styles/App.css";
import WheatherDisplay from "./WheatherDisplay";


const App = () => {
  const [data, setdata] = useState("");

  const changeinput = (event) =>{
      setdata(event.target.value)
  }

  useEffect(() => {});

  return (
    <div>
      {
        <>
          <input value={data} placeholder="hello" onChange={changeinput} />
          <WheatherDisplay data={data}></WheatherDisplay>
        </>
      }
    </div>
  );
};

export default App;
