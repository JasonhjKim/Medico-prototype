import React, { Component } from 'react';
import styled from 'styled-components';

import PatientTab from './patient-tab';
import RegisterTab from './register-tab';
import MedTab from './med-tab';
import { Switch, Route, Link } from 'react-router-dom';
import ProfileTab from './profile-tab';

export default class Main extends Component {
    state = {
        selected: "patients"
    }
    render() {
        const { logout } = this.props;
        return(
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/register"><RegisterTab/></Route>
                    <Wrapper>
                    <Sidebar>
                        <SidebarItem selected={ this.state.selected === "patients" ? true : false } to="/">Patients</SidebarItem>
                        <LogoutButton onClick={ () => logout() }>Logout</LogoutButton>
                    </Sidebar>
                            <Content>
                                <Route component={({ match }) => 
                                    <React.Fragment>
                                        <Route path="/profile" children={<ProfileTab />} />
                                        <Route path="/meds" children={<MedTab />} />
                                        <Route exact path="/" children={<PatientTab />} />
                                    </React.Fragment>
                                }/>
                            </Content>
                    </Wrapper>
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
    justify-content: space-between;
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

const RegisterPatientButton = styled(Link)`
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F8F8F8;
    align-items: center;
`

const Sidebar = styled.div`
    width: 200px;
    height: 100%;
    background-color: #4C817A;
    box-shadow: 5px 0 5px -5px #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    `

const SidebarItem = styled(Link)`
    width: 200px;
    height: 50px;
    background-color: ${ props => props.selected ? "#355a55" : "transparent"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0.5em 0;
    text-decoration: none;
`

const Navbar = () => {
    return(
        <NavbarContainer>
            <LogoHeading>Medi Co.</LogoHeading>
            <RegisterPatientButton to="/register">Register Patient</RegisterPatientButton>
        </NavbarContainer>
    )
}


const PatientContainer = styled.div`
    width: 725px;
    height: 60px;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 1em;
    box-shadow: 0 0 10px 0 rgba(215,215,215,0.50);
`



const LogoutButton = styled.button`
    width: 160px;
    height: 45px;
    color: white;
    background-color: #6ECFC2;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    /* margin-right: 50px; */
    outline: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
`