import React, { Component } from "react";

//eslint-disable-next-line
class CvHeader extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    const { firstName, lastName, jobTitle, credentials, title } = this.props;
    return (
      <>
        <div className="cv-header">
          CvHeader
          <h1>{`${title} ${firstName} ${lastName} ${credentials}`}</h1>
          <h3>{jobTitle}</h3>
        </div>
      </>
    );
  }
}
export default CvHeader;
