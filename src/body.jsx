import React from "react"
import memesInfo from "./data/memesData"

function Body(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }) 

    const [allMemeData, setAllMemeData] = React.useState(memesInfo)

        function handleChange(event){
            const {name, value} = event.target
                setMeme(prevMeme => ({
                    ...prevMeme,
                    [name]: value
                }))   
        }

        function handleClick(){
            const memesArray = allMemeData.data.memes
            const randomValue = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomValue].url

            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))
        }

    return(
        <div className="body p-10 w-full max-w-3xl mx-auto">
            <div className="inputContainer flex justify-between">
                <input 
                    className="p-2 w-1/2 mr-2 rounded-md border-2 border-gray-400" 
                    type="text" 
                    placeholder="Enter Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="p-2 w-1/2 ml-2 rounded-md border-2 border-gray-400" 
                    type="text" 
                    placeholder="Enter Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
                />
            </div>
            <button onClick={handleClick} className="text-center py-2 rounded-md text-white my-4 w-full bg-gradient-to-r from-purple-900
                     bg-fuchsia-900 hover:bg-purple-900 hover:from-fuchsia-900 duration-1000">Get A New Meme Image</button>
            <div className="imageContainer relative">
                <div className="absolute top-0 w-full">
                    <h1 className="text-center text-white text-3xl font-extrabold font-serif">{meme.topText}</h1>
                </div>
                <div className="absolute bottom-0 w-full">
                    <h1 className="text-center text-white text-3xl font-extrabold font-serif">{meme.bottomText}</h1>
                </div>
                <img src={meme.randomImage} width="100%"/>
            </div>
        </div>
        
    )
}

export default Body