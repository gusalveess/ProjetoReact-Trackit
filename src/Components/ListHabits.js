import { useEffect, useState } from "react"
import styled from 'styled-components'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];


export default function List() {
    const [habitos, setHabitos] = useState([])
    const [info, setInfo] = useState([])
    const [inform, setInform] = useState([])

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
        promisse.then(res => { setHabitos(res.data); setInfo(res.data) });
        promisse.catch(err => console.log(err.response.status))
    }, [])


    function MenuList(props) {

        const get = localStorage.getItem('trackit')
        const string = JSON.stringify(get)
        const auth = JSON.parse(string)



        function del(habit) {

            const config = {
                headers: {
                    'Authorization': `Bearer ${auth}`
                }
            }

            const confirmar = window.confirm('Tem certeza?')

            if (confirmar) {
                const PromisseDel = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}`, config)
                console.log(habit)

                setTimeout(() => {
                    document.location.reload(true)
                }, 1000);
            } else {
                document.location.reload()
            }

        }

        console.log(habitos)

        return (
            <>

                {habitos.map((habit, index) => {

                    return (
                        <>

                            <ContHabits>
                                <ContWeek key={habit.id}>

                                    <HabitDel>
                                        <p>{habit.name}</p>
                                        <ion-icon onClick={() => del(habit.id)} name="trash-outline"></ion-icon>
                                    </HabitDel>

                                    <div>
                                        {listDays.map((day, index) => {
                                            return ((habit.days).includes(index) ?
                                                <DaySelect style={{ backgroundColor: "#cfcfcf", color: '#FFFFFF' }} key={index}>{day}</DaySelect> :
                                                <DaySelect style={{ backgroundColor: "#fff", color: '#666' }} key={index}>{day}</DaySelect>)
                                        })}


                                    </div>
                                </ContWeek>
                            </ContHabits>
                        </>
                    )
                })
                }
            </>
        )

    }

    return (
        <>
            {habitos.length === 0 ? <Nothing>Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito <br /> para começar a trackear!</Nothing> : <MenuList />}
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
    margin: 0px 10px 15px 10px;


    p {
        font-size: 20px;
    }
`

const ContWeek = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;

div {
    display: flex;
}
`
const DaySelect = styled.div`
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
`
const Nothing = styled.p`
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #666666;
        padding-top: 10px;
`