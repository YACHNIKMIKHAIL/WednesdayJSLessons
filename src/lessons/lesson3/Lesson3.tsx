import React, {useState} from 'react';
import API from './API';
import './lesson_3';


type ResultType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}
const Lesson3 = () => {
    const [searchName, setSearchName] = useState<string>('');
    const [serachResult, setSearchResult] = useState<Array<ResultType>>([]);
    const [searchNameByType, setSearchNameByType] = useState<string>('');
    const [serachResultByType, setSerachResultByType] = useState<Array<ResultType>>([]);
    const [error,setError]=useState<boolean>(false)

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(res => {
                if(!res.Response) {
                    console.log(res.Search)
                    setSearchResult([...res.Search])
                }else{
                    setError(true)
                }
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(res=>{
                if(!res.Response) {
                    setSerachResultByType([...res.Search])
                    console.log(res)
                }else {
                    setError(true)
                }
            })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {error?<div>Incorrect name</div>:''}
                    {serachResult.map(m => {
                        // debugger
                        return <div key={m.imdbID}>
                            <div style={{display:'flex',justifyContent:'space-between',width:'300px',margin:'0 0 20px 0'}}>
                                <div>{m.Title}</div><div>{m.Year}</div></div>
                            <img src={m.Poster} alt="poster"/>
                        </div>
                    })}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {error?<div>Incorrect type</div>:''}
                    {serachResultByType.map(m => {
                        debugger
                        return <div key={m.imdbID}>
                            <div style={{display:'flex',justifyContent:'space-between',width:'300px',margin:'0 0 20px 0'}}>
                                <div>{m.Title}</div><div>{m.Year}</div></div>
                            <img src={m.Poster} alt="poster"/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;