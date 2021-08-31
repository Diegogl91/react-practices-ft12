import React from 'react';

const LoginForm = ({ handleSubmit, handleChange, credenciales, setCredenciales }) => {

    const formStyle = {
        width: '400px',
        margin: ' 30px auto',
        boxShadow: '3px 3px 2px #cccccc',
        padding: '15px 20px',
        border: '1px solid #cccccc',
        borderRadius: '10px'
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

    /* 
    onChange={e => setCredenciales((prevState) => {
                        return {
                            ...prevState,
                            username: e.target.value
                        }
                    })}
    

                    onChange={e => setCredenciales((prevState) => {
                        return {
                            ...prevState,
                            password: e.target.value
                        }
                    })}
    */
    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="username">Username:</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="john.doe@example.com"
                    onChange={e => setCredenciales((prevState) => {
                        return {
                            ...prevState,
                            username: e.target.value
                        }
                    })}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="********"
                    onChange={e => setCredenciales({
                        ...credenciales,
                        password: e.target.value
                    })}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Name:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="John"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Lastname:</label>
                <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Doe"
                    onChange={handleChange}
                />
            </div>
            <div className="d-grid gap-2 mb-2">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;