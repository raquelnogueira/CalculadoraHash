import React from 'react';

export const P = props => {
    // const { repos } = props;
    // if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    // return (

    //     <div>
    //         <h2 className='head'>Resultados</h2>
    //         {repos.map((respo) => {
    //             // return (
    //                 <p>{respo.id}<strong>{respo.name}</strong></p>
    //             // )
                    
    //         })}
    //     </div>
    // )

    const { repos } = props;
    if (!repos || repos.length === 0) return <p>Sem um resultado</p>;
    return (
      <ul>
        <h2 className='list-head'>VOCÊ RECEBERÁ</h2>
        {repos.map((repo) => {
          return (
            <li key={repo.id} className='list'>
              <p>{repo.id}<strong>{repo.name}</strong></p>
            </li>
          );
        })}
      </ul>
    );

}