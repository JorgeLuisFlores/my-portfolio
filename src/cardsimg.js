import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const style = {
  width: "25%",
  height: "25%",
  marginTop: "2%",
  marginLeft: "1%",
  borderRadius: "10%"
};

const CardsIMG = props => {
  return (
    <div>
      <Card>
        <div>
          <CardImg style={style} src={require("./img/pic.JPEG")} />{" "}
        </div>{" "}
        <CardBody>
          <CardTitle>
            <b> About Me </b>{" "}
          </CardTitle>{" "}
          <CardText>
            I 've worked in Operations Managment for over 10 years. <br></br>I'
            m switching careers into tech because it 's something I' ve always
            loved but never had the opportunity to chase until now. <br> </br> A
            few of my hobbies / likes include video games, MTG, food, football
            and music. <br> </br> <br></br> “Wisdom is not a product of
            schooling but of the lifelong attempt to acquire it.” <br> </br>―
            Albert Einstein{" "}
          </CardText>{" "}
        </CardBody>{" "}
      </Card>{" "}
    </div>
  );
};

export default CardsIMG;
