import axios from "axios";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./auth";
import Day from "./Day";
import React from "react";
import { useEffect } from "react";
import ListaHabitos from "./Listahabito";

export default function ScreenHabitos() {

    const { user, setUser } = React.useContext(AuthContext)
    const dias = [
        { "id": 0, "name": "D" },
        { "id": 1, "name": "S" },
        { "id": 2, "name": "T" },
        { "id": 3, "name": "Q" },
        { "id": 4, "name": "Q" },
        { "id": 5, "name": "S" },
        { "id": 6, "name": "S" },
    ]
    const [day, setDay] = useState([])
    const [form, SetForm] = useState({ name: "" })
    const [criando, setCriando] = useState(true)
    const [info, setInfo] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!")
    const [habitosCriados, setHabitosCriados] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL, config);
        promise.then((res) => {
            setHabitosCriados(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    function selecionarDia(dia) {
        const selected = day.some(s => dia.id === s.id)
        if (selected) {
            const newList = day.filter(s => dia.id !== s.id)
            setDay(newList)
        } else {
            setDay([...day, dia])
        }
    }
    function salvarHabito(e) {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const habito = {
            name: form.name,
            days: day.map(s => s.id)
        }
        axios.post(URL, habito, config)
            .then(res => {
                setInfo("")
                setCriando(true)
            })
            .catch(err => alert(err.response.data.message)
            )
    }
    function handleForm(e) {
        const { name, value } = e.target
        SetForm({ ...form, [name]: value })
    }
    function criarHabito() {
        setCriando(false)
    }
    function cancel() {
        setCriando(true)
    }
    return (
        <Screen>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="Imagem usuário" />
            </Header>
            <Top>
                <h1> Meus hábitos</h1>
                <Add onClick={criarHabito}>+</Add>
            </Top>
            {criando === false ?
                <Habito>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                        placeholder=" nome do hábito"
                        type="text"
                    />
                    <Week>
                        {dias.map(dia => (
                            <Day
                                key={dia.id}
                                dia={dia}
                                selecionarDia={selecionarDia}
                                selected={day.some(s => dia.id === s.id)} />
                        ))}
                    </Week>
                    <Options>
                        <h1 onClick={cancel}>Cancelar</h1>
                        <Salvar onClick={salvarHabito}> Salvar </Salvar>
                    </Options>
                </Habito>
                : ""}
            {habitosCriados.map((info) => <ListaHabitos key={info.id} info={info} />)}
            <Info>{info}</Info>
            <Bottom>
                <Link to={`/habitos`}><p>Hábitos</p></Link>
                <Link to={`/hoje`}><p>Hoje</p></Link>
                <Link to={`/historico`}><p>Histórico</p></Link>
            </Bottom>
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
const Add = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
margin-right: 24px;
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
const Habito = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 30px;
margin-left: auto;
margin-right: auto;
input{
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 8px;
font-family: 'Lexend Deca';
margin-left: 16px;
margin-top: 16px;
}
`
const Week = styled.div`
display: flex;
width: 280px;
margin-left: 16px;
`
const Salvar = styled.div`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
margin-left: 15px;
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