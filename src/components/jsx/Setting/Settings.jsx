


export function OtherHeader({className, title}){
  return(
    <section className={`${className}-header`}>
      <div className={`${className}-header-container`}>
        <a href="" className="back-link">&#8249; Back</a>
        <h3 className={`${className}-header-title main-title`}>{title}</h3>
        {title === "Settings" ? <button className="btn red-btn save-btn">Save</button> : ""}
      </div>
    </section>
  )
}

function SettingBody(){
  return(
    <section className="settings-body">
      <div className="settings-body-container">
        <section className="settings-one">
          <div className="standby">
            <h5 className="standby-title other-title">Resetting standby reminder time</h5>
            <div className="standby-option">
              <input type="radio" id="15mins" name="standby" className="standby-input" checked/>
              <label htmlFor="15mins" className="15mins standby-label cursor-pointer">15mins</label>
              <input type="radio" id="30mins" name="standby" className="standby-input"/>
              <label htmlFor="30mins" className="30mins standby-label cursor-pointer">30mins</label>
            </div>
          </div>
          <div className="no-disturb">
            <div className="no-disturb-title-group">
              <h5 className="no-disturb-title other-title">Resetting "Do Not Disturbe" mode</h5>
              <p className="caption-title">(The App will stay silence from 10pm - 7pm)</p>
            </div>
            <label htmlFor="no-disturb" className="no-disturb-label">
              <input type="checkbox" className="no-disturb-input" id="no-disturb" checked/>
              <span className="slider rounded"></span>
            </label>
          </div>
        </section>
        <section className="settings-two">
          <div className="active-time">
            <div className="active-time-title-group">
              <h5 className="active-time-title other-title">Resetting "Be Active" time per day</h5>
              <p className="caption-title">(Minimum 30 mins)</p>
            </div>
            <label htmlFor="active-time" className="active-time-label">
              <input type="number" className="active-time-input" id="active-time" min="30" placeholder="30"/>
              mins
            </label>
          </div>
        </section>
        <section className="settings-three">
          <a href="" className="account-title">Switch to another account</a>
          <a href="" className="account-title">Sign out</a>
        </section>
      </div>
    </section>
  )
}



export default function Settings(){
  return(
    <section className="settings">
      <div className="settings-container">
        <OtherHeader className="settings" title="Settings"/>
        <SettingBody/>
      </div>
    </section>
  )
}