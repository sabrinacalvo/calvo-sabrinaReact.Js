import React, { useContext } from 'react';
import { Theme } from "../../contexts/Theme";
import { ClimbingBoxLoader } from "react-spinners";

function Loader() {

  const { themeColor } = useContext(Theme);


  return (
    <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "calc(100vh - 50px)",
            }}
        >
            <ClimbingBoxLoader color={themeColor === "dark" ? "white" : "black"} size= {30}/>
        </div>
  );
};

export default Loader;