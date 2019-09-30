import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Cards = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            <b>Projects</b>
          </CardTitle>
          <CardText>
            <a href="https://refugee-stories-marketing.netlify.com/index.html">
              Refugee Stories
            </a>{" "}
            <br></br>A platform to allow communities of refugees to tell/share
            their stories. <br></br>
            Built using HTML,CSS(LESS), Vanillas Javascript, and React
            Javascript. <br></br>• Responsible for building landing page.
            <br></br>• Built out a carousel utilizing Bootstrap and optimized it
            for project needs.<br></br>• Set the guidelines for how our
            Mobile/Tablet views would appear.<br></br>
            <a href="https://github.com/refugee-stories-bw/Marketing">
              https://github.com/refugee-stories-bw/Marketing
            </a>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
