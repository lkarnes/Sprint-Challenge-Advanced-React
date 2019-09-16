import {useLocalStorage} from './useLocalStorage.js';
import {useEffect} from 'react';

export const useDarkMode = (key, intVal) => {
    const [value, setValue] = useLocalStorage(key, intVal)
    useEffect(()=> {
        const body = document.querySelector('body')
        value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [value]);

    return [value, setValue]
}