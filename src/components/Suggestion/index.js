import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/vitoriacarolsa/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])
    
    

    return (
        <div className="container-suggestions">
            <div className="header-suggestions" >
                <img className='img-perfil' src={`https://github.com/vitoriacarolsa.png`} />

                <div className="user-infos-suggestions" >

                    <div className="infos" >
                        <span>vitoria_snts77</span>
                        <p>Vitória Caroline</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestions" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestions" >

                {slice.map((suggestions, key) => (
                     <div className="infos-suggestions" key={key}>
                        <img src={`https://github.com/${suggestions.login}.png`} />
    
                        <div className="info-suggestions" >
                            <span>{suggestions.login}</span>
                            <p>Sugestões para você</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                ))}
               

            </div>

            <footer className="footer-suggestions" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM </p>

            </footer>
        </div>
    )
}