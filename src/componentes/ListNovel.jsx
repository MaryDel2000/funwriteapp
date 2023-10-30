import React from "react";
import listNovels from "../data/listNovels.json";
import Novels from "./Novels";

function ListadeNovelas(){
    return (
        <div className="row">
            {
                listNovels.map((e, index)=>(
                    <Novels
                        key={e.IDNovel}
                        sinopsis={e.Sinopsis}
                        titulo={e.Titulo}
                        genero={e.Genero}
                        autor={e.Autor}
                           />
                ))
            }
        </div>
        );
}


export default ListadeNovelas;