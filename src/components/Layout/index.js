import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import {Suggestion} from '../Suggestion'


export function Layout() {

    return (
        <>

            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className='storys' >
                        <Story />
                    </div>


                    <div className="posts" style={{margin: "30px 0"}} >
                        <Post fotoperfil='https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=2147483647&v=beta&t=OCAyyAl2Oaj5nbyvxltzVwjGHBg1RJlwI3zQlBZnvu4' nomeUser='instituto.proa' imgPost='https://i.ytimg.com/vi/jym116y-uGE/maxresdefault.jpg' like='500' legend='Se você quer ingressar na área da tecnologia, essa oportunidade é para você!'/>
                    </div>

                    <div className="posts" style={{margin: "30px 0"}} >
                        <Post fotoperfil='https://avatars.githubusercontent.com/u/8683385?s=280&v=4' nomeUser='cursoemvideo' imgPost='https://www.cursoemvideo.com/sucesso/wp-content/uploads/2019/06/thumb.jpg' like='902' legend='Aprender programação estimula a pensar de maneira mais criativa, desenvolve o raciocínio lógico. '/>
                    </div>

                    <div className="posts" style={{margin: "30px 0"}} >
                        <Post fotoperfil='https://i.pinimg.com/280x280_RS/d7/f4/1e/d7f41ecca3cdee30813ccf12558905b5.jpg' nomeUser='giotonello' imgPost='https://i.pinimg.com/originals/f1/db/4b/f1db4b0d992f99a99ae4a1f212d4c549.jpg' like='210' legend='Hoje trouxe 5 truques do figma para vocês, espero que gostem!😉'/>
                    </div>

                    <div className="posts" style={{margin: "30px 0"}} >
                        <Post fotoperfil='https://t.ctcdn.com.br/CgXYkXzLQvvhXTxTDLykz9ePGLI=/400x400/smart/filters:format(webp)/i490082.jpeg' nomeUser='nasa' imgPost='http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png' like='3.160.345' legend='...'/>
                    </div>
                    <div className="posts" style={{margin: "30px 0"}} >
                        <Post fotoperfil='https://yt3.ggpht.com/5lIBSV59ROWVjbz78VeNp3GoJPIrGfwSc0MVRSxBhUoVeKBuJw4JVyYz6fTooSW-CTdordQV8Q=s900-c-k-c0x00ffffff-no-rj' nomeUser='matheus.battisti' imgPost='https://www.horadecodar.com.br/wp-content/uploads/2021/07/Curso-de-Bootstrap-capa.png' like='560' legend='Curso de Bootstrap 5 completo!'/>
                    </div>
                    <div className="posts" style={{margin: "30px 0"}} >
                        <Post fotoperfil='https://yt3.ggpht.com/5lIBSV59ROWVjbz78VeNp3GoJPIrGfwSc0MVRSxBhUoVeKBuJw4JVyYz6fTooSW-CTdordQV8Q=s900-c-k-c0x00ffffff-no-rj' nomeUser='matheus.battisti' imgPost='https://i.ytimg.com/vi/ZeW8ZtodlVQ/maxresdefault.jpg' like='150' legend='Curso completo de React!'/>
                    </div>
                </div>

                <div className='Suggestion' style={{gridArea: 'secondColumn'}}>
                    < Suggestion />
                </div>
            </div>
            
        </>
    )

}
