import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Link, Route } from 'react-router-dom';
import Stock from './svg/stock';
import User from './svg/user'
import Log from './svg/log';

import RestockTab from './restock-tab';
import MenuTab from './menu-tab';
import UserTab from './user-tab';
import LogTab from './log-tab';

export default class Maintain extends Component {
    render() {
        const { logout } = this.props;
        return(
            <React.Fragment>
                <Navbar logout={logout}/>
                <Switch>
                    <Route component={({ match }) => 
                        <React.Fragment>
                            <Route path="/stock" children={<RestockTab/>}/>
                            <Route path="/users" children={<UserTab/>}/>
                            <Route path="/log" children={<LogTab/>}/>
                            <Route exact path="/" children={<MenuTab/>}/>
                        </React.Fragment>
                    }/>
                </Switch>
            </React.Fragment>
        )
    }
}

const NavbarContainer = styled.div`
    height: 75px;
    width: 100%;
    background-color: #41AA9C;
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    align-items: center;
`

const LogoHeading = styled.div`
    font-family: Helvetica-Bold;
    font-size: 32px;
    color: #ECF6F5;
    letter-spacing: 0;
    text-align: center;
    margin-left: 50px;
`


const LogoutButton = styled.button`
    width: 160px;
    height: 45px;
    color: white;
    background-color: #6ECFC2;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    margin-right: 50px;
    outline: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Navbar = (props) => {
    return(
        <NavbarContainer>
            <LogoHeading>
                Medi Co.
            </LogoHeading>
            <LogoutButton onClick={() => props.logout()}>Logout</LogoutButton>
        </NavbarContainer>
    )
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