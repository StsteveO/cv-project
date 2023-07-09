import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import SectionDataOrganizer from "./SectionDataOrganizer";

//eslint-disable-next-line
class Education extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    return (
      <>
        <div>
          <SectionTitle sectionName="Education" />
          <SectionDataOrganizer
            startDate="8/2014"
            endDate="5/2017"
            positionTitle="Doctorate of Physical Therapy"
            facilityName="Rutgers University"
            city="Newark"
            state="NJ"
          />
          <SectionDataOrganizer
            startDate="8/2012"
            endDate="5/2015"
            positionTitle="Bachelor of Science"
            facilityName="Felician University"
            city="Rutherford"
            state="NJ"
          />
        </div>
      </>
    );
  }
}
export default Education;
