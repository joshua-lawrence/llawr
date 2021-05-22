import React, { useEffect, useState } from 'react'
import { Container,
    Row,
    Col,
    Navbar,
    Button, } from "react-bootstrap"
import { AiFillSetting } from "react-icons/ai";

const getRandomNumbers = () => {
    var random = [];
    for(var i = 0; i < 40; i++) {
        random = random.concat(Math.floor(100 * Math.random()));
    }
    return random;
}

const Algorithms = () => {
    let [random, setRandom] = useState(getRandomNumbers());
    let [sortType, setSortType] = useState("selection");
    let [info, setInfo] = useState("Selection sort works by finding the minimum value in the data structure, and swapping it with the first position. Then, the first positon is iterated. Time complexity O(n^2).");
    let [coloredIndex, setColoredIndex] = useState([]);
    let [sorting, setSorting] = useState(false);
    let [settings, setSettings] = useState(false);
    let [delay, setDelay] = useState(75);

    useEffect(() => setSorting(false), [random]);
    useEffect(() => {
        var sortNote;
        switch (sortType) {
            case "selection":
                sortNote = "Selection sort works by finding the minimum value in the data structure, and swapping it with the first position. Then, the first positon is iterated. Time complexity O(n^2).";
                break;
            case "bubble":
                sortNote = "Bubble sort works by comparing each value to its neighbor, and swapping them if the neighbor is higher. Each iteration should put the maximum number at the end. Time complexity O(n^2).";
                break;
            default:
                sortNote = null;
                break;
        }
        setInfo(sortNote)
    }, [sortType])

    /**
     * SELECTION SORT
     * Find minimum value from position to end
     * Move minimum value to first index, (shifting from 0, to 1, to 2)
     * 
     */
    const selectionSort = async () => {
        setSorting(true);
        let sorted = random;
        for(let i = 0; i < random.length; i++) {
            let min = null;
            for(let j = i; j < random.length; j++) {
                if(random[j] < random[min] || min === null) {
                    min = j;
                }
            }
            let temp = sorted[min];
            sorted[min] = sorted[i];
            sorted[i] = temp;
            setColoredIndex([i, min]);
            setRandom([...sorted]);
            await new Promise(r => setTimeout(r, delay));
        }
        setSorting(false);
        setColoredIndex([]);
    }

    const bubbleSort = async () => {
        setSorting(true);
        let sorted = random;
        for(let i = 0; i < random.length; i++) {
            for(let j = 0; j < random.length - i - 1; j++) {
                if(sorted[j] > sorted[j + 1]) {
                    let temp = sorted[j + 1];
                    sorted[j + 1] = sorted[j];
                    sorted[j] = temp;
                    setColoredIndex([j, j + 1]);
                    setRandom([...sorted])
                    await new Promise(r => setTimeout(r, delay));
                }
            }
        }
        setSorting(false);
        setColoredIndex([]);
    }

    const sort = () => {
        if(sorting !== true) {
            switch (sortType) {
                case "selection":
                    selectionSort();
                    break;
                case "bubble":
                    bubbleSort();
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <Container>
            <h1 className="text-center mt-5">Data Structures and Algorithms Visualized</h1>
            <h5 className="text-center mb-5"><a href="/">Joshua Lawrence</a></h5>
            <h4 className="text-center">Sorting<button onClick={() => {setSettings(!settings)}} style={{background: "none", border: "none", width: "50px"}}><AiFillSetting></AiFillSetting></button></h4>

            <Row className="justify-content-md-center">
                <Col md="12">
                    {
                        random.map((r, i) => (
                            <span style={{
                                padding: '5px', 
                                color: coloredIndex.includes(i) ? "red" : "black",
                                fontWeight: coloredIndex.includes(i) ? "600" : "400",
                        }}>{r}</span>
                        ))
                    }
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="12" className="d-flex flex-direction-row">
                    {
                        random.map((r, i) => (
                            <div style={{height: r, width: "9px", backgroundColor: coloredIndex.includes(i) ? "red" : "black", margin: "9px"}}></div>
                        ))
                    }
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="6" className="d-flex flex-column w-25">
                    {settings && (
                        <>
                            <label>Animation Delay (ms)</label>
                            <input onChange={(e) => setDelay(e.target.value)} value={delay}></input>
                            <br />
                        </>
                    )}
                    <select defaultValue="selection" onChange={(e) => setSortType(e.target.value)}>
                        <option value="selection">Selection Sort</option>
                        <option value="bubble">Bubble Sort</option>
                        <option value="insertion">Insertion Sort</option>
                        <option value="merge">Merge Sort</option>
                        <option value="quick">Quick Sort</option>
                        <option value="heap">Heap Sort</option>
                        <option value="radix">Radix Sort</option>
                    </select>
                    <br />
                    <p>{info}</p>
                    <br />
                    <Button onClick={() => setRandom(getRandomNumbers())}>Get Random Numbers</Button>
                    <br />
                    <Button variant="secondary" onClick={() => sort()}>Sort</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Algorithms
