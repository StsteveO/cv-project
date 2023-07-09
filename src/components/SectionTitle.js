import React, { Component } from "react";

//eslint-disable-next-line
class SectionTitle extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  //fxns
  render() {
    //destruc.
    const{sectionName}=this.props;
    return (
      <>
        <div className="section-title">{sectionName}</div>
      </>
    );
  }
}
export default SectionTitle;
