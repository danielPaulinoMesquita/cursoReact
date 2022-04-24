import {RepositoryItem} from "./RepositoryItem";

const repository =  {
    repository: "Testando",
    description:"Forms in React",
    link:"https://www.google.com.br",
};

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h2>Lista de repositórios </h2>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem/>
                <RepositoryItem />
            </ul>
        </section>
    )
}