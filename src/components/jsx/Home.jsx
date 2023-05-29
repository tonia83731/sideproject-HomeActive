import {Header} from './Home/Header';
import Todo from './Home/Todo';

function HomeTop(){
  return(
    <section className="home-top">
      <div className="home-top-container">
        <div className="home-top-title main-title" id="current-date">Wed, May 16</div>
        <div className="home-top-body">
          <div className="home-top-duration">Activity remaining durations: <span className="duration">25</span> mins</div>
          <button className="red-btn btn">Start now</button>
        </div>
      </div>
    </section>
  )
}

function HomeActivityRecord(){
  return(
    <section className="activity-record">
      <div className="activity-record-container">
        <div className="sub-title title">Today's Activity Record</div>
        <div className="activity-record-img"></div>
        <ul className="activity-record-list">
          <li className="activity-record-item">
            <div className="activity-record-title">Activity completed time</div>
            <div className="activity-record-data"><span className="activity-record-num">5</span> mins</div>
          </li>
          <li className="activity-record-item">
            <div className="activity-record-title">Activity calorie consume</div>
            <div className="activity-record-data"><span className="activity-record-num">120</span> cals</div>
          </li>
          <li className="activity-record-item">
            <div className="activity-record-title">Done activity number</div>
            <div className="activity-record-data"><span className="activity-record-num">1</span> activities</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default function Home(){
  return(
    <section className="home">
      <div className="home-container">
        <Header/>
          <div className="home-body-container">
            <HomeTop/>
            <Todo/>
            <HomeActivityRecord/>
          </div>
      </div>
    </section>
  )
}