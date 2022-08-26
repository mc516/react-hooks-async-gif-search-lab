import React from "react";

function GifList( {gifData} ) {
    const gifsToDisplay = gifData.slice(0,3)

    return (
        <ul>
            {gifsToDisplay.map(gif => {
                return <li><img key={gif.images.original.url}src={gif.images.original.url}/></li>
            })}
        </ul>
    )
}

export default GifList