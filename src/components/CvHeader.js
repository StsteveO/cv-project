import React, { Component } from "react";

//eslint-disable-next-line
class CvHeader extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
    //states
  }
  //fxns
  render() {
    //destruc.
    const { firstName, lastName, jobTitle, credentials, title } = this.props;
    return (
      <>
        <div>
          {/* CvHeader */}
          <h1 className="name-style">{`${title} ${firstName} ${lastName} ${credentials}`}</h1>
          <h3 className="job-title-style">{jobTitle}</h3>
        </div>
      </>
    );
  }
}
export default CvHeader;
