import React, { Component } from 'react';
import styled from 'styled-components';
import IDCard from './svg/id-card';
import Main from './main';
import Maintain from './maintain';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Body = styled.div`
    width: 950px;
    height: 615px;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 0 rgba(100,100,100,0.50);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* justify-content: center; */
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const NextButton = styled.div`
    background-color: transparent;
    /* border: none;  */
    /* border: 1px solid black; */
    width: 200px;
    height: 20px;
`

export default class App extends Component {
    state = {
        page: "tap",
    }

    handleLogout() {
        console.log("logout clicked")
        this.setState({ page: "tap" })
    }

    handleLogin(pin) {
        console.log("clicked");
        console.log(pin);
        if (pin === "5510") {
            return this.setState({ page: "maintain"});
        }
        this.setState({ page: "main" })
    }
    render() {
        return(
            <Container>
                <Body>
                    {
                        this.state.page === "main" ? <Main logout={this.handleLogout.bind(this)}/> :
                        this.state.page === "maintain" ? <Maintain logout={this.handleLogout.bind(this)}/> :
                        <React.Fragment>
                            <Navbar/>
                            <Content>
                                { this.state.page === "tap" ? <ShowID /> :
                                this.state.page === "pin" ? <PIN login={this.handleLogin.bind(this)}/> : null
                                }
                            </Content>
                            <NextButton onClick={() => this.setState({ page: "pin" })}></NextButton>
                        </React.Fragment>
                    }
                </Body>
            </Container>
        )
    }
}



const NavbarContainer = styled.div`
    height: 75px;
    width: 100%;
    background-color: #41AA9C;
    display: flex;
    flex-direction: space-around;
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

const Navbar = () => {
    return(
        <NavbarContainer>
            <LogoHeading>
                Medi Co.
            </LogoHeading>
        </NavbarContainer>
    )
}

const ShowIDContainer = styled.div`
    background-color: #E95607;
    width: 290px;
    height: 330px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 20px 0 rgba(200,200,200,0.50);
`

const ShowIDText = styled.div`
    width: 75%;
    font-size: 28px;
    font-weight: bold;
    color: white;
`

const ShowID = () => {
    return(
        <ShowIDContainer>
            <IDCard width={160} height={140}/>
            <ShowIDText>
            Please tap your ID on the reader to continue…
            </ShowIDText>
        </ShowIDContainer>
    )
}

const PINContainer = styled.div`
    width: 260px;
    height: 500px;
    display: flex;
    flex-direction: column;
`

const PINInput = styled.input`
    border: 4px solid #E95607;
    border-radius: 4px;
    height: 60px;
    margin-bottom: 15px;
    font-size: 24px;
    padding-left: 5px;
`

const NumberContainer = styled.div`
    width: 260px;
    height: 355px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;

`

const Number = styled.button`
/* Rectangle 4: */
    background: #E95607;
    width: 82px;
    height: 82px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    outline: none;
    font-size: 24px;
    border: none;
`

const LoginButton = styled.button`
    width: 260px;
    height: 50px;
    background: #41AA9C;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.5px;
`

class PIN extends Component {
    state = {
        text: "",
    }

    handleButtonClick(val, e) {
        const { text } = this.state;
        const temp = text + val;
        this.setState({ text: temp });
    }
    render () {
        return(
            <PINContainer>
                <PINInput type="password" value={this.state.text}/>
                <NumberContainer>
                    <Number onClick={ this.handleButtonClick.bind(this, 1)}>1</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, 2)}>2</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, 3)}>3</Number>
    
                    <Number onClick={ this.handleButtonClick.bind(this, 4)}>4</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, 5)}>5</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, 6)}>6</Number>
    
                    <Number onClick={ this.handleButtonClick.bind(this, 7)}>7</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, 8)}>8</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, 9)}>9</Number>
    
                    <Number onClick={ this.handleButtonClick.bind(this, "*")}>*</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, 0)}>0</Number>
                    <Number onClick={ this.handleButtonClick.bind(this, "#")}>#</Number>
                </NumberContainer>
                <LoginButton onClick={() => this.props.login(this.state.text)}>LOGIN</LoginButton>
            </PINContainer>
        )
    }
}