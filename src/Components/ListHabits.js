import { useEffect, useState } from "react"
import styled from 'styled-components'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const listDays = [
    {
        id: '0',
        dia: 'D',
    }, {
        id: '1',
        dia: 'S',
    },
    {
        id: '2',
        dia: 'T',
    },
    {
        id: '3',
        dia: 'Q',
    },
    {
        id: '4',
        dia: 'Q',
    },
    {
        id: '5',
        dia: 'S',
    },
    {
        id: '6',
        dia: 'S',
    },
]


function MenuList(props) {

    return (
        <ContHabits>

            <HabitDel>
                <p>{props.userHabit}</p>
                <ion-icon name="trash-outline"></ion-icon>
            </HabitDel>

            <ContWeek>
                <div id={listDays[0].id}>{listDays[0].dia}</div>
                <div id={listDays[1].id}>{listDays[1].dia}</div>
                <div id={listDays[2].id}>{listDays[2].dia}</div>
                <div id={listDays[3].id}>{listDays[3].dia}</div>
                <div id={listDays[4].id}>{listDays[4].dia}</div>
                <div id={listDays[5].id}>{listDays[5].dia}</div>
                <div id={listDays[6].id}>{listDays[6].dia}</div>
            </ContWeek>

        </ContHabits>
    )
}

export default function List() {
    const [habitos, setHabitos] = useState([])
    const [id, setId] = useState([])

    const Navigate = useNavigate()
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
        promisse.then(res => {setHabitos(res.data); setId(res.data)});
        promisse.catch(err => console.log(err.response.status))
    }, [])

    console.log(habitos)
/* 
    useEffect(() => {
        const PromisseDel = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`)
    }) */


    return (
        <>
            {habitos.length === 0 ? <p>Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito <br /> para começar a trackear!</p> : habitos.map((item) => <MenuList userHabit={item.name} />)}
        </>
    )
}

const ContHabits = styled.div`
width: 300px;
height: 91px;
background-color: #fff;
border-radius: 5px;
margin-top: 8px;
padding: 13px 15px;
`
const HabitDel = styled.div`

    display: flex;
    justify-content: space-between;

    p {
        font-size: 20px;
    }
`

const ContWeek = styled.div`
display: flex;
margin-top: 20px;

div {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    border: 1px solid #D4D4D4;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    transition: all ease-in-out 0.2s;
}
`