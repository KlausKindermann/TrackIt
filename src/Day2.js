import { useEffect, useState } from "react"
import styled from "styled-components"
import { colors } from "./colors"

export default function Day2({ dia, selected }) {
    const [status, setStatus] = useState("selecionado")

    useEffect(() => {
        if (selected) {
            setStatus("selecionado")
        } else {
            setStatus("naoSelecionado")
        }
    }, [selected])

    return (
        <DayItem status={status}>
            {dia.name}
        </DayItem>
    )
}

const DayItem = styled.div`
font-family: 'Lexend Deca';
width: 30px;
height: 30px;
background: ${props => colors[props.status].background};
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
color: ${props => colors[props.status].color};
`