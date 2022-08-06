import axios from "axios";
import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner'

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

const listDays = [
    {
      id:'7',
      dia: 'D',
      isSelected:false
    },{
        id:'1',
        dia: 'S',
        isSelected:false
      },
    {
        id:'2',
        dia: 'T',
        isSelected:false
      },
      {
        id:'3',
        dia: 'Q',
        isSelected:false
      },
      {
        id:'4',
        dia: 'Q',
        isSelected:false
      },
      {
        id:'5',
        dia: 'S',
        isSelected:false
      },
      {
        id:'6',
        dia: 'S',
        isSelected:false
      },
]

function MenuDays(props) {

    const [selected, setSelected] = useState(false);
    

    function Change() {
        if (selected == true) {
            setSelected(false)
        } else {
            setSelected(true)
        }
    }

    return(
        <>
        <Box onClick={() => Change()}>
               <div style={selected == true ? { backgroundColor: '#C4C4C4', color:'#fff' } : { backgroundColor: '#fff' }} onClick={() => { clickSeat(props.id); }}>{props.dia}</div> 
        </Box>       
        </>
    )
}

export default function AddButton() {

    const [habito, setHabito] = useState('')
    const [save, setSave] = useState('Salvar')
    const [disabled, setDisabled] = useState(false)
    


    const get = localStorage.getItem('trackit')
    const string = JSON.stringify(get)
    const auth = JSON.parse(string)

    

    function Esconder() {
        document.location.reload(true);
    }

    function Post() {

        const body = {
            name: habito,
            days: dias
        }

        const config = {
            headers: {
              'Authorization': `Bearer ${auth}`
            }
         }

        const send = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        
    }

      function handleForm(e) {
        e.preventDefault()
         Post()
         setDisabled(true)
         setSave(<ThreeDots color="#FFFFFF" height={13} width={51} />)
        setTimeout(() => {
            document.location.reload(true)
        }, 2000);
     }

    return (
        <>
            <Card>
                <Formulario>
                    <form onSubmit={handleForm}>

                        <input type="text" value={habito} onChange={(e) => setHabito(e.target.value)} placeholder="nome do hábito" required />

                        <ContainerDays>
                            {listDays.map((item, index) => <MenuDays key={index} id={item.id} dia={item.dia}/>)}
                        </ContainerDays>

                        <ContainerButton>
                            <Cancel onClick={() => Esconder()}>Cancelar</Cancel>
                            <ButtonTwo>{save}</ButtonTwo>
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
    transition: all ease-in-out 0.2s;
}
`

const ContainerButton = styled.div`
display: flex;
margin-top: 25px;
margin-left: 120px;
box-sizing: border-box;
`
const Cancel = styled.a`
    border: none;
    background-color: #fff;
    color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    padding-top: 10px;
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