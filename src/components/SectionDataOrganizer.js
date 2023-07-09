import React, { Component } from "react";

//eslint-disable-next-line
class SectionDataOrganizer extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    //eslint-disable-next-line
    const { startDate, endDate, positionTitle, facilityName, city, state } =
      this.props;
    return (
      <>
        {/* <div>SectionDataOrganizer</div> */}
        <div className="data-organizer-container">
            <div className="start-end-dates">{`${startDate} - ${endDate==="" ? "Present" : endDate}`}</div>
            <div className="position-title">{positionTitle}</div>
            <div className="facility-name-location">{`${facilityName}, ${city}, ${state}`}</div>
        </div>
      </>
    );
  }
}
export default SectionDataOrganizer;
