
import './components/style/main.scss'
import Main from './components/jsx/Main'
import Activity from '../src/components/jsx/Activity/Activity'
import ActivityPopup  from './components/jsx/Activity/ActivityPopup';
import ActivityDone from './components/jsx/Activity/ActivityDone';


function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <Activity/> */}
      {/* <ActivityPopup/> */}
      <ActivityDone/>
    </div>
  );
}

export default App;
