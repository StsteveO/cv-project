import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import PersonalInfo from "./PersonalInfo";
import { ReactComponent as MySvg } from "../images/HeadShotImg.svg";

//eslint-disable-next-line
class SidePanel extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      personalInfoModalIsShowing: true,
      address: "",
      phoneNumber: "",
      email: "",
    };
    this.togglepersonalInfoModal = this.togglepersonalInfoModal.bind(this);
    this.addressChange= this.addressChange.bind(this);
    this.phoneNumberChange = this.phoneNumberChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }
  //fxns
  togglepersonalInfoModal() {
    this.setState({
      personalInfoModalIsShowing: !this.state.personalInfoModalIsShowing,
    });
  }

  addressChange(event) {
    this.setState({
      address: event.target.value,
    });
  }

  phoneNumberChange(event) {
    this.setState({
      phoneNumber: event.target.value,
    });
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    //destruc.
    return (
      <div className="side-panel-inner-positioning">
        {/* <div>SidePanel</div> */}
        {/* eslint-disable-next-line */}
        <img />
        <MySvg className="svg-pic" />
        <SectionTitle sectionName="Personal Information" />
        <button onClick={this.togglepersonalInfoModal}>
          {this.state.personalInfoModalIsShowing
            ? "Close Personal Information Form"
            : "Edit Personal Information"}
        </button>
        {this.state.personalInfoModalIsShowing && (
          <form className="personalInfoForm">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              required
              placeholder="Required"
              type="text"
              onChange={this.addressChange}
              value={this.state.address}
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              required
              placeholder="Required"
              type="tel"
              onChange={this.phoneNumberChange}
              value={this.state.phoneNumber}
            />

            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              required
              placeholder="Required"
              type="email"
              onChange={this.emailChange}
              value={this.state.email}
            />
          </form>
        )}
        <PersonalInfo
          address={this.state.address === "" ? "[Address]" : this.state.address}
          phoneNumber={
            this.state.phoneNumber === ""
              ? "[Phone Number]"
              : this.state.phoneNumber
          }
          email={this.state.email === "" ? "[E-mail]" : this.state.email}
        />
      </div>
    );
  }
}
export default SidePanel;
