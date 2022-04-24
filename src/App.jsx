import './styles/global.scss'
import {RepositoryList} from "./components/RepositoryList";
import {Counter} from "./components/Counter";

export function App(){
    return <>
        <h1>Hello World com atalho (script)!</h1>
        <RepositoryList/>
        <Counter/>
    </>


}