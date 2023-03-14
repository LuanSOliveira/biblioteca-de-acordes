import Casas from '../Casas/Casas'
import styles from './BoxCasas.module.scss'

const BoxCasas = () => {
    return(
        <section className={styles.BoxCasas}>
            <div>
                <Casas numeroCasa='1' notas={[11,21,31,41,51,61]}/>
                <Casas numeroCasa='2' notas={[12,22,32,42,52,62]}/>
                <Casas numeroCasa='3' notas={[13,23,33,43,53,63]}/>
                <Casas numeroCasa='4' notas={[14,24,34,44,54,64]}/>
                <Casas numeroCasa='5' notas={[15,25,35,45,55,65]}/>
            </div>
        </section>
    )
}

export default BoxCasas