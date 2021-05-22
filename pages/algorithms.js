import React from 'react'
import { Container } from 'react-bootstrap'
import Searching from './searching';
import Sorting from './sorting';


const Algorithms = () => {
    return (
        <Container>
            <h1 className="text-center mt-5">Data Structures and Algorithms Visualized</h1>
            <h5 className="text-center mb-5"><a href="/">Joshua Lawrence</a></h5>
            <Sorting />
            <Searching />
        </Container>
    )
}

export default Algorithms
