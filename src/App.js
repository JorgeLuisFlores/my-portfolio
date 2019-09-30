import React from "react";
import Navigation from "./navbar.js";
import Cards from "./card.js";
import CardsIMG from "./cardsimg.js";
import Jumbo from "./jumbo.js";

const style = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  height: "25px"
};

function App() {
  return (
    <div>
      <Navigation />
      <Jumbo />
      <CardsIMG />
      <Cards />

      <footer style={style}> © 2019</footer>
    </div>
  );
}

export default App;
