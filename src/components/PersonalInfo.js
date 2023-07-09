import React, { Component } from "react";

//eslint-disable-next-line
class PersonalInfo extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    const{ address, phoneNumber, email }= this.props;
    return (
      <>
        <div className="personal-info-vertical-spacing">
          <div><strong>Address</strong><br/>{address}</div>
          <div><strong>Phone Number</strong><br/>{phoneNumber}</div>
          <div><strong>E-Mail</strong><br/>{email}</div>
        </div>
      </>
    );
  }
}
export default PersonalInfo;
