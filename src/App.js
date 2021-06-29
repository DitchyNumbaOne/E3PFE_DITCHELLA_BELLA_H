
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import logo from './bg.png';

/*THE EMAIL AND PASSWORD THAT VALID/ACCEPTED --THE REGISTERED ADMIN BELOW*/
function App() {
  const adminUser = {
    email:"bella.ditchella@gmail.com",
    password:"sandomeng123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else {
      console.log("Oops something wrong!");   /*WHEN THE EMAIL AND PASS ARE NOT VALID */
      setError("Oops something wrong! ");  /*notice */
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  /*THE INFORMATION THAT WILL APPEAR */
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="logged-in">
          <img src={logo} className="logo" alt="Logo" />;
           
          <h2>Name: <span>Bella H. Ditchella</span></h2>
          <h2>Section & Course: <span>E2-BSIT</span></h2>
          <h2>Hobbies: <span>biking, watching movies</span><br></br>
          <span>cooking, exercise</span>
          <span>, play with nephews.</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
