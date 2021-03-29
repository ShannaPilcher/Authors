import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router'
import axios from 'axios';
import ListAll from '../components/ListAll';

const Main = () => {
    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/authors/new"}>Add an author</Link>
            <p>We have quotes by:</p>
            <ListAll />
        </div>
    )
}

export default Main