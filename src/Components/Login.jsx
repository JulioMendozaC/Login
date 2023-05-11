import {useState} from "react";
import axios from 'axios';
import "./Login.css";
import Logo from "../assets/react.svg";

const Login = () => {

const  manejoSubmit = (e) =>{
	e.preventDefault();

	axios
      .post("http://192.168.0.34:1337/api/auth/local", { identifier, password })
      .then(response => {
        console.log(response)
      })

}

const [ identifier, setIdentifier] = useState()
const [ password, setPassword] = useState()


  
	return (
		<div className="wrapper fadeInDown">
			<div id="formContent">
				<div className="fadeIn first">
					<img src={Logo} id="icon" alt="User Icon" />
				</div>
				<form onSubmit={manejoSubmit}>
					<input 
						type="text"
						className="fadeIn second"
						name="identifier"
						placeholder="Username or email"
						value={identifier}
						onChange={e => setIdentifier(e.target.value)}
						
					/>
					<input
						type="password"
						className="fadeIn third"
						name="password"
						placeholder="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						type="submit"
						className="fadeIn fourth"
						defaultValue="Log In"
					/>
				</form>
				<div id="formFooter">
					<a className="underlineHover">
						Forgot Password?
					</a>
				</div>
			</div>
     
		</div>
    
	);
};
export default Login;
