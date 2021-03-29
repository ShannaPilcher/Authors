import React, {useEffect, useState} from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Edit = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState("");
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then((res) => {
                setAuthor(res.data)
                setLoaded(true)
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                console.log(res)
                navigate("/authors/")
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/authors/"}>Home</Link>
            <p>Edit this author</p>
            {loaded && (
                <AuthorForm initialName= {author.name} onSubmitProp = {updateAuthor} errors = {errors} />
            )}
        </div>
    )
}

export default Edit