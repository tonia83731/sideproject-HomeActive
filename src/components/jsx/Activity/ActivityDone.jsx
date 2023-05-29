import { ReactComponent as Congradulations } from "../../assets/Congrates.svg"
import { ReactComponent as Drink } from "../../assets/Water.svg"



export function ActivityDoneitems({step, className, title, btnName}){
  return(
    <section className={className} data-doneStep={step}>
      <div className={`${className}-container`}>
        <div className={`${className}-body`}>
          <div className={`${className}-img`}>
            {className === "drink" ? <Drink/> : <Congradulations/>}
          </div>
          <div className={`${className}-option`}>
            <h5 className={`${className}-title main-title`}>{title}</h5>
            <div className={`${className}-btn-group`}>
              <button className={`${className}-btn yellow-btn btn`}>{btnName}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ActivityDone(){
  return(
    <>
      {/* <ActivityDoneitems step="first" className="congrates" title="Congradulations! 
You finished the task" btnName="Next"/> */}
      {/* <ActivityDoneitems step="second" className="drink" title="Remember to grab some water" btnName="Back to Home"/> */}
    </>
  )
}