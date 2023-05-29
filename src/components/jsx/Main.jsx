import Login from './Login/Login'
import Signup from './Login/Signup'
import Home from './Home'
import Settings from './Setting/Settings'
import Popup from './Popup/Popup'

export default function Main(){
  return(
    <section className="main">
      <div className="main-bg-container">
        <div className="main-container">
          <Signup/>
          {/* <Login/> */}
          {/* <Home/> */}
          {/* <Settings/> */}
          {/* <Popup/> */}
        </div>
      </div>
    </section>
  )
}