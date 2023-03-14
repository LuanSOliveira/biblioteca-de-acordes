import { useContext } from 'react'
import { AppContext } from '../../context/context'
import styles from './BotaoTema.module.scss'
import { MdLightMode, MdModeNight } from "react-icons/md";

const BotaoTema = () => {
    const {tema, setTema} = useContext(AppContext)

    function MudarTema(){
        if(tema === 'light'){
            setTema('dark')
        }
        else{
            setTema('light')
        }
    }

    function Estilizar(){
        if(tema === 'light'){
            return styles.BotaoTema
        }
        else{
            return `${styles.BotaoTema} ${styles.TemaDark}`
        }
    }

    return(
        <button className={Estilizar()} onClick={MudarTema}>
            {(tema === 'light') ? <MdLightMode/> : <MdModeNight/>}
        </button>
    )
}

export default BotaoTema