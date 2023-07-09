import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import SectionDataOrganizer from "./SectionDataOrganizer";

//eslint-disable-next-line
class Experience extends Component {
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
          <SectionTitle sectionName="Experience" />
          <SectionDataOrganizer
            startDate="7/2018"
            endDate=""
            positionTitle="Physical Therapist"
            facilityName="Virtua Home Health"
            city="Mount Laurel"
            state="NJ"
          />
          <SectionDataOrganizer
            startDate="4/2018"
            endDate="5/2020"
            positionTitle="Physical Therapist"
            facilityName="CareOne"
            city="Moorestown"
            state="NJ"
          />
          <SectionDataOrganizer
            startDate="9/2017"
            endDate="10/2018"
            positionTitle="Physical Therapist"
            facilityName="FitRehab"
            city="Voorhees Township"
            state="NJ"
          />
        </div>
      </>
    );
  }
}
export default Experience;
