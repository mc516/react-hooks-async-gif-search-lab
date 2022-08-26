import React from "react";

function GifSearch( {setSearch, handleSubmit} ) {

    function handleChange(e) {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Enter a Search Term:</label>
                <br></br>
                <input
                    id="search"
                    type="text"
                    onChange={handleChange}
                />
                <br></br>
                <button type="submit">Find Gifs</button>
            
            </form>
        </div>
    )
}

export default GifSearch