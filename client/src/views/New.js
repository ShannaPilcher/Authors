import React, {useEffect, useState} from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const New = (props) => {
    const { id } = props;
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/')
            .then((res) => {
                setAuthors(res.data)
            })
    }, [])

    const newAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                    setAuthors([...authors, res.data])
                    navigate("/authors/")
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/authors/'}>Home</Link>
            <p>Add a new author:</p>
            <AuthorForm onSubmitProp = {newAuthor} initialName= "" errors = {errors}/>
        </div>
    )
}

export default New