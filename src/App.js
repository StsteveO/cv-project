import React, { Component } from "react";
import "./App.css";
//eslint-disable-next-line
import AppHeader from "./components/AppHeader";
//eslint-disable-next-line
import AppFooter from "./components/AppFooter";
import CvHeader from "./components/CvHeader";
import MainContent from "./components/MainContent";
import SidePanel from "./components/SidePanel";

class App extends Component {
  //eslint-disable-next-line
  constructor() {
    super();

    this.state = {
      nameModalIsShowing: true,
      title: "",
      firstName: "",
      lastName: "",
      credentials: "",
      jobTitle: "",
    };
    this.nameAndPositionModalPopup = this.nameAndPositionModalPopup.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.credentialsChange = this.credentialsChange.bind(this);
    this.jobTitleChange = this.jobTitleChange.bind(this);
  }
  //fxns
  nameAndPositionModalPopup() {
    this.setState({
      nameModalIsShowing: !this.state.nameModalIsShowing,
    });
  }

  firstNameChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  lastNameChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  titleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  credentialsChange(event) {
    this.setState({
      credentials: event.target.value,
    });
  }

  jobTitleChange(event) {
    this.setState({
      jobTitle: event.target.value,
    });
  }

  render() {
    //variables
    return (
      <div className="main-app-page">
        {/* <AppHeader /> */}
        <div className="cv-whole-grid">
          <div className="cv-header-grid-position">
            <CvHeader
              title={this.state.title}
              firstName={
                this.state.firstName === ""
                  ? "[First Name]"
                  : this.state.firstName
              }
              lastName={
                this.state.lastName === "" ? "[Last Name]" : this.state.lastName
              }
              credentials={this.state.credentials}
              jobTitle={
                this.state.jobTitle === "" ? "[Job Title]" : this.state.jobTitle
              }
            />
            {this.state.nameModalIsShowing && (
              <form className="cv-header-name-form">
                <label htmlFor="titleForm">Title:</label>
                <input
                  id="titleForm"
                  placeholder="Optional"
                  type="text"
                  onChange={this.titleChange}
                  value={this.state.title}
                />

                <label htmlFor="firstNameForm">First name:</label>
                <input
                  id="firstNameForm"
                  placeholder="Required"
                  type="text"
                  required
                  onChange={this.firstNameChange}
                  value={this.state.firstName}
                />

                <label htmlFor="lastNameForm">Last name:</label>
                <input
                  id="lastNameForm"
                  placeholder="Required"
                  type="text"
                  required
                  onChange={this.lastNameChange}
                  value={this.state.lastName}
                />

                <label htmlFor="credentialsForm">Credentials:</label>
                <input
                  id="credentialsForm"
                  placeholder="Optional"
                  type="text"
                  onChange={this.credentialsChange}
                  value={this.state.credentials}
                />

                <label htmlFor="jobTitleForm">Job Title:</label>
                <input
                  id="jobTitleForm"
                  placeholder="Required"
                  type="text"
                  required
                  onChange={this.jobTitleChange}
                  value={this.state.jobTitle}
                />
              </form>
            )}
            <button onClick={this.nameAndPositionModalPopup}>
              {this.state.nameModalIsShowing
                ? "Close Name and Job Title Form"
                : "Edit Name, and Job Title"}
            </button>
          </div>
          <div className="main-content-grid-position">
            <MainContent />
          </div>
          <div className="side-panel-grid-position">
            <SidePanel />
          </div>
        </div>
        {/* <AppFooter /> */}
      </div>
    );
  }
}

export default App;
