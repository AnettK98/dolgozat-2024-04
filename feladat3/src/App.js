import React, {useState, useEffect} from 'react';
import Kutya from './Kutya';
import loading from './loading.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_colors.scss'

const App = () => {
    const [dogImgSrc, setDogImgSrc] = useState(loading);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(isLoading) {
            fetch('https://dog.ceo/api/breeds/image/random').then(response => {
                    return response.json();
                }
            ).then(json => {
                setIsLoading(false);
                setDogImgSrc(json.message);
            })
        }

    }, [isLoading]);

    const loadNext = () => {
        setIsLoading(true);
    }

    return (
        <Kutya imgSrc={isLoading ? loading : dogImgSrc} fetchNextDog={loadNext}/>
    );
};

export default App;