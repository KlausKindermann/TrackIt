import axios from "axios";
import styled from "styled-components"
import logo from "./img/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ScreenLogin() {
    const [form, SetForm] = useState({ email: "", name: "", image: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        SetForm({ ...form, [name]: value })
    }

    function cadastrarUsuario(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        console.log(form)
        axios.post(URL, form)
            .then(res => {
                navigate("/")
            })
            .catch(err => alert(err.response.data.message)
            )

    }

    return (
        <Form>
            <img src={logo} alt="Logo" />
            <input data-test="email-input"
                name="email"
                value={form.email}
                onChange={handleForm}
                placeholder=" email"
                type="text"
            />
            <input data-test="password-input"
                name="password"
                value={form.password}
                onChange={handleForm}
                placeholder=" senha"
                type="text"
            />
            <input data-test="user-name-input"
                name="name"
                value={form.name}
                onChange={handleForm}
                placeholder=" nome"
                type="text"
            />
            <input data-test="user-image-input"
                name="image"
                value={form.image}
                onChange={handleForm}
                placeholder=" foto"
                type="text"
            />
            <Button data-test="signup-btn" onClick={cadastrarUsuario}> <p>Cadastrar</p> </Button>

            <Link data-test="login-link" to={`/`}>
                <h1>Já tem uma conta? Faça login!</h1>
            </Link>
        </Form>
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
display: flex;
justify-content: center;
p{
    margin-left: 21px;
    margin-top: 9px;
}
`
const Form = styled.div`
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