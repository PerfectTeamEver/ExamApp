import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div>
         <div>
            <Link to="/admin">
               <button>ADMIN</button>
            </Link>
         </div>
         <div>
            <Link to="/exam">
               <button>EXAM</button>
            </Link>
         </div>
      </div>
   );
};

export default Home;
