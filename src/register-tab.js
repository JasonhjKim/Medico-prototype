import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class RegisterTab extends Component {
    render() {
        return(
            <React.Fragment>
                <Form>
                    <Label>NAME: </Label>
                    <Input />
                    <Label>AGE: </Label>
                    <Input />
                    <Label>SEX: </Label>
                    <Input />
                    <Label>PRESCRIPTION DETAIL: </Label>
                    <Textarea rows={5}/>
                    <Label>DOCTOR TRANSCRIPT: </Label>
                    <Textarea rows={8}/>
                </Form>
                    <Button color={true}>Register New Patient</Button>
                    <Button to="/">Cancel</Button>
            </React.Fragment>
        )
    }
}

const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;

`

const Label = styled.label`
    font-weight: bold;
    font-size: 12px;
    color: gray;
    margin-top: 0.45em;
`
const Input = styled.input`
    border: 1px solid #41AA9C;
    width: 100%;
    height: 25px;
    border-radius: 4px;
    font-size: 12px;
`

const Textarea = styled.textarea`
    border: 1px solid #41AA9C;
    font-size: 12px;
`

const ButtonContainer = styled.div`

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

    background-color: ${ props => props.color ? "#41AA9C" : "#4C817A"}
`