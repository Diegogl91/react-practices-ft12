import React, { useEffect, useState } from 'react';
import ComponentA from './components/ComponentA';
import LoginForm from './components/LoginForm';


const App = () => {

    const [nombre, setNombre] = useState("");
    const [ver, setVer] = useState(false);

    const [credenciales, setCredenciales] = useState({
        username: '',
        password: '',
        name: '',
    });

    useEffect(() => {
        // componentDidMount

        return () => {
            // componentWillUnmount


        }

    }, [])

    const handleSubmit = e => {
        e.preventDefault();
    }

    let key = 'name';

    let person = {
        name: '',
        lastname: ''
    };

    person[key] = 'Luis';

    const handleChange = e => {
        const { name, value } = e.target;

        setCredenciales((prevState) => {
            return { ...prevState, [name]: value }
        })
    }


    /*

    setCredenciales({
        ...credenciales,
        username: e.target.value
    })

    setCredenciales({
        ...credenciales,
        password: e.target.value
    })

    */

    return (
        <>
            <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} credenciales={credenciales} setCredenciales={setCredenciales} />
            <h1>Hola Mundo</h1>
            <input type="text" onChange={(e) => setNombre(e.target.value)} /><br />
            <label>{nombre}</label><br />
            <button className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download
            </button><br />

            <button onClick={() => setVer(!ver)} className="btn btn-warning">
                Ver component A
            </button><br />

            {
                ver ? (
                    <ComponentA />
                ) : (
                    <h4>Sin Datos</h4>
                )
            }

            {
                ver && (
                    <ComponentA />
                )
            }
        </>
    )
}

export default App;