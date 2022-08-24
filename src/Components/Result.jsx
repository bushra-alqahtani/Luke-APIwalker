import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Result() {
  console.log("it works");

  const { catigory, catigoryId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/" + catigory + "/" + catigoryId)
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
        setData(resData);
      }).catch(error =>{
        console.log(error);
      });
  }, []);
  //console.log(catigory, catigoryId, data);

  return (
    <div >
      <div>
      
        {Object.keys(data).map((item) => {
          return (
            <p>
              {item}:{data[item]}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
