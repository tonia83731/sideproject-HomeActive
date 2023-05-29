import { TextInput } from "./Login";
import { ReactComponent as Apple } from "../../assets/Apple.svg"
import { ReactComponent as Google } from "../../assets/Google.svg"

export default function Signup(){
  return(
    <section className="signup">
      <div className="signup-container">
        <h5 className="main-title signup-title">Sign Up</h5>
        <div className="signup-body">
          <section className="signup-form">
            <TextInput name="full-name" title="Full Name" placeholder="Joyce Wilson" type="signup"/>
            <TextInput name="email" title="Email" placeholder="JoyceW@gmail.com" type="signup"/>
            <TextInput name="password" title="Password" placeholder="123456" type="signup"/>
            <div className="signup-submit">
              <button className="btn yellow-btn signup-btn">Sign up</button>
            </div>
          </section>
          <section className="breakline">
            <hr/>
            <p className="breakline-font">or</p>
            <hr/>
          </section>
          <section className="signup-btn-group">
            <button className="btn signup-btn apple-btn"><Apple/> Sign up with Apple</button>
            <button className="btn signup-btn google-btn"><Google/> Sign up with Google</button>
          </section>
        </div>
      </div>
    </section>
  )
}