import react, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import logo from '../Assets/Imgs/logo.svg'
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios"

export default function SignUp() {

    const navigate = useNavigate()
    const [signup, setSignup] = useState("Cadastrar")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [disabled, setDisabled] = useState(false)

    function erros(error) {

        console.log(error.response.status);
      
        if (error.response.status === 409) {
          alert("Já existe alguém com  esse cadastro!");
          setSignup("Entrar")
          setDisabled(false)
        }
      }

    function Post() {
       const body = {
            email: email,
            name: name,
            image: picture,
            password: password
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)

        promise.then(() => 
        navigate('/')
        )
    }

    function handleForm(e) {
        e.preventDefault()
        setSignup(<ThreeDots color="#FFFFFF" height={13} width={51} />)
        setDisabled(true)
        Post()
    }

    return (
        <>
            <Container>

                <Imagem>
                    <img src={logo} />
                </Imagem>

                <Formulario>
                    <form onSubmit={handleForm}>

                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" pattern=".+@gmail.com" required disabled={disabled}/>

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" minLength="4" disabled={disabled} />

                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="nome" required />
                        
                    <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} name="picture" placeholder="foto" required />

                        <Button>{signup}</Button>
                    </form>
                </Formulario>

                <Info>
                    <Link to="/">
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </Info>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Imagem = styled.div`
margin-top: 68px;
`
const Formulario = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

form {
    margin-top: 32px;
}

input {
    margin-top: 6px;
    margin-left: 27px;
    width: 303px;
    height: 45px;
    outline-color: black;
    padding-left: 11px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
}
`
const Button = styled.button`
  width: 318px;
  height: 45px;
  background-color: #52B6FF;
  border: none;
  border-radius: 5px;
  margin-top: 6px;
  margin-left: 27px;
  color: #fff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Info = styled.div`
  margin-top: 25px;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
  font-weight: 400;

  a {
    color: #52B6FF;
  }
`