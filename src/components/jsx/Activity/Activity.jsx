import { ReactComponent as Check } from "../../assets/check.svg"
import { ReactComponent as Alarm } from "../../assets/alarm.svg"

export default function Activity(){
  return(
    <section className="activity">
      <div className="activity-container">
        <div className="activity-img">
          <div className="activity-timer">10:00</div>
        </div>
        <div className="activity-body">
          <div className="activity-body-container">
            <div className="activity-body-title sub-title"><Check/> Washing the Dishes with Calf Raises</div>
            <ul className="activity-body-list">
              <li className="activity-body-item">
                1 of 3 activity matching with current Todo item
              </li>
              <li className="activity-body-item">
                20 times per set, total 3 sets
              </li>
              <li className="activity-body-item">
               Estimate calorie consume 100 cal
              </li>
            </ul>
            <div className="activity-body-btn-group">
              <button className="activity-body-btn btn blue-btn">Pause</button>
              <button className="activity-body-btn btn grey-btn quit-btn">Quit</button>
            </div>
            <div className="alarm"><Alarm/> If at any stage you feel unwell, stop exercising</div>
          </div>
        </div>
      </div>
    </section>
  )
}