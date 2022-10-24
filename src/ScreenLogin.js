import axios from "axios";
import styled from "styled-components"
import logo from "./img/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./auth";
import React from "react";

export default function ScreenLogin() {
    const [form, SetForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const {user, setUser} = React.useContext(AuthContext)
    
    function handleForm(e) {
        const { name, value } = e.target
        SetForm({ ...form, [name]: value })
    }

    function login(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        console.log(form)
        axios.post(URL, form)
            .then(res => {
                navigate("/hoje")
                setUser(res.data)
            })
            .catch(err => alert(err.response.data.message)
            )

    }
    return (
        <Login>
            <img src={logo} alt="Logo" />
            <input
                name="email"
                value={form.email}
                onChange={handleForm}
                placeholder=" email"
                type="text"
            />
            <input
                name="password"
                value={form.password}
                onChange={handleForm}
                placeholder=" senha"
                type="text"
            />
            <Button onClick={login}> <p>Entrar</p>  </Button>
            <Link to={`/cadastro`}>
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Link>
        </Login>
    )
}
const Button = styled.div`
width: 303px;
height: 45px;
background: #52B6FF;
border: 1px solid #D5D5D5;
border-radius: 4.63636px;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
color: #FFFFFF;
font-family: 'Lexend Deca';
margin-bottom: 25px;
p{
    margin-left: 120px;
    margin-top: 9px;
}
`
const Login = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
width: 180px;
height: 178.38px;
margin-bottom: 30px;
margin-top: 80px;
}
input{
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 8px;
font-family: 'Lexend Deca';
}
h1{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
}
`