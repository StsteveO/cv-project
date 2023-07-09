import React, { Component } from "react";
import Description from "./Description";
import Experience from "./Experience";
import Education from "./Education";

//eslint-disable-next-line
class MainContent extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    return (
      <>
        <div>MainContent
            <Description />
            <Experience />
            <Education />
        </div>
      </>
    );
  }
}
export default MainContent;
