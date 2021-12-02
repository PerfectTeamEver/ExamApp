import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCreatedTests } from "../../../store/questions/admin-slice";
import { Back } from "./MyTests.style";

const MyTests = () => {
   const { createdTests } = useSelector(getCreatedTests);
   return (
      <div>
         <div>
            <Link to="/admin">
               <Back>Back</Back>
            </Link>
         </div>
         <h1>Created Tests</h1>
         <div>
            <h1>Question:</h1>
            {createdTests.map((test) => (
               <h2>{test.question}</h2>
            ))}
         </div>
      </div>
   );
};

export default MyTests;
