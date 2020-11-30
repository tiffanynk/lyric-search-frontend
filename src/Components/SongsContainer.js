import React from 'react';
import SearchResult from './SearchResult';

function SongsContainer({results}){
    const renderSearchResult = () => {
        return results.map(result => <SearchResult key={result.id} {...result}/>)
    }

    return(
        <ul className='result-list'>
            {renderSearchResult()}
        </ul>
    )
}

export default SongsContainer;