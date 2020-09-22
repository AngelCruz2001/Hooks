import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error: null });
    const isMounted = useRef(true);
    useEffect(() => {
        return (() => {
            isMounted.current = false;
        });
    }, [])
    useEffect(() => {
        if (isMounted.current) {

            setState({ data: null, loading: true, error: null })
            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    setState({
                        data: data,
                        loading: false,
                        error: null,
                    })
                })
        } else {
            console.log('Hola')
        }
    }, [url])

    return state;
}
