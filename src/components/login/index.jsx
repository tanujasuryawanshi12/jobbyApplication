import { useEffect, useState } from 'react';
import './index.css'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const Login = ()=>{

    const [allValues , setValues] = useState(
        {
            username:" ",
            password:" ",
            errorMsg:""
        }
    )

    const token = Cookies.get("jwtToken");
    const navigate = useNavigate();

    useEffect(()=>{

        if(token!==undefined){
            navigate("/");
        }

    },[]);

    const onsubmitUserDetails =async (e)=>{
        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username:allValues.username,
            password:allValues.password
        }

        const options = {
            method:"Post",
           body:JSON.stringify(userDetails)
        }

        try {

            const response = await fetch(api, options);

            const data = await response.json();
            console.log(response);

            if(response.ok === true){
                console.log(data);
                setValues({...allValues, errorMsg:""});
                Cookies.set("jwtToken", data.jwt_token);
                navigate("/");

            }else{

                setValues({...allValues, errorMsg:data.error_msg});

            }
            
        } catch (error) {
            console.log(error);
        }

    }
  return(
    <div className='loginpage'>
        <form className='w-50 border border-primary p-3 bg-success' onSubmit={onsubmitUserDetails} >
            <label htmlFor="username">UserName:</label>
            <input onChange ={(e)=>{setValues({...allValues, username:e.target.value})}} type="text" id="username" className=' form-control '/>
            <label htmlFor="passwrd">Password:</label>
            <input onChange={(e)=>{setValues({...allValues, password:e.target.value})}} type="password" id="passwrd" className=' form-control '/><br/>
            
            <button type="submit" className='btn btn-warning'>Submit</button><br/>
            <p className='text-danger'>{allValues.errorMsg}</p>
            
        </form>
    </div>
  )
}

export default Login;