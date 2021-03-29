import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton'

const ListAll = () => {
    const[allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(res.data)
                setAllAuthors(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const removeFromDom = authorId => {
        setAllAuthors(allAuthors.filter(author => author._id != authorId))
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, idx) => {
                            return(
                                <tr key= {idx}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to= {"/authors/edit/" + author._id}><button>Edit</button></Link>
                                        <DeleteButton authorId= {author._id} successCallback = {() => removeFromDom(author._id)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAll