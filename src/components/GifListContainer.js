import React, { useState,useEffect } from "react";
import GifSearch from "./GifSearch"
import GifList from "./GifList"

function GifListContainer() {
    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=QQflmgbQ8nEwEaC1QkR94tDblWqI8uRC`)
        .then(res => res.json())
        .then(data => setGifs(data.data))
    }, [])

    function handleSearch(e) {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=QQflmgbQ8nEwEaC1QkR94tDblWqI8uRC`)
        .then(res => res.json())
        .then(data => setGifs(data.data))
    }

    return (
        <div>
            {<GifList gifData={gifs}/>}
            {<GifSearch setSearch={setSearch} handleSubmit={handleSearch}/>}
        </div>
    )
}

export default GifListContainer