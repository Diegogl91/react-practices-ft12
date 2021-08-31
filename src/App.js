import React, { useEffect, useState } from 'react';

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

const App = () => {

    const [nombre, setNombre] = useState("");
    const [ver, setVer] = useState(false);

    useEffect(() => {
        // componentDidMount

        return () => {
            // componentWillUnmount



        }

    }, [])

    return (
        <>
            <h1>Hola Mundo</h1>
            <input type="text" onChange={(e) => setNombre(e.target.value)}/><br/>
            <label>{nombre}</label><br/>
            <button className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download
            </button><br/>

            <button onClick={() => setVer(!ver)} className="btn btn-warning">
                Ver component A
            </button><br/>

            {
                ver ? (
                    <ComponentA />
                ):(
                    <h4>Sin Datos</h4>
                )
            }
        </>
    )
}

export default App;