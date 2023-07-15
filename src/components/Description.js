import React, { Component } from "react";
import SectionTitle from "./SectionTitle";

//eslint-disable-next-line
class Description extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);

    this.state = {
      descriptionModalIsShowing: true,
      descriptionText: "",
    };

    this.toggleDescriptionModal = this.toggleDescriptionModal.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
  }
  //fxns
  toggleDescriptionModal() {
    this.setState({
      descriptionModalIsShowing: !this.state.descriptionModalIsShowing,
    });
  }
  descriptionChange(event) {
    this.setState({
      descriptionText: event.target.value,
    });
  }

  render() {
    //destruc.
    return (
      <>
        <div>
          <SectionTitle sectionName="Description" />
          <button onClick={this.toggleDescriptionModal}>
            {this.state.descriptionModalIsShowing
              ? "Close Description Form"
              : "Edit Description"}
          </button>
          {this.state.descriptionModalIsShowing && (
            <form className="description-form">
              <label htmlFor="descriptionBox">
                Describe yourself professionally:
              </label>
              <textarea
                id="descriptionBox"
                name="descriptionBox"
                placeholder="Required"
                rows={10}
                onChange={this.descriptionChange}
                value={this.state.descriptionText}
              ></textarea>
            </form>
          )}
        </div>
        <div className="description-content">
          {this.state.descriptionText === ""
            ? "[Description]"
            : this.state.descriptionText}
        </div>
      </>
    );
  }
}
export default Description;
