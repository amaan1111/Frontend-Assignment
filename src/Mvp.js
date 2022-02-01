import React from "react";
import { Link } from "react-router-dom";
function Mvp() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>
        <h1>&#9733; People that Have Won more than 1 time &#9733;</h1>
        <section>
          <div className="key">
            <p>Category: peace, chemistry </p>
            <p className="year">Year: 1954 , 1962 </p>
            <h3>Laureate:</h3>
            <div className="flaure">
              <div className="id">
                <p className="fn">Linus Pauling</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="key">
            <p>Category: physics </p>
            <p className="year">Year: 1972 , 1956 </p>
            <h3>Laureate:</h3>
            <div className="flaure">
              <div className="id">
                <p className="fn">John Bardeen</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="key">
            <p>Category: chemistry </p>
            <p className="year">Year: 1980 , 1962 </p>
            <h3>Laureate:</h3>
            <div className="flaure">
              <div className="id">
                <p className="fn">Frederick Sanger</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="key">
            <p>Category: peace </p>
            <p className="year">Year: 1917, 1944 ,1963 </p>
            <h3>Laureate:</h3>
            <div className="flaure">
              <div className="id">
                <p className="fn">International Committee of the Red Cross</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Mvp;
