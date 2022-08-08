import react, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import logo from '../Assets/Imgs/logo.svg'
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios"
import { useContext } from "react"
import UserContext from "../Contexts/UserContext"
import InfoContext from "../Contexts/InfoContext"
export default function Login() {

    const Navigate = useNavigate()
    const [login, setLogin] = useState("Entrar")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)

    const {user} = useContext(UserContext);
    const {setUser} = useContext(UserContext);
    const {setToken} = useContext(InfoContext);


    function erros(error) {

        console.log(error.response.status);
      
        if (error.response.status === 401) {
          alert("Não foi encontrado usuário!");
          setLogin("Entrar")
          setDisabled(false)
        }
      }

    function Post() {

        const body = {
            email: email,
            password: password
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        promise.then((res) => {Navigate('/habitos'); setUser(localStorage.setItem('image', res.data.image)); setToken(localStorage.setItem('trackit',res.data.token))})
        promise.catch(erros)
    }

    function handleForm(e) {
        e.preventDefault()
        Post()
        setDisabled(true)
        setLogin(<ThreeDots color="#FFFFFF" height={13} width={51} />)
        setTimeout(() => {
            document.location.reload(true)
        }, 1500);
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

                        <Button>{login}</Button>
                    </form>
                </Formulario>

                <Info>
                    <Link to="/cadastro">
                        <p>Não tem uma conta? Cadastre-se!</p>
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
    display: flex;
    flex-direction: column;
}

input {
    margin-top: 6px;
    margin-left: 17px;
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
  margin-left: 17px;
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