import GlobalStyle from "./GlobalStyle"
import ScreenLogin from "./ScreenLogin"
import ScreenCadastro from "./ScreenCadastro"
import ScreenHabitos from "./ScreenHabitos"
import ScreenHoje from "./ScreenHoje"
import ScreenHistorico from "./ScreenHistorico"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./auth"

export default function App() {
    return (
        <>
            <AuthProvider>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ScreenLogin />} />
                        <Route path="/cadastro" element={<ScreenCadastro />} />
                        <Route path="/habitos" element={<ScreenHabitos />} />
                        <Route path="/hoje" element={<ScreenHoje />} />
                        <Route path="/historico" element={<ScreenHistorico />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}
