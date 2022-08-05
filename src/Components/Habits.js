import react, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import UserContext from "../Contexts/UserContext";
import InfoContext from "../Contexts/InfoContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";


export default function Habits() {
    const Navigate = useNavigate()
    const [habitos, setHabitos] = useState([])

    const get = localStorage.getItem('trackit')
    const string = JSON.stringify(get)
    const auth = JSON.parse(string)

    function verify() {
        if (auth.length === 0) {
            Navigate('/')
        }
    }

    useEffect(() => {
        verify()
        const config = {
            headers: {
              'Authorization': `Bearer ${auth}`
            }
         }

        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promisse.then(res => setHabitos(res.data) );
        promisse.catch(err => console.log(err.response.status))
    }, [])

    return (
        
        <>
            <Container>
                <Header />

                <AddHabits>
                    <p>Meus Hábitos</p>
                    <button onClick={Navigate('/add')}>+</button>
                </AddHabits>

                <ContainerHabits>
                {habitos.length === 0 ? <p>Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito <br /> para começar a trackear!</p> : <p>oii</p>}
                </ContainerHabits>

                <Footer />
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #E5E5E5;
    height: 100vmax;
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

p {
    font-family: 'Lexend Deca';
        font-size: 15px;
        color: #666666;
}

`