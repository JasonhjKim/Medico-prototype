import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class PatientTab extends Component {
    render() {
        console.log("This rendered")
        return(
            <React.Fragment>
                <Heading>Your current patients (3): </Heading>
                <TableHead>
                    <Th>NAME</Th>
                    <Th>CONDITION</Th>
                    <Th>DOH</Th>
                    <Th>DOCTOR</Th>
                </TableHead>
                <PatientWrapper>
                    <Patient name="Elina Hodson" condition="Malnutrition" doh="3 days" doctor="Dr. Sean Murphy"></Patient>
                    <Patient name="Evie Krause" condition="Malnutrition" doh="3 days" doctor="Dr. Sean Murphy"></Patient>
                    <Patient name="Skyla Chavez" condition="Malnutrition" doh="3 days" doctor="Dr. Sean Murphy"></Patient>
                </PatientWrapper>
            </React.Fragment>
        )
    }
}

const PatientWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
    overflow-y: auto    ;
`

const PatientContainer = styled.div`
    width: 725px;
    height: 60px;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 1em;
    box-shadow: 0 0 10px 0 rgba(215,215,215,0.50);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const Heading = styled.h1`
    align-self: flex-start;
    margin-left: 0.75em;
    color: #737373;
`

const TableHead = styled.div`
    width: 725px;
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const Patient = (props) => {
    const { color, name, condition, doh, doctor } = props;
    return(
        <PatientContainer>
            <Name>
                <Circle color={color}/>
                <Td>{ name }</Td>
            </Name>
            <Td>{ condition}</Td>
            <Td>{ doh }</Td>
            <Td>{ doctor}</Td>
            <Button to="/meds">M</Button>
            <Button to="/profile">P</Button>
        </PatientContainer>
    )
}

const Name = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Circle = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${ props => props.color ? props.color : "#41AA9C" };
    border-radius: 50%;
    margin-right: 1em;
`


const Td = styled.div`

`

const Th = styled.div`
    font-weight: bold;
    font-size: 12px;
    margin-left: -8em;
`

const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #41AA9C;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-decoration: none;
`