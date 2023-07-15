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
    const { list } = this.props;
    return (
      <div>
        {list.map((listItem)=>{
          return (
            <div key={listItem.key} className="data-organizer-container">
              <div className="start-end-dates">
                {`${listItem.startDate} - ${
                  listItem.endDate === "" ? "Present" : listItem.endDate
                }`}
              </div>
              <div className="position-title">{listItem.positionTitle}</div>
              <div className="facility-name-location">{`${listItem.companyName}, ${listItem.town}, ${listItem.state}`}</div>
            </div>
          );
        })}
      </div>

      // <>
      //   {/* <div>SectionDataOrganizer</div> */}
      //   <div className="data-organizer-container">
      //       <div className="start-end-dates">{`${startDate} - ${endDate==="" ? "Present" : endDate}`}</div>
      //       <div className="position-title">{positionTitle}</div>
      //       <div className="facility-name-location">{`${facilityName}, ${city}, ${state}`}</div>
      //   </div>
      // </>
    );
  }
}
export default SectionDataOrganizer;
