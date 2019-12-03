import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Pill from './svg/pill'
import IV from './svg/iv'

export default class MedTab extends Component {
    state = {
        isModel: false,
    }

    handleModal() {
        console.log("Modal clicked");
        this.setState({ isModel: true })
    }


    handleCancel() {
        console.log("Modal clicked");
        this.setState({ isModel: false })
    }

    render() {
        return(
            <React.Fragment>
                <Heading>Patient Medication: </Heading>
                <MedContainer>
                    { this.state.isModel ? 
                        <React.Fragment>
                            <Modal />
                            <CancelButton onHandleCancel={this.handleCancel.bind(this)}/> 
                        </React.Fragment> :
                        <React.Fragment>
                            <Selection onClick={this.handleModal.bind(this) } title={"Protein-Energy Medication"} type={"pill"} dosage={"2 Pills"} amount={"2 mg each"} buttonType={"SELECT"}/>
                            <Selection onClick={this.handleModal.bind(this) }title={"Protein-Energy Medication"} type={"iv"} dosage={"1500 mL"} amount={"100 mg"} buttonType={"SELECT"}/>

                            <Button to="/">Cancel</Button>
                        </React.Fragment>
                    }
                </MedContainer>
            </React.Fragment>
        )
    }
}

const MedContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-y: auto;
`

const Heading = styled.h1`
    align-self: flex-start;
    margin-left: 0.75em;
    color: #737373;
    `
const SelectionContainer = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 1em;
    box-shadow: 0 0 10px 0 rgba(215,215,215,0.50);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

const MedWrapper = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
`

const SVGContainer = styled.div`
    width: 125px;
    height: 125px;
    background-color: #41AA9C;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MedTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #737373;
    margin: 1em 0;
`

const MedDesc = styled.div`
    font-size: 18px;
    color: #737373;
    align-self: flex-end;
`

const MedButton = styled.button`
    width: 180px;
    height: 40px;
    background: #4C817A;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    margin: 2em 0 0 0;
    font-size: 14px;
    outline: none;
`



const Selection = (props) => {
    const { type, dosage, amount, onClick, buttonType } = props
    return(
        <SelectionContainer>
            <MedWrapper>
                <SVGContainer>
                    { type === "pill" ? <Pill /> : <IV /> }
                </SVGContainer>

                <MedTitle>Protein-Energy Medication</MedTitle>
                <MedDesc >{dosage}</MedDesc>
                <MedDesc>{amount}</MedDesc>

                <MedButton onClick={() => props.onClick ? props.onClick() : null}>{buttonType}</MedButton>
            </MedWrapper>
        </SelectionContainer>
    )
}


const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`

const CancelButtonWrapper = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 4px;
    color: white;
    background-color: #41AA9C;
    margin-top: -60px;
    font-size: 16px;
`

const Modal = () => {
    return (
        <ModalContainer>
            <Selection title={"Protein-Energy Medication"} type={"iv"} dosage={"1500 mL"} amount={"100 mg"} buttonType={"DISPENSE"}/>
        </ModalContainer>
    )
}

const CancelButton = (props) => {
    return <CancelButtonWrapper onClick={ props ? () => props.onHandleCancel() : null}>Cancel</CancelButtonWrapper>
}