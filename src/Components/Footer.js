import styled from "styled-components"
import react, { useContext } from "react"
import UserContext from "../Contexts/UserContext"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function Footer() {

    const  { progress, habitosHoje } = useContext(UserContext)
    const percentage = ((progress / habitosHoje.length) * 100);

    function Send() {
        localStorage.setItem('progresso', progress)
    }

    return (
        <>
            <BarraBaixo>

                <Link to={'/Habitos'}>
                    <Habits>Hábitos</Habits>
                </Link>

                <Link to={'/Hoje'}>
                    <CircularProgressbar
                        onClick={Send()}
                        value={percentage}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            textSize: '23',
                        })}
                    />  </Link>

                <Link to={'/Historico'}>
                    <History>Histórico</History>
                </Link>
            </BarraBaixo>
        </>
    )
}

const BarraBaixo = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-around;

    svg {
        width: 91px;
    height: 91px;
    position: absolute;
    bottom: 15px;
    left: 145px;
    }

    a {
        width: 70px;
        text-decoration: none;
    }
`
const Habits = styled.p`
   padding-top: 22px;
   padding-right: 100px;
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #52B6FF;
`

const History = styled.p`
   padding-top: 22px;
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #52B6FF;
`