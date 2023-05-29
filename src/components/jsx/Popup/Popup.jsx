import { ReactComponent as PopUpImg } from "../../assets/popup_img.svg"
import { ReactComponent as Logo } from "../../assets/logo-04.svg"

const firstPopData = [
  {
    id: 1,
    class: "yes",
    title: "Yes"
  },
  {
    id: 2,
    class: "no",
    title: "No"
  },
]

const secondPopData = [
  {
    id: 1,
    class: "10mins",
    title: "10 mins (Recommend)"
  },
  {
    id: 2,
    class: "5mins",
    title: "5 mins"
  },
]


function FirstPopup(){
  return(
    <div className="popup-body" data-step="first">
      <div className="popup-img">
        <PopUpImg/>
      </div>
      <div className="popup-option">
        <h5 className="main-title popup-title">Would you like to GET ACTIVE now?</h5>
        <div className="popup-btn-group">
          {firstPopData.map((btn) => {
            return <button className={`popup-btn ${btn.class}-btn btn ${btn.id === 1 ? "red-btn" : "grey-btn"}`} key={btn.id}>{btn.title}</button>
          })}
        </div>
      </div>
    </div>
  )
}

function SecondPopup(){
  return(
    <div className="popup-body" data-step="second">
      <div className="popup-img">
        <PopUpImg/>
      </div>
      <div className="popup-option">
        <h5 className="main-title popup-title">Choose your Activity time...</h5>
        <div className="popup-btn-group">
          {secondPopData.map((btn) => {
          return <button className={`popup-btn ${btn.class}-btn btn ${btn.id === 1 ? "yellow-btn" : "blue-btn"}`} key={btn.id}>{btn.title}</button>
        })}
        </div>
      </div>
    </div>
  )
}


export default function Popup({step}){
  return(
    <section className="popup" data-step={step}>
      <div className="popup-container">
        {/* <FirstPopup/> */}
        <SecondPopup/>
      </div>
      <div className="homeactive-logo">
        <Logo/>
      </div>
    </section>
  )
}
