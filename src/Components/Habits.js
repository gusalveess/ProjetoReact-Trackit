import react, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import UserContext from "../Contexts/UserContext";
import InfoContext from "../Contexts/InfoContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import AddButton from './AddHabit'
import List from './ListHabits'


export default function Habits() {
    const Navigate = useNavigate()
    const get = localStorage.getItem('trackit')
    const string = JSON.stringify(get)
    const auth = JSON.parse(string)

    function verify() {
        if (auth.length === 0) {
            Navigate('/')
        }
    }

    const [hidden, setHidden] = useState(false);

    function hidde() {

        if (hidden == false) {
            setHidden(true)
        }
        else {
            setHidden(false)
        }
    }

    return (

        <>
            <Container>
                <Header />

                <AddHabits>
                    <p>Meus Hábitos</p>
                    <button onClick={() => hidde()}>+</button>
                </AddHabits>

                <ContainerHabits>

                    <div style={hidden == true ? { display: 'block' } : { display: 'none' }}>
                        <AddButton />
                    </div>

                    <List />

                </ContainerHabits>

                <Footer />
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #E5E5E5;
   height: 110vh;
    width: 100%;
`

const AddHabits = styled.div`
width: 100%;
height: 77px;
margin-top: 70px;
display: flex;
justify-content: space-around;
align-items: center;

p {
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #126BA5;
}

button {
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63px;
    border: none;
    color: #fff;
    font-size: 27px;
}
`
const ContainerHabits = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 80px;

p {
    font-family: 'Lexend Deca';
        font-size: 18px;
        color: #666666;
}

`