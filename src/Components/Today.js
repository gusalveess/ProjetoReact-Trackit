import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Contexts/UserContext"
import Vector from '../Assets/Imgs/Vector.svg'

export default function Today() {

    const date = dayjs().locale('pt-br').format('dddd, DD/MM')
    const get = localStorage.getItem('trackit')
    const string = JSON.stringify(get)
    const auth = JSON.parse(string)

    const pegar = localStorage.getItem('progresso')
    const convert = JSON.stringify(pegar)
    const finale = JSON.parse(convert)





    const { setProgress, habitosHoje, setHabitosHoje } = useContext(UserContext)
    const percentage = ((finale / habitosHoje.length) * 100);
    const [reload, setReload] = useState(false)

    const isCheckedTrue = '#8FC549'
    const isCheckedFalse = '#666'

    const isChangedTrue = '#8FC549'
    const isChangedFalse = '#BABABA'

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${auth}`
            }
        }

        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promisse.then(res => { setHabitosHoje(res.data) });
        promisse.catch(err => console.log(err.response.status))
    }, [])



    function Check(item) {

        const config = {
            headers: {
                'Authorization': `Bearer ${auth}`
            }
        }

        {
            habitosHoje.map((item) => {

                if (item.done == false) {
                    const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/check`, null, config)
                    promessa.then(() => { setProgress(100) })

                    setTimeout(() => {
                        document.location.reload(true)
                    }, 1500);
                }

                else {

                    const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/uncheck`, null, config)

                    setTimeout(() => {
                        document.location.reload(true)
                    }, 1500);
                }
                
            })
        }
    }

    function MenuHoje() {

        const isCheckTrue = '#8FC549'
        const isCheckFalse = '#EBEBEB'

        return (
            <>

                {habitosHoje.map((item) => {


                    return (
                        <>
                            <CardToday>
                                <div>
                                    <h2>{item.name}</h2>

                                    <Flex>
                                        <p>Sequência atual:</p> <Info isChecked={item.done ? isCheckedTrue : isCheckedFalse}> {item.currentSequence} dias</Info>
                                    </Flex>

                                    <Flex>
                                        <p>Seu recorde:</p> <Info isChecked={item.currentSequence === item.highestSequence && item.done ? isCheckedTrue : isCheckedFalse}> {item.highestSequence} dias</Info>
                                    </Flex>
                                </div>

                                <Button isCheck={item.done ? isCheckTrue : isCheckFalse} onClick={() => { Check(item.id, item.done) }}>
                                    <img src={Vector} />
                                </Button>

                            </CardToday>
                        </>
                    )

                })}


            </>
        )
    }

    return (
        <>
            <Container>

                <Header />

                <MenuToday>
                    <h1>{date}</h1>
                    <MenuHoje />
                </MenuToday>

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

const MenuToday = styled.div`
padding-top: 98px;
padding-left: 17px;
display: flex;
flex-direction: column;
justify-content: center;

h1 {
    font-size: 23px;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
}
`
const Percent = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    padding-top: 3px;
    color: ${props => props.isChanged};
`

const CardToday = styled.div`
    width: 310px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 28px;
    padding: 13px 15px;
    display: flex;
    justify-content: space-around;

    h2 {
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        color: #666;
        padding-bottom: 10px;
    }

    p {
        font-size: 13px;
        font-family: 'Lexend Deca', sans-serif;
        color: #666;
        padding-top: 4px;
    }
    
    button {
        height: 69px;
        width: 69px;
        border-radius: 5px;
        border: none;
        background-color: ${props => props.isChecked};
    }
`

const Info = styled.div`
    font-size: 13px;
        font-family: 'Lexend Deca', sans-serif;
        color: ${props => props.isChecked};
        padding-top: 4px;
`
const Flex = styled.div`
display: flex;
`
const Button = styled.button`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    background: ${props => props.isCheck};
`;