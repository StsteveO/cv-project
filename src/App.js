import React, {Component} from "react"
import './App.css';
import AppHeader from "./components/AppHeader";
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
    <div>
      {/* 
      This works, and everything connects.
      AppHeader= CV App
      cv-header
        name
        job-title
      AppFooter 
      */}
      <AppHeader />
      <CvHeader
        title="Dr." 
        firstName="Stephen" 
        lastName="Omari" 
        credentials="PT, DPT" 
        jobTitle="Physical Therapist"
      />
      <MainContent />
      <SidePanel />
      <AppFooter />
    </div>
  );
  }
}

export default App;
