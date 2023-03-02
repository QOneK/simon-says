import React, { useState, useEffect } from "react";

function App() {
  const boardStyle = {
    backgroundColor: "#eee",
    width: "208px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    border: "3px #eee solid",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "#eee",
  };

  const instructionsStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const buttonStyle = {
    marginTop: "15px",
    marginBottom: "16px",
    width: "80px",
    height: "40px",
    backgroundColor: "#8acaca",
    color: "white",
    fontSize: "16px",
  };

  const redWedge = {
    width: "60px",
    height: "60px",
    border: "3px red solid",
    backgroundColor: "red",
    borderRadius: " 60px 0 0 0",
    margin: "4px",
    opacity: 0.8,
    cursor: "pointer",
  };

  const blueWedge = {
    width: "60px",
    height: "60px",
    border: "3px blue solid",
    backgroundColor: "blue",
    borderRadius: " 0 60px 0 0",
    margin: "4px",
    opacity: 0.8,
    cursor: "pointer",
  };

  const greenWedge = {
    width: "60px",
    height: "60px",
    border: "3px green solid",
    backgroundColor: "green",
    borderRadius: " 0 0 0 60px",
    margin: "4px",
    opacity: 0.8,
    cursor: "pointer",
  };

  const orangeWedge = {
    width: "60px",
    height: "60px",
    border: "3px orange solid",
    backgroundColor: "orange",
    borderRadius: " 0 0 60px 0",
    margin: "4px",
    opacity: 0.8,
    cursor: "pointer",
  };

  const redWedgeActive = {
    width: "60px",
    height: "60px",
    border: "3px red solid",
    backgroundColor: "red",
    borderRadius: " 60px 0 0 0",
    margin: "4px",
    boxShadow: "0 0 10px red",
  };

  const blueWedgeActive = {
    width: "60px",
    height: "60px",
    border: "3px blue solid",
    backgroundColor: "blue",
    borderRadius: " 0 60px 0 0",
    margin: "4px",
    boxShadow: "0 0 10px blue",
  };

  const greenWedgeActive = {
    width: "60px",
    height: "60px",
    border: "3px green solid",
    backgroundColor: "green",
    borderRadius: " 0 0 0 60px",
    margin: "4px",
    boxShadow: "0 0 10px green",
  };

  const orangeWedgeActive = {
    width: "60px",
    height: "60px",
    border: "3px orange solid",
    backgroundColor: "orange",
    borderRadius: " 0 0 60px 0",
    margin: "4px",
    boxShadow: "0 0 10px orange",
  };

  function SimonSaysBoard() {
    // pause for a given number of milliseconds (ms) before continuing execution, must be used in an async function and awaited. 1 second = 1000 ms
    function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    //States
    const [points, setPoints] = useState(0);
    const [tiles, setTiles] = useState([]);

    //States for tiles
    const [light, setLight] = useState([false, false, false, false]);
    const [disabled, setDisabled] = useState(true);
    const [clicks, setClicks] = useState([]);

    const [output, setOutput] = useState("");

    useEffect(() => {
      setClicks([]);
      setDisabled(true)
      LightUp();
    }, [tiles]);

    function AddTile() {
      //generates random number from 0 to 3 (representing the tile numbers)
      let random = Math.floor(Math.random() * 4);

      if (random === 0) {
        random = "red";
      } else if (random === 1) {
        random = "blue";
      } else if (random === 2) {
        random = "green";
      } else if (random === 3) {
        random = "orange";
      }
      const tileSequence = [...tiles, random];
      setTiles(tileSequence);
    }

    async function LightUp() {
      setDisabled(true);
      for (let i = 0; i < tiles.length; i++) {
        await timeout(500);
        let lights = [...light];
        if (tiles[i] === "red") {
          lights[0] = true;
        } else if (tiles[i] === "blue") {
          lights[1] = true;
        } else if (tiles[i] === "green") {
          lights[2] = true;
        } else if (tiles[i] === "orange") {
          lights[3] = true;
        }
        setLight(lights);
        await timeout(500);
        lights = [...light];
        lights = [false, false, false, false];
        setLight(lights);
      }
      setDisabled(false);
    }

    function Check(color) {
      let clicker = [...clicks, color];
      setClicks(clicker);
      console.log("clicker: ", clicker);
      console.log("tiles: ", tiles);

      if (clicker.length < tiles.length) {
        for (let i = 0; i < clicker.length; i++) {
          if (tiles[i] !== clicker[i]) {
            setClicks([]);
            setOutput("Game Over! You clicked the wrong wedge!");
            setDisabled(true);
          } 
        }
      } else if (clicker.length > tiles.length){
        setDisabled(true)
      } else if (clicker.length === tiles.length){
        for (let i = 0; i < clicker.length; i++) {
          if (tiles[i] !== clicker[i]) {
            setClicks([]);
            setOutput("Game Over! You clicked the wrong wedge!");
            setDisabled(true);
          } 
        }
        setPoints(points => points + 1)
        AddTile()
      }
    }

    //AddTile()
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>
          Points: <span>{points}</span>
        </div>
        <h1>{clicks.length > 0 ? "Sequence so far: " + clicks.map((x) => x) : ""}</h1>
        <h1>{output ? output : ""}</h1>
        <button disabled={disabled} style={buttonStyle} onClick={AddTile}>
          Start Game
        </button>
        <div style={boardStyle}>
          <div style={{ display: "flex" }}>
            <button
              onClick={() => Check("red")}
              disabled={disabled}
              style={light[0] ? redWedgeActive : redWedge}
            />
            <button
              onClick={() => Check("blue")}
              disabled={disabled}
              style={light[1] ? blueWedgeActive : blueWedge}
            />
          </div>
          <div style={{ display: "flex" }}>
            <button
              onClick={() => Check("green")}
              disabled={disabled}
              style={light[2] ? greenWedgeActive : greenWedge}
            />
            <button
              onClick={() => Check("orange")}
              disabled={disabled}
              style={light[3] ? orangeWedgeActive : orangeWedge}
            />
          </div>
        </div>
      </div>
    );
  }

  //return (don't touch)
  return <SimonSaysBoard />;
}

export default App;
