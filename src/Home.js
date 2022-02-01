import "./styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [prizeYear, setPrizeYear] = useState("");
  const [prizeCategory, setPrizeCategory] = useState("");
  const years = data.map((prize) => prize.year);
  const uniqueYears = [...new Set(years)];
  const categories = data.map((prize) => prize.category);
  const uniqueCategories = [...new Set(categories)];

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.nobelprize.org/v1/prize.json");
      const json = await response.json();
      setData(json.prizes);
    })();
  }, []);

  function filterByPrizeYear(prize) {
    return prize.year === prizeYear;
  }
  function filterByPrizeCategory(prize) {
    return prize.category === prizeCategory;
  }

  return (
    <>
      <h1>&#127942; Nobel Prize Winners &#127942;</h1>

      <Link to="/Mvp">
        <button> &#9733;Mvp&#9733;</button>
      </Link>

      <div>
        <h2>Filter by year:</h2>
        <select id="yearSelect" onChange={(e) => setPrizeYear(e.target.value)}>
          <option value="" key="none">
            All Years
          </option>
          {uniqueYears.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <section>
        {(!prizeYear ? data : data.filter(filterByPrizeYear)).map(
          (prize, i) => {
            return (
              <div className="key" key={i}>
                <p>Category: {prize.category}</p>
                <p className="year">Year: {prize.year}</p>
                <h3>Laureates:</h3>
                <div className="flaure">
                  {prize.laureates?.map((laureate) => {
                    return (
                      <div key={laureate.id} className="id">
                        <p className="fn">
                          {laureate.firstname} {laureate.surname}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </section>
      <div>
        <h2>Filter by Category:</h2>
        <select
          id="yearSelect"
          onChange={(e) => setPrizeCategory(e.target.value)}
        >
          <option value="" key="none">
            All Categories
          </option>
          {uniqueCategories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <section>
        {(!prizeCategory ? data : data.filter(filterByPrizeCategory)).map(
          (prize, i) => {
            return (
              <div className="key" key={i}>
                <p>Category: {prize.category}</p>
                <p className="year">Year: {prize.year}</p>
                <h3>Laureates:</h3>
                <div className="flaure">
                  {prize.laureates?.map((laureate) => {
                    return (
                      <div key={laureate.id} className="id">
                        <p className="fn">
                          {laureate.firstname} {laureate.surname}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </section>
    </>
  );
}
export default Home;
