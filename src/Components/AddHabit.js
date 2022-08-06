import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const dias = [];

function clickSeat(e) {

    if (dias.includes(e)) {
        dias.splice(dias.indexOf(e), 1)
    }
    else {
        dias.push(e)
    }
    console.log(dias)
}

export default function AddButton() {

    const [selected, setSelected] = useState(false);

    function like() {
        if (selected == true) {
            setSelected(false)
        } else {
            setSelected(true)
        }
    }

return (
    <>
        <Card>
            <Formulario>
                <form>

                    <input type="text" placeholder="nome do hábito" required />

                    <ContainerDays>

                        <Box onClick={() => like()}>
                        <div style={selected == true ? { backgroundColor: '#C4C4C4' } : { backgroundColor: '#fff' }} onClick={() => { clickSeat('7'); }}>D</div> 
                        </Box>

                        <Box onClick={() => like()}>
                        <div style={selected == true ? { backgroundColor: '#C4C4C4' } : { backgroundColor: '#fff' }} onClick={() => { clickSeat('1'); }}>S</div> 
                        </Box>


                        <div onClick={() => clickSeat('2')}>T</div>
                        <div onClick={() => clickSeat('3')}>Q</div>
                        <div onClick={() => clickSeat('4')}>Q</div>
                        <div onClick={() => clickSeat('5')}>S</div>
                        <div onClick={() => clickSeat('6')}>S</div>
                    </ContainerDays>

                    <ContainerButton>
                        <ButtonOne>Cancelar</ButtonOne>
                        <ButtonTwo>Salvar</ButtonTwo>
                    </ContainerButton>

                </form>
            </Formulario>
        </Card>
    </>
)

}

const Card = styled.div`
width: 340px;
height: 180px;
background-color: #fff;
border-radius: 5px;
border: 1px solid black;
`
const Formulario = styled.div`
display: flex;
justify-content: center;
align-items: center;

form {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
}

input {
    width: 303px;
    height: 45px;
    padding-left: 11px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    outline: none;
}
`
const ContainerDays = styled.div`
display: flex;
justify-content: space-around;
margin-top: 8px;

div {
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
}
`

const ContainerButton = styled.div`
display: flex;
margin-top: 25px;
margin-left: 120px;
box-sizing: border-box;
`
const ButtonOne = styled.button`
    border: none;
    background-color: #fff;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
`


const ButtonTwo = styled.button`
border: none;
height: 35px;
width: 84px;
margin-left: 19px;
border-radius: 4.63px;
background-color: #52B6FF;
color: #fff;
font-family: 'Lexend Deca', sans-serif;
font-size: 16px;
`
const Box = styled.div`
`