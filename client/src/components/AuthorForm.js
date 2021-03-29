import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const AuthorForm = (props) => {
    const {initialName, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name})
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Name:</label><br/>
                <input 
                    type= "text"
                    name= "name"
                    value= {name}
                    onChange = {(e) => setName(e.target.value)}
                />
                {errors.name ?
                    <span>{errors.name.message}</span> 
                    : null
                }
            </div>
            <button onClick = {() => navigate("/authors/")}>Cancel</button>
            <input type="submit" />
        </form>
    )
}

export default AuthorForm