import { useState } from "react"
import styled from "styled-components"

export default function ListaHabitosHoje({info}) {
   
    const [finalizada, setfinalizada] = useState()

    function finalizar(){
        if (!finalizada) {
            setfinalizada(true)
          }
    }

    return (
        <HabitoCriado data-test="today-habit-container">
            <Info>
                <h1 data-test="today-habit-name" >{info.name}</h1>
                <p data-test="today-habit-sequence" >Sequência atual</p>
                <p data-test="today-habit-record" >Seu recorde</p>
            </Info>
            {finalizada ? (
              <ion-icon data-test="today-habit-check-btn" onClick={finalizar} style={{color: "green"}} name="checkbox"/>
            ) : (
              <ion-icon data-test="today-habit-check-btn" onClick={finalizar} name="checkbox"/>
            )}
        </HabitoCriado>
    )
}
const Info = styled.div`
margin-bottom: 5px;
margin-top: 10px;
width: 290px;
h1{
margin-bottom: 8px;
font-family: 'Lexend Deca';
margin-left: 16px;
font-size: 20px;
}
p{
font-size: 15px;
font-family: 'Lexend Deca';
margin-left: 16px;
margin-top: 5px;
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
display: flex;
ion-icon{
   font-size: 60px;
   color: #E5E5E5;
   margin-top: auto;
   margin-bottom: auto;
   margin-right: 15px;
}
`
