import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCreatedTests } from "../../../store/questions/admin-slice";

const CreatedTests = () => {
   const { createdTests } = useSelector(getCreatedTests);
   return (
      <div>
         <div>
            <Link to="/">
               <button>Back</button>
            </Link>
         </div>
         <h1>Created Tests</h1>
         <div>
            {
               createdTests.map((test) => (
                  <h1>{test.question}</h1>
               ))
            }
         </div>
      </div>
   );
};

export default CreatedTests;
