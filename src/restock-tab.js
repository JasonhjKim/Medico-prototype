import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class RestockTab extends Component {
    render() {
        return(
            <React.Fragment>
                <Heading>Current Medication Stock: </Heading>
                <Med name={"High-Protein Medication"} dosage={"50 mg"} count={3} level={1} />
                <Med name={"High-Protein Medication"} dosage={"100 mg"} count={20} level={2}/>
                <Med name={"High-Protein Medication"} dosage={"150 mg"} count={40} level={3}/>

                <Button to="/">Cancel</Button>
            </React.Fragment>
        )
    }
}


const MedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
    overflow-y: auto;
`

const MedContainer = styled.div`
    width: 900px;;
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

const Td = styled.div`

`

const Level = styled.div`
    width:70px;
    height: 20px;
    background-color: ${ props => props.level === 1 ? "#FF3636" : props.level === 2 ? "#FAEA2B" : props.level === 3 ? "#56EA38" : null};
    border-radius: 8px;
    border: none;
    color: white;
    display: flex;
    align-items: center; 
    justify-content: center;
`

const Med = (props) => {
    const { name, dosage, count, level } = props;
    return(
        <MedContainer>
            <Td>{name}</Td>
            <Td>{dosage}</Td>
            <Td>{count}</Td>
            <Level level={level}>{level === 1 ? "low" : level === 2 ? "med" : level === 3 ? "high" : null}</Level>
        </MedContainer>
    )
}

const Button = styled(Link)`
    width: 250px;
    height: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25em;
    text-decoration: none;
    color: white;
    background-color: #41AA9C;
    /* align-self: baseline; */
`
