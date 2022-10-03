import React, { useState } from "react";
import data from "../components/data";
import SingleMovie from "./SingleMovie";

function Home() {
  const [movie, setMovie] = useState(data);



  return (
    <div className="container mt-5">
      <div className="row">
        {movie.map((item) => {
          return (
            <div className="col-md-4" >
              <SingleMovie item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
