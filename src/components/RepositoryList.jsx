import {RepositoryItem} from "./RepositoryItem";
import '../styles/repository.scss';
import {useEffect, useState} from "react";

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then( res => res.json())
            .then( data => {
                setRepositories(data);
                console.log(data);
            });
    }, []);

    return(
        <section className="repository-list">
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}