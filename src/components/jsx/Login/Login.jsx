import { ReactComponent as Apple } from "../../assets/Apple.svg"
import { ReactComponent as Google } from "../../assets/Google.svg"

export function TextInput({name, title, placeholder, type}){
  return(
    <div className={`${type}-form-item`}>
      <label htmlFor={`${name}-input`} className={`${name}-label`}>{title}</label>
      <input type="text" className={`${name}-input`} id={`${name}-input`} placeholder={placeholder}/>
    </div>
  )
}

export default function Login(){
  return(
    <section className="login">
      <div className="login-container">
        <h5 className="main-title login-title">Login</h5>
        <div className="login-body">
          <section className="login-form">
            <TextInput name="email" title="Email" placeholder="JoyceW@gmail.com" type="login"/>
            <TextInput name="password" title="Password" placeholder="123456" type="login"/>
            <div className="login-submit">
              <button className="btn yellow-btn login-btn">Login</button>
            </div>
          </section>
          <section className="breakline">
            <hr/>
            <p className="breakline-font">or</p>
            <hr/>
          </section>
          <section className="login-btn-group">
            <button className="btn login-btn apple-btn"><Apple/> Login with Apple</button>
            <button className="btn login-btn google-btn"><Google/> Login with Google</button>
          </section>
        </div>
      </div>
    </section>
  )
}