import { AppContext } from '../../context/context'
import styles from './Cabecalho.module.scss'
import { useContext } from 'react'

const Cabecalho = () => {
    const {tema} = useContext(AppContext)

    function Estilizar(){
        if(tema === 'light'){
            return styles.Cabecalho
        }
        else{
            return `${styles.Cabecalho} ${styles.CabecalhoDark}`
        }
    }
    return(
        <header className={Estilizar()}>
            <h1>Biblioteca de Acordes</h1>
        </header>
    )
}

export default Cabecalho