import { useContext } from "react"
import { Buttons } from "../../components/Buttons"
import { Container } from "../../components/Container"
import { MainHome } from "../../components/MainHome"
import { AuthProvider } from "../../context/AuthContext"

const citys = [
    { 'name': 'Sorocaba-SP', 'url': 'https://www.google.com.br/maps/place/Sorocaba,+SP/@-23.4772332,-47.5367396,12z/data=!3m1!4b1!4m5!3m4!1s0x94c5f54bcad87989:0x4a9099fb9d10cb8e!8m2!3d-23.4709096!4d-47.4851438' },
    { 'name': 'Florianopolis-SC', 'url': 'https://www.google.com.br/maps/place/Florian%C3%B3polis,+SC/@-27.5707056,-48.7504627,10z/data=!3m1!4b1!4m5!3m4!1s0x9527394eb2c632d7:0x81bc550b6a04c746!8m2!3d-27.5948036!4d-48.5569286' },
    { 'name': 'Campinas-SP', 'url': 'https://www.google.com.br/maps/place/Campinas,+SP/@-22.8920565,-47.2079787,11z/data=!3m1!4b1!4m5!3m4!1s0x94c8c61de74b6325:0x17e53a6a2178c22a!8m2!3d-22.9099384!4d-47.0626332' }]

const Home = () => {

    const pesquisarCidade = (ele: any) => {
        for (let i = 0; i < citys.length; i++) {
            if (citys[i].name === ele) {
                const city = citys[i].url
                window.location.href = city
            }
        }
    }

    let procura = ''

    function search() {
        const dados = citys.filter(ele => ele.name === procura)
        console.log(dados)
    }

    return (
        <MainHome>
            <Container>

                <div>
                    <input type='text' onChange={(event) => console.log(event.target.value)}></input>
                    <Buttons onClick={() => search()} >Pesquisar</Buttons>
                </div>
                <div>
                    <h1>Cidades Existentes</h1>
                    <ul>
                        {
                            citys.map(ele => <li>
                                {ele.name}
                                <Buttons onClick={() => pesquisarCidade(ele.name)}>Pesquisar </Buttons>
                            </li>)
                        }

                    </ul>
                </div>
            </Container>
        </MainHome>
    )
}

export default Home