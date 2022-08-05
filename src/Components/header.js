import styled from "styled-components"

const pegarImg = localStorage.getItem('image')
const modify = JSON.stringify(pegarImg)
const change = JSON.parse(modify)

export default function Header() {
    return(
        <>
             <BarraFixa>
                    <p>TrackIt</p>
                    <img src={change} />
                </BarraFixa>
        </>
    )
}

const BarraFixa = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: #126BA5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    p {
        font-family: 'Playball';
        font-size: 39px;
        color: #FFF;
    }

    img {
        width: 51px;
        height: 51px;
        border: 1px solid #fff;
        border-radius: 98.5px;
    }
`