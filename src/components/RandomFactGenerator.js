import { useEffect, useState } from "react";

function RandomFactGenerator() {

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomfacts = [
        {
            text: "I am very bad at car driving",
            image: "https://media.giphy.com/media/1hzAAFIBjBQXyU6xBO/giphy.gif"
        },
        {
            text: "I am cultivating a blob at home",
            image: "https://media.giphy.com/media/zPY6KZiIf159jpqyr2/giphy.gif"
        },
        {
            text: "I love house music",
            image: "https://media.giphy.com/media/cO8O8IIGJmRvRm40tD/giphy-downsized-large.gif"
        },
        {
            text: "I prefer plants to pets",
            image: "https://media.giphy.com/media/1xONIE9kieqf4VTX50/giphy.gif"
        },
    ]
    
    useEffect = (() => {
        setNum(randomNumberInRange(0, 3));
        setText(randomfacts[num].text)
        setImage(randomfacts[num].image)
    }, [])

    const [num, setNum] = useState(0);
    const [text, setText] = useState(null);
    const [image, setImage] = useState(null);

    const handleClick = () => {
        setNum(randomNumberInRange(0, 3));
        setText(randomfacts[num].text)
        setImage(randomfacts[num].image)
    };

    return (
        <div id="randomFact">
            <div id="randomFactImage">
                <img src={image} alt={text}/>
            </div>
            <div id="randomFactText">
                {text} 
            </div>
            <button id="randomFactButton" class="secondary-button" onClick={() => handleClick()}> Generate </button>
        </div>
    )
}

export default RandomFactGenerator;