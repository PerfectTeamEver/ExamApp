import React, { useState } from "react";
import { MapContent, TestNum } from "./MapStyle";

const Map = ({ handleMap, testsAmount }) => {
  // const [clicked, setClicked] = useState(false);
  debugger;

  return (
    <MapContent>
      {testsAmount.map((item) => {
        return (
          <TestNum
            onClick={() => handleMap(item.id, item.num)}
            selected={item.selectedNum === item.num}
          >
            {item.num}
          </TestNum>
        );
      })}
    </MapContent>
  );
};

export default Map;
