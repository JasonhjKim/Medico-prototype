import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Link, Route } from 'react-router-dom';
import Stock from './svg/stock';
import User from './svg/user'
import Log from './svg/log';

export default class MenuTab extends Component {
    render() {
        return(
            <MaintainContainer >
                <Functionality to="/stock">
                    <Stock/>
                    <FuncHeading>Check Medication Stock</FuncHeading>
                </Functionality>
                <Functionality to="/users">
                    <User />
                    <FuncHeading>Check User Account</FuncHeading>
                </Functionality>
                <Functionality to="/log">
                    <Log/>
                    <FuncHeading>Check User Activity Log</FuncHeading>
                </Functionality>
            </MaintainContainer>
        )
    }
}

const Functionality = styled(Link)`
    width: 280px;
    height: 280px;
    box-shadow: 0 0 10px 0 rgba(215,215,215,0.50);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-decoration: none;
`

const FuncHeading = styled.div`
    /* width: 65%; */
    font-family: Helvetica-Bold;
    font-size: 18px;
    color: #737373;
    letter-spacing: 0;
    text-align: center;
    margin-top: 1em;
`

const MaintainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
