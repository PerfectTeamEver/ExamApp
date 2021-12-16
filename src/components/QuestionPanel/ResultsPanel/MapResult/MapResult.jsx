import React from "react";
import { MapContainer, MapContent, Select, TestNum } from "./MapResultStyle";
import { useDispatch, useSelector } from "react-redux";
import { getTests, changeTestNumber } from './../../../../store/questions/questions-slice';

const MapResult = () => {
   const { tests, toggleTest } = useSelector(getTests);
   const dispatch = useDispatch();
   return (
      <MapContainer>
         <MapContent>
            {tests.map((test, index) => (
               <Select currentTest={toggleTest === index}>
                  <TestNum
                     isCorrect={test.isTrueAnswered === true}
                     onClick={() => dispatch(changeTestNumber(index))}
                  >
                     {index + 1}
                  </TestNum>
               </Select>
            ))}
         </MapContent>
      </MapContainer>
   );
};

export default MapResult;
