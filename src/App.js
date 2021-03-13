import "./styles.css";
import JSONDATA from "./data.json";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [filterTerm, setFilterTerm] = useState("");
  const [filterType, setFilterType] = useState("region");
  console.log(searchTerm);
  return (
    <div className="App">
      {"Search:\n"}

      <input
        type="text"
        placeholder="Enter here.."
        onChange={({ target: { value } }) => {
          setSearchTerm(value);
          console.log(searchTerm);
        }}
      />
      <select
        // onchange={(event) => {
        //   setSearchType(event.target.value);
        // }}
        onChange={({ target: { value } }) => {
          setSearchType(value);
          console.log(searchType);
        }}
      >
        <option selected value="name">
          Name
        </option>
        <option value="topLevelDomain">Top-level-domain</option>
        <option value="alpha3Code">Alpha3Code</option>
        <option value="capital">Capital</option>
      </select>
      {/* <input type="submit" value="Submit" /> */}
      <br />

      {"Filter:"}

      <input
        type="text"
        placeholder="Enter here.."
        onChange={({ target: { value } }) => {
          setFilterTerm(value);
          console.log(filterTerm);
        }}
      />
      <select
        // onchange={(event) => {
        //   setFilterType(event.target.value);
        // }}
        onChange={({ target: { value } }) => {
          setFilterType(value);
          console.log(filterType);
        }}
      >
        <option selected value="region">
          Region
        </option>
        <option value="subregion">Sub-region</option>
      </select>

      <table>
        <tr>
          <th>Name</th>
          <th>Top-level-domain</th>
          <th>Alpha3Code</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Sub-region</th>
          <th>Population</th>
        </tr>
        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            if (filterTerm === "") {
              return val;
            } else if (filterType === "region") {
              if (val.region.toLowerCase().includes(filterTerm.toLowerCase())) {
                return val;
              }
            } else if (filterType === "subregion") {
              if (
                val.subregion.toLowerCase().includes(filterTerm.toLowerCase())
              ) {
                return val;
              }
            }
          } else if (searchType === "name") {
            if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              if (filterTerm === "") {
                return val;
              } else if (filterType === "region") {
                if (
                  val.region.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              } else if (filterType === "subregion") {
                if (
                  val.subregion.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              }
            }
          } else if (searchType === "topLevelDomain") {
            if (val.topLevelDomain.includes(searchTerm)) {
              if (filterTerm === "") {
                return val;
              } else if (filterType === "region") {
                if (
                  val.region.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              } else if (filterType === "subregion") {
                if (
                  val.subregion.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              }
            }
          } else if (searchType === "alpha3Code") {
            if (
              val.alpha3Code.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              if (filterTerm === "") {
                return val;
              } else if (filterType === "region") {
                if (
                  val.region.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              } else if (filterType === "subregion") {
                if (
                  val.subregion.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              }
            }
          } else if (searchType === "capital") {
            if (val.capital.toLowerCase().includes(searchTerm.toLowerCase())) {
              if (filterTerm === "") {
                return val;
              } else if (filterType === "region") {
                if (
                  val.region.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              } else if (filterType === "subregion") {
                if (
                  val.subregion.toLowerCase().includes(filterTerm.toLowerCase())
                ) {
                  return val;
                }
              }
            }
          }
          // if (filterTerm === "") {
          //   return val;
          // } else if (filterType === "region") {
          //   if (val.region.toLowerCase().includes(filterTerm.toLowerCase())) {
          //     return val;
          //   }
          // } else if (filterType === "subregion") {
          //   if (
          //     val.subregion.toLowerCase().includes(filterTerm.toLowerCase())
          //   ) {
          //     return val;
          //   }
          // }

          // else if (
          //   val.name.toLowerCase().includes(searchTerm.toLowerCase())
          // ) {
          //   return val;
          // }
          return 0;
        })
          // .filter((val) => {
          //   if (searchTerm === "") {
          //     return val;
          //   } else if (
          //     val.name.toLowerCase().includes(searchTerm.toLowerCase())
          //   ) {
          //     return val;
          //   }
          // })
          .map((val, key) => {
            return (
              <tr>
                <td>{val.name}</td>
                <td>{val.topLevelDomain}</td>
                <td>{val.alpha3Code}</td>
                <td>{val.capital}</td>
                <td>{val.region}</td>
                <td>{val.subregion}</td>
                <td>{val.population}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
