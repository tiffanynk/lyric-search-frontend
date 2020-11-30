import React from 'react';

function SearchResult({title, artist, album, addToFavorites}) {
    const handleClick = (id) => {
        console.log('song id', id)
        addToFavorites()
    }

    return (
        <div className='result-card'>
            <h3>{artist.name}</h3>
            <p>{title}</p>
            <img src={album.cover_small} alt='album-cover'/>
            <button className='favorite-button' onClick={handleClick}>❤️</button>
            <button className='lyrics-button'>Get Lyrics</button>
        </div>
    )
}

export default SearchResult;