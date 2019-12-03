import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class LogTab extends Component {
    render() {
        return(
            <React.Fragment>
                <Heading>Users Activity Logs: </Heading>
                <Textarea readonly value={"[May 02, 2019 12:00 PM]: Nurse Kayle Smith Attempted to access the system\n[May 02, 2019 12:06 PM]: Access granted for Nurse Kayle Smith\n[May 02, 2019 12:10 PM]: Nurse Kayle Smith Dispensed 2 pills of high protein medication for patient Elina Hodson\n"}>
                </Textarea>
                <Button to="/">Cancel</Button>
            </React.Fragment>
        )
    }
}


const Heading = styled.h1`
    align-self: flex-start;
    margin-left: 0.75em;
    color: #737373;
`

const Textarea = styled.textarea `
    width: 95%;
    height: 95%;
`

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