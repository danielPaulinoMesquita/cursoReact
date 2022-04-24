import {RepositoryItem} from "./RepositoryItem";
import '../styles/repository.scss';
import {useEffect, useState} from "react";

type RepositoryType = {
    name:string,
    description: string,
    html_url: string
}
export function RepositoryList(){
    const [repositories, setRepositories] = useState<RepositoryType[]>([]);

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
                {repositories.map(rep => {
                    return <RepositoryItem key={rep.name} repository={rep}/>
                })}
            </ul>
        </section>
    )
}