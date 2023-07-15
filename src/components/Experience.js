import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import SectionDataOrganizer from "./SectionDataOrganizer";

//eslint-disable-next-line
class Experience extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      // insert state here
      experienceModalIsShowing: true,

      experienceInfo: {
        startDate: "",
        endDate: "",
        positionTitle: "",
        companyName: "",
        town: "",
        state: "",
        key: crypto.randomUUID(),
      },

      experienceList: [],
    };
    // bind fxns here
    this.toggleExperienceModal = this.toggleExperienceModal.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.positionTitleChange = this.positionTitleChange.bind(this);
    this.companyNameChange = this.companyNameChange.bind(this);
    this.townChange = this.townChange.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.submitExperienceForm = this.submitExperienceForm.bind(this);
  }
  //fxns
  toggleExperienceModal() {
    this.setState({
      experienceModalIsShowing: !this.state.experienceModalIsShowing,
    });
  }

  startDateChange(event) {
    this.setState({
      experienceInfo: {
        startDate: event.target.value,
        endDate: this.state.experienceInfo.endDate,
        positionTitle: this.state.experienceInfo.positionTitle,
        companyName: this.state.experienceInfo.companyName,
        town: this.state.experienceInfo.town,
        state: this.state.experienceInfo.state,
        key: this.state.experienceInfo.key,
      },
    });
  }

  endDateChange(event) {
    this.setState({
      experienceInfo: {
        startDate: this.state.experienceInfo.startDate,
        endDate: event.target.value,
        positionTitle: this.state.experienceInfo.positionTitle,
        companyName: this.state.experienceInfo.companyName,
        town: this.state.experienceInfo.town,
        state: this.state.experienceInfo.state,
        key: this.state.experienceInfo.key,
      },
    });
  }

  positionTitleChange(event) {
    this.setState({
      experienceInfo: {
        startDate: this.state.experienceInfo.startDate,
        endDate: this.state.experienceInfo.endDate,
        positionTitle: event.target.value,
        companyName: this.state.experienceInfo.companyName,
        town: this.state.experienceInfo.town,
        state: this.state.experienceInfo.state,
        key: this.state.experienceInfo.key,
      },
    });
  }

  companyNameChange(event) {
    this.setState({
      experienceInfo: {
        startDate: this.state.experienceInfo.startDate,
        endDate: this.state.experienceInfo.endDate,
        positionTitle: this.state.experienceInfo.positionTitle,
        companyName: event.target.value,
        town: this.state.experienceInfo.town,
        state: this.state.experienceInfo.state,
        key: this.state.experienceInfo.key,
      },
    });
  }

  townChange(event) {
    this.setState({
      experienceInfo: {
        startDate: this.state.experienceInfo.startDate,
        endDate: this.state.experienceInfo.endDate,
        positionTitle: this.state.experienceInfo.positionTitle,
        companyName: this.state.experienceInfo.companyName,
        town: event.target.value,
        state: this.state.experienceInfo.state,
        key: this.state.experienceInfo.key,
      },
    });
  }

  stateChange(event) {
    this.setState({
      experienceInfo: {
        startDate: this.state.experienceInfo.startDate,
        endDate: this.state.experienceInfo.endDate,
        positionTitle: this.state.experienceInfo.positionTitle,
        companyName: this.state.experienceInfo.companyName,
        town: this.state.experienceInfo.town,
        state: event.target.value,
        key: this.state.experienceInfo.key,
      },
    });
  }

  submitExperienceForm(event) {
    event.preventDefault();
    this.setState({
      experienceList: [this.state.experienceInfo, ...this.state.experienceList],

      experienceInfo: {
        startDate: "",
        endDate: "",
        positionTitle: "",
        companyName: "",
        town: "",
        state: "",
        key: crypto.randomUUID(),
      },
    });

    // console.log(this.state.experienceList);
  }

  render() {
    //destruc.
    return (
      <>
        <div>
          <SectionTitle sectionName="Experience" />
          <button onClick={this.toggleExperienceModal}>
            {this.state.experienceModalIsShowing
              ? "Close Experience Form"
              : "Add Experience"}
          </button>
          {this.state.experienceModalIsShowing && (
            <form
              className="experience-form"
              onSubmit={this.submitExperienceForm}
            >
              <label htmlFor="startDate">Start Date:</label>
              <input
                id="startDate"
                placeholder="Required"
                type="text"
                required
                onChange={this.startDateChange}
                value={this.state.experienceInfo.startDate}
              />

              <label htmlFor="endDate">End Date:</label>
              <input
                id="endDate"
                placeholder="Leave Blank if Still Working"
                type="text"
                // required
                onChange={this.endDateChange}
                value={this.state.experienceInfo.endDate}
              />

              <label htmlFor="positionTitle">Position Title:</label>
              <input
                id="positionTitle"
                placeholder="Required"
                type="text"
                required
                onChange={this.positionTitleChange}
                value={this.state.experienceInfo.positionTitle}
              />

              <label htmlFor="companyName">Company Name:</label>
              <input
                id="companyName"
                placeholder="Required"
                type="text"
                required
                onChange={this.companyNameChange}
                value={this.state.experienceInfo.companyName}
              />

              <label htmlFor="town">Town:</label>
              <input
                id="town"
                placeholder="Required"
                type="text"
                required
                onChange={this.townChange}
                value={this.state.experienceInfo.town}
              />

              <label htmlFor="state">State (abbv):</label>
              <input
                id="state"
                placeholder="Required"
                type="text"
                required
                onChange={this.stateChange}
                value={this.state.experienceInfo.state}
              />

              <div className="multiple-btns">
                <button type="submit">Add Experience</button>
                <button type="reset">Cancel</button>
              </div>
            </form>
          )}

          <SectionDataOrganizer
            list={this.state.experienceList}
          />
        </div>
      </>
    );
  }
}
export default Experience;
