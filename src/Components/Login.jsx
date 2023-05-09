import {useState} from "react";
import "./Login.css";
import Logo from "../assets/react.svg";

const Login = () => {

const [ dateS, setDate] = useState([])

const manejarEnvio = e =>{ 
  e.preventDefault();
console.log('Hola')
  const inciar ={

      username: dateS,
      password: manejoPass


  }
  console.log(inciar)
  
}

const manejoName = (e) =>{

  setDate({
    ...dateS,
    username: e.target.value
})
}
const manejoPass = (e) =>{

  setDate({
    ...dateS,
    password: e.target.value
})

}



  
	return (
		<div className="wrapper fadeInDown">
			<div id="formContent">
				<div className="fadeIn first">
					<img src={Logo} id="icon" alt="User Icon" />
				</div>
				<form onSubmit={manejarEnvio}>
					<input 
						type="text"
						className="fadeIn second"
						name="username"
						placeholder="Username or email"
            onChange={manejoName}
					/>
					<input
						type="password"
						className="fadeIn third"
						name="password"
						placeholder="password"
            onChange={manejoPass}
					/>
					<input
						type="submit"
						className="fadeIn fourth"
						defaultValue="Log In"
					/>
				</form>
				<div id="formFooter">
					<a className="underlineHover" href="#">
						Forgot Password?
					</a>
				</div>
			</div>
     
		</div>
    
	);
};
export default Login;
