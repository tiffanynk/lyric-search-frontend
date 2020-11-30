import React from 'react';

function SearchResult({title, artist, album}) {

    return (
        <div className='result-card'>
            <h3>{artist.name}</h3>
            <p>{title}</p>
            <img src={album.cover_small} alt='album-cover'/>
            <button className='lyrics-button'>Get Lyrics</button>
        </div>
    )
}

export default SearchResult;