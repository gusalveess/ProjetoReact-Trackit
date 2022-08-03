import react, { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import logo from '../Assets/Imgs/logo.svg'
import { ThreeDots } from 'react-loader-spinner'

export default function SignUp() {

    const [signup, setSignup] = useState("Cadastrar")
    const [inputOne, setInputOne] = useState(<input type="email" name="email" placeholder="email" pattern=".+@gmail.com" required />)
    const [inputTwo, setInputTwo] = useState(<input type="password" name="password" placeholder="senha" minLength="4" required />)
    const [inputThree, setInputThree] = useState(<input type="text" name="name" placeholder="nome" required />)
    const [inputFour, setInputFour] = useState(<input type="text" name="picture" placeholder="foto" required />
    )

    function handleForm(e) {
        e.preventDefault()
        
        try {
            setSignup(<ThreeDots color="#FFFFFF" height={13} width={51} />)

            setInputOne(<input type="email" name="email" placeholder="email" pattern=".+@gmail.com" disabled />)

            setInputTwo(<input type="password" name="password" placeholder="senha" minLength="4" disabled/>)

            setInputThree(<input type="text" name="name" placeholder="nome" disabled />)

            setInputFour(<input type="text" name="picture" placeholder="foto" disabled />)
            } catch (error) {
                alert("deu ruim")
            }
    }

    return (
        <>
            <Container>

                <Imagem>
                    <img src={logo} />
                </Imagem>

                <Formulario>
                    <form onSubmit={handleForm}>
                        {inputOne}
                        {inputTwo}
                        {inputThree}
                        {inputFour}
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