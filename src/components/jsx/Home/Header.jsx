import { ReactComponent as Calendar } from "../../assets/Calendar.svg"
import { ReactComponent as Settings } from "../../assets/Settings.svg"
import { ReactComponent as Logo } from "../../assets/logo-04.svg"



export function Header(){
  return(
    <section className="header">
      <div className="header-container">
        <img src="https://images.unsplash.com/photo-1605884636476-ec4bd6c8d958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" className="nav-user" />
        <a href="" className="nav-link calendar"><Calendar/></a>
        <a href="" className="nav-logo"><Logo/></a>
        <a href="" className="nav-link setting"><Settings/></a>
      </div>
    </section>
  )
}