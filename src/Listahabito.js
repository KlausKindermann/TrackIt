import styled from "styled-components"
import Day2 from "./Day2"
import { useState } from "react"


export default function ListaHabitos({ info }) {
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

    function excluirTarefa() {
        alert("")
    }

    return (
        <HabitoCriado data-test="habit-container">
            <Topo>
                <h1 data-test="habit-name" >{info.name}</h1>
                <ion-icon data-test="habit-delete-btn" onClick={excluirTarefa} name="trash-outline"></ion-icon>
            </Topo>
            <Week>
                {dias.map(dia => (
                    <Day2 data-test="habit-day" 
                        key={dia.id}
                        dia={dia}
                    />
                ))}
            </Week>
        </HabitoCriado>
    )
}
const Topo = styled.div`
display: flex;
margin-bottom: 5px;
margin-top: 10px;
h1{
width: 290px;
margin-bottom: 8px;
font-family: 'Lexend Deca';
margin-left: 16px;
margin-top: 10px;
}
ion-icon{
    margin-top: 11px;
}
`
const HabitoCriado = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 30px;
margin-left: auto;
margin-right: auto;
`
const Week = styled.div`
display: flex;
width: 280px;
margin-left: 16px;
`