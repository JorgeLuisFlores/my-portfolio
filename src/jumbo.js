import React from "react";
import { Jumbotron } from "reactstrap";

const style = {
  marginLeft: "1%"
};

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3"> Welcome, my name is Jorge Flores. </h1>{" "}
        <p style={style} className="lead">
          Full Stack Web Developer
        </p>
        <p style={style}>
          Junior Front End/UI Developer with >1 year experience in designing
          user experiences/ web applications using HTML, CSS(LESS), JavaScript
          (React). Excellent analytical and logical programming skills with a
          good understanding at the conceptual level.
        </p>
        <hr className="my-2" />
        <p style={style}>
          <b> Tech Stack </b> <br />
          • React <br />
          • Git <br />
          • Javascript <br />
          • LESS CSS <br />• HTML
        </p>
        <p className="lead"></p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
