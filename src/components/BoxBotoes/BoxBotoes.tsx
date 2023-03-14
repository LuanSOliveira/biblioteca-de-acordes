import { AppContext } from '../../context/context'
import { useContext } from 'react'
import { acordeA, acordeB, acordeC, acordeD, acordeE, acordeF, acordeG } from '../../listas/Listas'
import BotaoAcorde from '../BotaoAcorde/BotaoAcorde'
import BotaoTema from '../BotaoTema/BotaoTema'
import styles from './BoxBotoes.module.scss'

const BoxBotoes = () => {
    const {listaDeAcordes, acordeSelecionado, setAcordeSelecionado} = useContext(AppContext)

    function SelecionaAcorde(valor:string){
        listaDeAcordes.map(
            (acorde) => {
                if(acorde.nome === valor){
                    setAcordeSelecionado(acorde)
                }
            }
        )
    }
    
    return(
        <section className={styles.BoxBotoes}>
            <div className={styles.Container}>
                <div className={styles.Tema}>
                    <BotaoTema/>
                </div>
                <div className={styles.Acordes}>
                    <BotaoAcorde acorde='C' lista={acordeC}/>
                    <BotaoAcorde acorde='D' lista={acordeD}/>
                    <BotaoAcorde acorde='E' lista={acordeE}/>
                    <BotaoAcorde acorde='F' lista={acordeF}/>
                    <BotaoAcorde acorde='G' lista={acordeG}/>
                    <BotaoAcorde acorde='A' lista={acordeA}/>
                    <BotaoAcorde acorde='B' lista={acordeB}/>
                </div>
                <select className={styles.BoxSelecao} onChange={(e) => SelecionaAcorde(e.target.value)}>
                    {
                        (listaDeAcordes[0].nome) && listaDeAcordes.map(
                            (acorde) => <option key={acorde.nome} value={acorde.nome}>{acorde.nome}</option>
                        )
                    }
                </select>
            </div>
        </section>
    )
}

export default BoxBotoes