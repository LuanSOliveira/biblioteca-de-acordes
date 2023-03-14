import BoxBotoes from "./components/BoxBotoes/BoxBotoes"
import Cabecalho from "./components/Cabecalho/Cabecalho"
import { useContext } from 'react'
import { AppContext } from "./context/context"
import styles from './App.module.scss'
import BoxCasas from "./components/BoxCasas/BoxCasas"

function App() {

  const {tema} = useContext(AppContext)

  function Estilizar(){
    if(tema === 'dark'){
      return styles.AppStyleDark
    }
  }

  return (
    <div className={Estilizar()}>
      <Cabecalho/>
      <BoxBotoes/>
      <BoxCasas/>
    </div>
  )
}

export default App
