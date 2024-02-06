import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Navigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState("");
  const [oneCountry, setOneCountry] = useState(null);
  useEffect(() => {
    console.log(selection);
    const BASE_URL = `https://frontend-mentor-apis-6efy.onrender.com/countries?limit=50&search=${search}`;
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data.data))
      .catch((error) => console.error(error));
  }, [search]);

  useEffect(() => {
    const BASE_URL = `https://frontend-mentor-apis-6efy.onrender.com/countries?limit=50&region=${selection}`;
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data.data))
      .catch((error) => console.error(error));
  }, [selection]);

  const handleClick = (item) => {
    setOneCountry(item);
  };

  return (
    <div>
      {oneCountry ? (
        <div className="one-country2">
          <div className="one-country5" onClick={() => setOneCountry(null)}>
            <FaArrowLeftLong
              className="icons-left"
              
            />
            Back
          </div>
          <div className="one-country3">
            <img src={oneCountry.flags.png} alt="" />
            <div className="one-country4">
              <div>{oneCountry.name.common}</div>
              <div className="one-ichida">Native Name: <span>{oneCountry.name.nativeName}</span></div>
              <div className="one-ichida">Population: <span>{oneCountry.population}</span></div>
              <div className="one-ichida">Region: <span>{oneCountry.region}</span></div>
              <div className="one-ichida">Sub Region: <span>{oneCountry.subregion}</span></div>
              <div className="one-ichida">Caputal: <span>{oneCountry.capital}</span></div>
            </div>
            <div  style={{marginLeft: "80px"}}>
            <div className="one-ichida">Top Level Domain: <span>{oneCountry.name.nativeName}</span></div>
              <div className="one-ichida">Currencies: <span>{oneCountry.population}</span></div>
              <div className="one-ichida">Languages: <span>{oneCountry.languages.join(", ")}</span></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="filter">
              <div className="inp">
                <CiSearch />
                <input
                  type="text"
                  placeholder="Search for a country…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select
                name=""
                id=""
                className="tanla"
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
              >
                <option value="">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
          <div className="cards">
            {countries.map((item) => (
              <div
                key={item.name.slug}
                onClick={() => handleClick(item)}
                className="card"
              >
                <img src={item.flags.png} alt="" />
                <div className="card_item">
                  <div className="name">{item.name.common}</div>
                  <div className="population">
                    <span>Population: </span>
                    {item.population}
                  </div>
                  <div className="population">
                    <span>Region: </span>
                    {item.region}
                  </div>
                  <div className="population">
                    <span>Capital: </span>
                    {item.capital}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
