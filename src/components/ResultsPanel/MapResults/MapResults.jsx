import React from "react";
import { MapContent, TestNum } from "./MapStyle";

const MapResults = ({ testsAmount }) => {
   return (
      <MapContent>
         {testsAmount.map(item => <TestNum>{item.num}</TestNum>)}
      </MapContent>
   );
};

export default MapResults;
