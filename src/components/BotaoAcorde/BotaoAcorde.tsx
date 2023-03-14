import { AppContext } from '../../context/context'
import { useContext } from 'react'
import styles from './BotaoAcorde.module.scss'
import { IAcordes } from '../../listas/Listas';

interface IBotaoProps{
    acorde: string;
    lista: IAcordes[]
}

const BotaoAcorde = ({acorde, lista}:IBotaoProps) => {
    const {tema, setListaDeAcordes, setAcordeSelecionado} = useContext(AppContext)

    function Estilizar(){
        if(tema === 'light'){
            return styles.BotaoAcorde
        }
        else{
            return `${styles.BotaoAcorde} ${styles.BotaoAcordeDark}`
        }
    }

    function AtualizaListaAcordes(){
        setListaDeAcordes(lista)
        setAcordeSelecionado(lista[0])
    }

    return(
        <button className={Estilizar()} onClick={AtualizaListaAcordes}>
            {acorde}
        </button>
    )
}

export default BotaoAcorde