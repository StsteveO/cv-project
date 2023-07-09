import React, {Component} from "react"
import './App.css';
//eslint-disable-next-line
import AppHeader from "./components/AppHeader";
//eslint-disable-next-line
import AppFooter from "./components/AppFooter";
import CvHeader from "./components/CvHeader";
import MainContent from "./components/MainContent";
import SidePanel from "./components/SidePanel";

class App extends Component {
  //eslint-disable-next-line
  constructor(){
    super()
  }
  //fxns
  render(){
    //variables
    return (
    <div className="main-app-page">
      {/* 
      This works, and everything connects.
      AppHeader= CV App
      cv-header
        name
        job-title
      AppFooter 
      */}
      {/* <AppHeader /> */}
      <div className="example-cv-render">
        <div className="cv-header-grid-position">
          <CvHeader
            title="Dr." 
            firstName="Stephen" 
            lastName="Omari" 
            credentials="PT, DPT" 
            jobTitle="Physical Therapist"
          />
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
