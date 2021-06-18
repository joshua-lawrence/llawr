import React, { useEffect, useState } from 'react'
import { Container,
    Row,
    Col,
    Navbar,
    Button, } from "react-bootstrap"
import { AiFillSetting } from "react-icons/ai";

const getRandomNumbers = () => {
    var random = [];
    for(var i = 0; i < 400; i++) {
        random = random.concat(Math.floor(100 * Math.random()));
    }
    return random;
}

const Searching = () => {
    let [random, setRandom] = useState(getRandomNumbers());
    return (
        <>
            <h4 className="text-center">Searching<button onClick={() => {}} style={{background: "none", border: "none", width: "50px"}}><AiFillSetting></AiFillSetting></button></h4>

            
            <Row className="justify-content-md-center">
                <Col md="12">
                    {
                        random.map((r, i) => (
                            <>
                                <span style={{
                                        padding: '5px', 
                                }}>{r}</span>
                                {i != 0 && i % 40 == 0 && (
                                    <br/>
                                )}
                            </>
                        ))
                    }
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col md="6" className="d-flex flex-column w-25 mt-5">
                    {/* {settings && (
                        <>
                            <label>Animation Delay (ms)</label>
                            <input onChange={(e) => setDelay(e.target.value)} value={delay}></input>
                            <br />
                        </>
                    )} */}
                    <select defaultValue="selection" onChange={(e) => {}}>
                        <option value="selection">Linear Search</option>
                        <option value="bubble">Binary Search</option>
                    </select>
                    <br />
                    <p>{}</p>
                    <br />
                    <button onClick={() => setRandom(getRandomNumbers())}>Generate Random Numbers</button>
                    <br />
                    <input></input>
                    <br />
                    <button onClick={() => {}}>Search</button>
                </Col>
            </Row>
        </>
    )
}

export default Searching
