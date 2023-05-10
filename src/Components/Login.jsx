import {useState} from "react";
import axios from 'axios';
import "./Login.css";
import Logo from "../assets/react.svg";

const Login = () => {

const [ nameDate, setNameDate] = useState({
	identifier:"",
	password: ""
})
// const [ passDate, setPassDate] = useState([])


const manejarDatos = (e) =>{

	const value= e.target.value 

	setNameDate({
		...nameDate,
		[e.target.identifier] : value,
		[e.target.password] : value,
	})
	

	
}



const  manejoSubmit = (e) =>{
	e.preventDefault();

	const userData ={
		identifier: nameDate.identifier,
		password: nameDate.password
	}
	axios.post("http://192.168.0.34:1337/api/auth/local", userData)
	.then((response) =>{console.log(response.status, response.data)})

}




  
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
            onChange={manejarDatos}
					/>
					<input
						type="password"
						className="fadeIn third"
						name="password"
						placeholder="password"
            onChange={manejarDatos}
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
