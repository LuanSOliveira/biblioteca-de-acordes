import { createContext, ReactNode, useState } from "react";
import { IAcordes } from "../listas/Listas";

type Temas = 'light' | 'dark';

//Interface criada para definir os tipos de cada State que será criado.
interface IContext{
    tema: Temas;
    setTema: (tema: Temas) => void;
    listaDeAcordes: IAcordes[];
    setListaDeAcordes: (listaDeAcordes: IAcordes[]) => void;
    acordeSelecionado: IAcordes;
    setAcordeSelecionado: (acordeSelecionado: IAcordes) => void
}

//Objeto criado para definir o valor inicial dos States que fazem parte da context.
const initialState: IContext = {
    tema: 'light',
    setTema: () => {},
    listaDeAcordes: [],
    setListaDeAcordes: () => {},
    acordeSelecionado: {nome: '', notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 0, t: 0, q: 0}},
    setAcordeSelecionado: () => {}
}

//Interface criada para definir o tipo da Props do componente "AppProvider".
interface AppProviderProps {
    children: ReactNode
}

//Para criar uma context em Typescript é necessário informar um objeto contendo os valores iniciais dos States que serão utilizados.
//Também é necessário tipar o contexto para cada um dos States informados, desta forma utilizamos um Generico atribuindo a interface "IContext"
export const AppContext = createContext<IContext>(initialState)

const AppProvider = ({children}:AppProviderProps) => {
    const [tema, setTema] = useState<Temas>('light')
    const [listaDeAcordes, setListaDeAcordes] = useState([{nome: '', notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 0, t: 0, q: 0}}])
    const [acordeSelecionado, setAcordeSelecionado] = useState({nome: '', notas: {casa: 0, pestana: [0,0,0,0,0,0], p: 0, s: 0, t: 0, q: 0}})

    return(
        <AppContext.Provider 
            value={
                {
                    tema, setTema,
                    listaDeAcordes, setListaDeAcordes,
                    acordeSelecionado, setAcordeSelecionado
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider