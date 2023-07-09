import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import PersonalInfo from "./PersonalInfo"
import {ReactComponent as MySvg} from "../images/HeadShotImg.svg"

//eslint-disable-next-line
class SidePanel extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    return (
      <div className="side-panel-inner-positioning">
        {/* <div>SidePanel</div> */}
        {/* eslint-disable-next-line */}
        <img />
        <MySvg className="svg-pic" />
        <SectionTitle sectionName="Personal Information" />
        <PersonalInfo
          address="123 Test Rd."
          phoneNumber="(123) 000-0000"
          email="test@mail.org"
        />
      </div>
    );
  }
}
export default SidePanel;
