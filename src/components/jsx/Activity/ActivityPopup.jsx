import { ReactComponent as Pause } from "../../assets/workPause.svg"
import { ReactComponent as Quit } from "../../assets/workQuit.svg"

const pauseData = [
  {
    id: 1,
    class: "restart",
    title: "Restart"
  },
  {
    id: 2,
    class: "quit",
    title: "Quit"
  },
]
const quitData = [
  {
    id: 1,
    class: "back",
    title: "Back to Activity"
  },
  {
    id: 2,
    class: "yes",
    title: "Yes"
  },
]


export function Activityitems({className, title, data}){
  return(
    <section className={className}>
      <div className={`${className}-container`}>
        <div className={`${className}-body`}>
          <div className={`${className}-img`}>
            {className === "activity-pause" ? <Pause/> : <Quit/>}
          </div>
          <div className={`${className}-option`}>
            <h5 className={`${className}-title main-title`}>{title}</h5>
            <div className={`${className}-btn-group`}>
              {data.map((btn) => {
                return <button className={`${className}-btn ${btn.class}-btn btn ${btn.id === 1 ? "red-btn" : "grey-btn"}`} key={btn.id}>{btn.title}</button>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ActivityPopup(){
  return(
    <>
      {/* <Activityitems className="activity-pause" title="Workout Pausing" data={pauseData}/> */}
      <Activityitems className="activity-quit" title="Are you sure you want to end the activity?" data={quitData}/>
    </>
  )
}

