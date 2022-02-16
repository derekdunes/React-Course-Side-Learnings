import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

    useEffect(() => {
        function handleResize() {
            const windowSize = getWindowDimensions();
            setWindowDimensions(windowSize);

            const { width, height} = windowSize;

            //console.log('The screen width is ' + width);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;