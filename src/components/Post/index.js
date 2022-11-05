import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post(prop) {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src={prop.fotoperfil} />
                    <p>{prop.nomeUser}</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
            <img src={prop.imgPost} />
            </div>

            

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>{prop.like} Curtidas</span>
                </section>
                

                <div className="legend" >
                    <p>
                        <span>{prop.nomeUser}</span> {prop.legend}
                    </p>
                </div>

                <div className="time-post" >
                  <p>
                  <time>{prop.tempo}</time>
                  </p>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >
                   
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>
                    

                  



                    







                </div>
            </div>
        </>

        

    )
}

