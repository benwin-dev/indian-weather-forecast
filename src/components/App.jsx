import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Axios from "./Axios";
import Tile from "./Tile";
import states from "../states";
import { Row, Col } from "react-bootstrap";
function App() {
  const [stateName, setState] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Row className="justify-content-center ">
        <Col xs={4}>
          <strong>INDIAN WEATHER FORECAST</strong>
        </Col>

        <br />
        <input
          onChange={(props) => setSearch(props.target.value)}
          type="text"
          name="name"
          style={{ width: "90vw" }}
        />

      </Row>

      <Row xs={12}>
        {states
          .filter((item) =>
            ["stateName"].some(
              (newItem) =>
                item[newItem]
                  ?.toString()
                  .toLowerCase()
                  .indexOf(search.toLowerCase()) > -1
            )
          )
          .map((randomVar) => {
            return (
              <Tile
                onSelect={(sName) => setState(sName)}
                key={randomVar.id}
                name={randomVar.stateName}
                src={randomVar.img}
              />
            );
          })}
      </Row>
      <Axios stateName1={stateName} />
    </div>
  );
}

export default App;

// https://api.weatherapi.com/v1/current.json?key=05ccd01d3f294845bc0193119221201&q=Tamil Nadu&aqi=no
