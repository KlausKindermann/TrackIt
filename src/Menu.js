import styled from "styled-components"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {
    
    return (
        <Bottom data-test="menu">
            <Link data-test="habit-link" to={`/habitos`}><p>Hábitos</p></Link>
            <Link data-test="today-link" to={`/hoje`}>
            <div style={{ width: 80, height: 100}}>
                <CircularProgressbar
                    value={0}
                    text="Hoje"
                    strokeWidth={7}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
                </div>
            </Link>
            <Link data-test="history-link" to={`/historico`}><p>Histórico</p></Link>
        </Bottom>
    )
}
const Bottom = styled.div`
width: 100%;
height: 80px;
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