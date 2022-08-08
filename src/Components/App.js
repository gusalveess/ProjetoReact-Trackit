import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Habits from './Habits'
import Today from './Today'
import Historic from './Historic'
import UserContext from '../Contexts/UserContext'
import InfoContext from "../Contexts/InfoContext"




export default function App() {

    const [user, setUser] = useState({})
    const [token, setToken] = useState(null)
    const [habitosHoje, setHabitosHoje] = useState([])
    const [progress, setProgress] = useState('0')

    return (
        <InfoContext.Provider value={{token, setToken}}>
            <UserContext.Provider value={{ user, setUser, progress, setProgress, habitosHoje, setHabitosHoje}}>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<Login />} />
                        <Route path='/Cadastro' element={<SignUp />} />
                        <Route path='/Habitos' element={<Habits />} />
                        <Route path='/Hoje' element={<Today/>} />
                        <Route path='/Historico' element={<Historic />} />

                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </InfoContext.Provider>
    )
}