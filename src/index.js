import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cartao from './Cartao'
import Usuario from './Usuario'
import Feedback from './Feedback'

const App = () => {
    const componenteFeedback = <Feedback funcaoAprovado={() => alert('Você aprovou este comentário')} funcaoReprovado={() => alert('Você reprovou este comentario')}/>
    return (
        <div className="container border mt-2">
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Comentários</h1>
            </div>

            {/*primeiro comentário*/}
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao data="16/08/2021" hora="16:32">
                        <Usuario icone="fas fa-user-circle fa-4x" nome="José da Silva" comentario="A segunda temporada da série Outer Banks da Netflix está melhor do que a primeira!"/>
                        {componenteFeedback}
                    </Cartao>                    
                </div>
            </div>

            {/*segundo comentário*/}
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao data="03/08/2021" hora="09:43">
                        <Usuario icone="fas fa-user-circle fa-4x" nome="Maria do Carmo" comentario="Mais alguém ansioso para a estreia da segunda temporada de ControlZ amanhã?"/>
                        {componenteFeedback}
                    </Cartao>                    
                </div>
            </div>

            {/*terceiro comentário*/}
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao data="14/08/2021" hora="17:29">
                        <Usuario icone="fas fa-user-circle fa-4x" nome="Júlia Carvalho" comentario="Odiei o final de Barraca do Beijo 3!"/>
                        {componenteFeedback}
                    </Cartao>                    
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)