import React,{useState} from 'react';
import './App.css';
import CfCalendar from './components/CfCalendar';

function App() {
  return (
    <div className="App">
       <section className="header">
        <h1 className="header-title">Career Foundry Calendar</h1>
      </section>
      <h3 className="instructions">Please select the date you would like to book your appointment</h3>
      <header className="App-Content">
      <CfCalendar/>
      </header>
      
    </div>
  );
}

export default App;
