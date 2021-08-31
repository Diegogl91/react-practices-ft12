import React, { useEffect } from 'react';

const ComponentA = () => {

    useEffect(() => {
        // componentDidMount
        console.log('componente cargado...')
        
        return () => {
            // componentWillUnmount
            console.log('componente eliminado...')
            saludo();
        }

    }, [])

    const saludo = () => alert("Adios");

    return (
        <h1>Component A</h1>
    )
}

export default ComponentA;