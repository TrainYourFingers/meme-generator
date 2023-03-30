import React from "react"

function Navbar(){
    return(
        <div className="header">
            <div className="holder bg-gradient-to-r from-purple-900 bg-fuchsia-900 w-full h-20 text-white flex place-items-center justify-between px-10">
                <h1 className="font-extrabold text-3xl">Meme Generator</h1>
                <h1 className="font-thin">React Course - Project 3</h1>
            </div>
        </div>
    )
}

export default Navbar