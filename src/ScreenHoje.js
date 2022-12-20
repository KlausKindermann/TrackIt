import styled from "styled-components"
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./auth";
import ListaHabitosHoje from "./ListaHabitosHoje";
import Menu from "./Menu";

export default function ScreenHoje() {
const {user, setUser} = React.useContext(AuthContext)
const [habitosCriados, setHabitosCriados] = useState([])

useEffect(() => {
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const promise = axios.get(URL, config);
    promise.then((res) => {
        setHabitosCriados(res.data)
    })
    promise.catch((err) => {
        console.log(err.response.data)
    })
}, [])

    return (
        <Screen>
            <Header data-test="header">
                <h1>TrackIt</h1>
                <img src={user.image} alt="Imagem usuário" />
            </Header>
            <Top>
                <h1 data-test="today">Hoje</h1>
            </Top>
            {habitosCriados.map((info) => 
            <ListaHabitosHoje 
            key={info.id} 
            info={info} 
            />)}
           <Menu/>
        </Screen>
    )
}
const Bottom = styled.div`
width: 100%;
height: 70px;
background: #FFFFFF;
bottom: 0;
position: fixed;
display: flex;
justify-content: space-evenly;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #52B6FF;
margin-top: 25px;
}
`
const Screen = styled.div`

`
const Header = styled.div`
width: 100%;
height: 70px;
left: 0px;
top: 0px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
img{
width: 51px;
height: 51px;
border-radius: 98.5px;
margin-right: 20px;
}
h1{
margin-left: 20px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
}
`
const Top = styled.div`
width: 100%;
height: 90px;
margin-top: 70px;
display: flex;
justify-content: space-between;
align-items: center;
h1{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-left: 20px;
}
`
const Info = styled.div`
width: 338px;
height: 74px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
margin-left: auto;
margin-right: auto;
`
const Options = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
margin-left: 161px;
h1{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
color: #52B6FF;
}
`