import Header from "./Header"
import styled from 'styled-components'
import Footer from "./Footer"

export default function Historic() {

    return(
        <>
        <Header />
            <Container>
                <MenuHistory>
                    <h1>Histórico</h1>
                    <p>Em breve você poderá ver o histórico <br />
                    dos seus hábitos aqui!</p>
                </MenuHistory>
            </Container>
        <Footer />
        </>
    )

}

const Container = styled.div`
    background-color: #E5E5E5;
   height: 110vh;
    width: 100%;
`

const MenuHistory = styled.div`
padding-top: 98px;
padding-left: 17px;

h1 {
    font-size: 23px;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
}

p{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    padding-top: 17px;
    color: #666;
}
`