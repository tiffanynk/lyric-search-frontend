import React from 'react';
import SearchResult from './SearchResult';

function SongsContainer({results, addToFavorites}){
    const renderSearchResult = () => {
        return results.map(result => <SearchResult key={result.id} {...result} addToFavorites={addToFavorites} />)
    }

    return(
        <ul className='result-list'>
            {renderSearchResult()}
        </ul>
    )
}

export default SongsContainer;