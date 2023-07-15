import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
//eslint-disable-next-line
import SectionDataOrganizer from "./SectionDataOrganizer";

//eslint-disable-next-line
class Education extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      // insert state here
      educationModalIsShowing: true,

      educationInfo: {
        startDate: "",
        endDate: "",
        positionTitle: "",
        companyName: "",
        town: "",
        state: "",
        key: crypto.randomUUID(),
      },

      educationList: [],
    };
    //bind fxns here
    this.toggleEducationModal = this.toggleEducationModal.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.positionTitleChange = this.positionTitleChange.bind(this);
    this.companyNameChange = this.companyNameChange.bind(this);
    this.townChange = this.townChange.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.submitEducationForm = this.submitEducationForm.bind(this);
  }
  //fxns
  toggleEducationModal() {
    this.setState({
      educationModalIsShowing: !this.state.educationModalIsShowing,
    });
  }

  startDateChange(event) {
    this.setState({
      educationInfo: {
        startDate: event.target.value,
        endDate: this.state.educationInfo.endDate,
        positionTitle: this.state.educationInfo.positionTitle,
        companyName: this.state.educationInfo.companyName,
        town: this.state.educationInfo.town,
        state: this.state.educationInfo.state,
        key: this.state.educationInfo.key,
      },
    });
  }

  endDateChange(event) {
    this.setState({
      educationInfo: {
        startDate: this.state.educationInfo.startDate,
        endDate: event.target.value,
        positionTitle: this.state.educationInfo.positionTitle,
        companyName: this.state.educationInfo.companyName,
        town: this.state.educationInfo.town,
        state: this.state.educationInfo.state,
        key: this.state.educationInfo.key,
      },
    });
  }

  positionTitleChange(event) {
    this.setState({
      educationInfo: {
        startDate: this.state.educationInfo.startDate,
        endDate: this.state.educationInfo.endDate,
        positionTitle: event.target.value,
        companyName: this.state.educationInfo.companyName,
        town: this.state.educationInfo.town,
        state: this.state.educationInfo.state,
        key: this.state.educationInfo.key,
      },
    });
  }

  companyNameChange(event) {
    this.setState({
      educationInfo: {
        startDate: this.state.educationInfo.startDate,
        endDate: this.state.educationInfo.endDate,
        positionTitle: this.state.educationInfo.positionTitle,
        companyName: event.target.value,
        town: this.state.educationInfo.town,
        state: this.state.educationInfo.state,
        key: this.state.educationInfo.key,
      },
    });
  }

  townChange(event) {
    this.setState({
      educationInfo: {
        startDate: this.state.educationInfo.startDate,
        endDate: this.state.educationInfo.endDate,
        positionTitle: this.state.educationInfo.positionTitle,
        companyName: this.state.educationInfo.companyName,
        town: event.target.value,
        state: this.state.educationInfo.state,
        key: this.state.educationInfo.key,
      },
    });
  }

  stateChange(event) {
    this.setState({
      educationInfo: {
        startDate: this.state.educationInfo.startDate,
        endDate: this.state.educationInfo.endDate,
        positionTitle: this.state.educationInfo.positionTitle,
        companyName: this.state.educationInfo.companyName,
        town: this.state.educationInfo.town,
        state: event.target.value,
        key: this.state.educationInfo.key,
      },
    });
  }

  submitEducationForm(event) {
    event.preventDefault();
    this.setState({
      educationList: [this.state.educationInfo, ...this.state.educationList],

      educationInfo: {
        startDate: "",
        endDate: "",
        positionTitle: "",
        companyName: "",
        town: "",
        state: "",
        key: crypto.randomUUID(),
      },
    });

    // console.log(this.state.educationList);
  }

  render() {
    //destruc.
    return (
      <>
        <div>
          <SectionTitle sectionName="Education" />
          <button onClick={this.toggleEducationModal}>
            {this.state.educationModalIsShowing
              ? "Close Experience Form"
              : "Add Education"}
          </button>
          {this.state.educationModalIsShowing && (
            <form
              className="education-form"
              onSubmit={this.submitEducationForm}
            >
              <label htmlFor="startDate">Start Date:</label>
              <input
                id="startDate"
                placeholder="Required"
                type="text"
                required
                onChange={this.startDateChange}
                value={this.state.educationInfo.startDate}
              />

              <label htmlFor="endDate">End Date:</label>
              <input
                id="endDate"
                placeholder="Leave Blank if Still Working"
                type="text"
                // required
                onChange={this.endDateChange}
                value={this.state.educationInfo.endDate}
              />

              <label htmlFor="positionTitle">Title of Major:</label>
              <input
                id="positionTitle"
                placeholder="Required"
                type="text"
                required
                onChange={this.positionTitleChange}
                value={this.state.educationInfo.positionTitle}
              />

              <label htmlFor="companyName">College/University Name:</label>
              <input
                id="companyName"
                placeholder="Required"
                type="text"
                required
                onChange={this.companyNameChange}
                value={this.state.educationInfo.companyName}
              />

              <label htmlFor="town">Town:</label>
              <input
                id="town"
                placeholder="Required"
                type="text"
                required
                onChange={this.townChange}
                value={this.state.educationInfo.town}
              />

              <label htmlFor="state">State (abbv):</label>
              <input
                id="state"
                placeholder="Required"
                type="text"
                required
                onChange={this.stateChange}
                value={this.state.educationInfo.state}
              />

              <div className="multiple-btns">
                <button type="submit">Add Education</button>
                <button type="reset">Cancel</button>
              </div>
            </form>
          )}

          <SectionDataOrganizer list={this.state.educationList} />
        </div>
      </>
    );
  }
}
export default Education;
