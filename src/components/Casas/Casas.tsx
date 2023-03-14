import { useContext } from 'react'
import { AppContext } from '../../context/context'
import Notas from '../Notas/Notas'
import styles from './Casas.module.scss'

interface ICasas {
    numeroCasa: string;
    notas: number[]
}

const Casas = ({numeroCasa, notas}:ICasas) => {
    const {tema, acordeSelecionado} = useContext(AppContext)

    function Estilizar(){
        if(tema === 'light'){
            return styles.Casas
        }
        else{
            return `${styles.Casas} ${styles.CasasDark}`
        }
    }

    function CalculaCasa(){
        const valorCalculado: number = acordeSelecionado.notas.casa + (parseInt(numeroCasa) -1)

        if(valorCalculado < 10){
            return valorCalculado
        }
        else{
            return '0'
        }
    }

    return(
        <div className={Estilizar()}>
            {
                (acordeSelecionado.notas.casa === 0) 
                    ? <h2>{`${numeroCasa}ª`}</h2>
                    : <h2>{`${CalculaCasa()}ª`}</h2>
            }            
            <div className={styles.CasaLinha}>
                <Notas id={notas[5]}/>
            </div>
            <div className={styles.CasaLinha}>
                <Notas id={notas[4]}/>
            </div>
            <div className={styles.CasaLinha}>
                <Notas id={notas[3]}/>
            </div>
            <div className={styles.CasaLinha}>
                <Notas id={notas[2]}/>
            </div>
            <div className={styles.CasaLinha}>
                <Notas id={notas[1]}/>
            </div>
            <Notas id={notas[0]}/>
        </div>
    )
}

export default Casas