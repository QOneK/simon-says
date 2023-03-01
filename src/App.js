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
    const[points, setPoints] = useState(0)

    //onClick when "Start Game" button is pressed
    function StartGame(){
      console.log("works")
    }

    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>
          Points: <span>{points}</span>
        </div>
        <button style={buttonStyle} onClick={StartGame}>Start Game</button>
        <div style={boardStyle}>
          <div style={{ display: "flex" }}>
            <button style={redWedge} />
            <button style={blueWedge} />
          </div>
          <div style={{ display: "flex" }}>
            <button style={greenWedge} />
            <button style={orangeWedge} />
          </div>
        </div>
      </div>
    );
  }

  //return (don't touch)
  return <SimonSaysBoard/>
}

export default App;
