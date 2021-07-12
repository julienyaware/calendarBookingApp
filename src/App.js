import logo from './logo.svg';
import './App.css';
import CfCalendar from './components/CfCalendar';
import TimeSlots from './components/TimeSlots';
import ConfirmationDetails from './components/ConfirmationDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <CfCalendar/>
      <TimeSlots/> */}
      <ConfirmationDetails/>
      </header>
      
    </div>
  );
}

export default App;
