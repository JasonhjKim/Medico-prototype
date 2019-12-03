import React, { Component } from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';

export default class UserTab extends Component {
    render() {
        return(
            <React.Fragment>
                <Heading>Registered Professionals: </Heading>
                <User name={"Kayle Smith"} sex={"Female"} patients={3} occupation={"Nurse"} />
                <User name={"Steve Kingwood"} sex={"Male"} patients={10} occupation={"Doctor"} />
                
                <Button to="/">Cancel</Button>
            </React.Fragment>
        )
    }
}


const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
    overflow-y: auto;
`

const UserContainer = styled.div`
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

const User = (props) => {
    const { name, patients, sex, occupation } = props;
    return(
        <UserContainer>
            <Td>{name}</Td>
            <Td>{patients}</Td>
            <Td>{sex}</Td>
            <Td>{occupation}</Td>
        </UserContainer>
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
