import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Searching from './searching';
import Sorting from './sorting';


const Algorithms = () => {
    const [section, setSection] = useState("sorting");
    return (
        <Container>
            <h1 className="text-center mt-5">Data Structures and Algorithms Visualized</h1>
            <h5 className="text-center mt-3 mb-3"><a href="/">Joshua Lawrence</a></h5>
            <div className="d-flex flex-direction-row justify-content-around mb-5">
                <button onClick={() => {setSection("sorting")}}>Sorting</button>
                <button onClick={() => {setSection("searching")}}>Searching</button>
                <button onClick={() => {setSection("union-find")}}>Union Find</button>
                <button onClick={() => {setSection("trees")}}>Trees</button>
                <button onClick={() => {setSection("graphs")}}>Graphs</button>
            </div>
            {section == 'sorting' && (
                <Sorting />
            )}
            {section == 'searching' && (
                <Searching />
            )}
        </Container>
    )
}

export default Algorithms
