import React from "react";

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="section1">
          <h2>Welcome to</h2>
          <h1>JaredsApp!</h1>
          <p className="mission">Find new Friends Faster!</p>
          <p className="mission_description">
            Want to leave your house and play tennis, rock Climb, or stroll? But
            you don’t want to do it alone? JaredsApp connects you with people
            around you who share the same interests you do!
          </p>
          <button>Get App</button>
        </div>
        <div className="section2">
          <img
            src={process.env.PUBLIC_URL + "/friends.jpg"}
            alt="friends laughing"
          />
        </div>
      </div>
      <div className="hidden">
          <img
            src={process.env.PUBLIC_URL + "/friends.jpg"}
            alt="friends laughing"
          />
        </div>
      <footer>
        <p>©️ Copyright Jared Lambert - 2020</p>
      </footer>
    </div>
  );
}

export default App;
