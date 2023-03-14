import { useContext } from 'react'
import { AppContext } from '../../context/context'
import styles from './Notas.module.scss'

interface INotas{
    id: number;
}

const Notas = ({id}:INotas) => {
    const {tema, acordeSelecionado} = useContext(AppContext)

    const acorde: string = acordeSelecionado.nome
    const notaP: number = acordeSelecionado.notas.p
    const notaS: number = acordeSelecionado.notas.s
    const notaT: number = acordeSelecionado.notas.t
    const notaQ: number = acordeSelecionado.notas.q
    const pestana: number[] = acordeSelecionado.notas.pestana

    function Estilizar(){
        if(tema === 'light'){
            return styles.Notas
        }
        else{
            return `${styles.Notas} ${styles.NotasDark}`
        }
    }

    function EstilizarSelecao(){
        if(tema === 'light'){
            return `${styles.Notas} ${styles.Selecionada}`
        }
        else{
            return `${styles.Notas} ${styles.SelecionadaDark}`
        }
    }

    return(
        <>
            {
                (acorde === '') && <div className={Estilizar()}></div>
            }
            {
                (acorde !== '' && notaP !== id  && notaS !== id && notaT !== id && notaQ !== id && !pestana.includes(id)) && <div className={Estilizar()}></div>
            }
            {
                (acorde !== '' && pestana.includes(id)) && <div className={EstilizarSelecao()}></div>
            }
            {
                (acorde !== '' && notaP === id) && <div className={EstilizarSelecao()}>1</div>
            }
            {
                (acorde !== '' && notaS === id) && <div className={EstilizarSelecao()}>2</div>
            }
            {
                (acorde !== '' && notaT === id) && <div className={EstilizarSelecao()}>3</div>
            }
            {
                (acorde !== '' && notaQ === id) && <div className={EstilizarSelecao()}>4</div>
            }
        </>
    )
}

export default Notas