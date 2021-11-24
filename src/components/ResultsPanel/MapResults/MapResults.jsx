import React from "react";
import { MapContent, TestNum } from "./MapStyle";

const MapResults = ({ handleMap, testsAmount }) => {
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

export default MapResults;
