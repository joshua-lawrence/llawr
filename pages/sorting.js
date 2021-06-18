import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import { AiFillSetting } from "react-icons/ai";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const getRandomNumbers = (count) => {
    var random = [];
    for(var i = 0; i < count; i++) {
        random = random.concat(Math.floor(100 * Math.random()));
    }
    return random;
}

const Sorting = () => {
    let [count, setCount] = useState(40);
    let [random, setRandom] = useState(getRandomNumbers(count));
    let [sortType, setSortType] = useState("selection");
    let [info, setInfo] = useState("Selection sort works by finding the minimum value in the data structure, and swapping it with the first position. Then, the first positon is iterated. Time complexity O(n^2).");
    let [coloredIndex, setColoredIndex] = useState([]);
    let [sorting, setSorting] = useState(false);
    let [settings, setSettings] = useState(false);
    let [delay, setDelay] = useState(75);

    useEffect(() => setSorting(false), [random]);
    useEffect(() => setRandom(getRandomNumbers(count)), [count]);
    useEffect(() => {
        var sortNote;
        switch (sortType) {
            case "selection":
                sortNote = "Selection sort works by finding the minimum value in the data structure, and swapping it with the first position. Then, the first positon is iterated. Time complexity O(n^2).";
                break;
            case "bubble":
                sortNote = "Bubble sort works by comparing each value to its neighbor, and swapping them if the neighbor is higher. Each iteration should put the maximum number at the end. Time complexity O(n^2).";
                break;
            case "insertion":
                sortNote = "Insertion sort works by moving left to right, comparing each value to all of it's left neighbors. If it's less than it's neighbors to the left, it shifts until it's reached it's position. Time complexity O(n^2).";
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

    const insertionSort = async () => {
        setSorting(true);
        let sorted = random;
        //For each value starting from the second
        for(let i = 1; i < sorted.length; i++) {
            //Grab the index before i
            let j = i - 1;
            //Grab our value at i
            let temp = sorted[i];
            //while our value to the left of the current iteration is greater, shift the numbers to the right 4 5 1 8 9 2 0
            // 1st iteration: 4 is not greater than 5, skip while loop
            // 2nd iteration: 5 is greater than 1, enter loop
            // 2nd 2nd iteration: 4 is greater than 1, enter loop
            while(j >= 0 && sorted[j] > temp) {
                //2nd: 1 = 5;
                //2nd 2nd: 5 = 4;
                sorted[j + 1] = sorted[j];
                //2nd: 455 now, point j at the position before it
                //2nd 2nd: 445, point j at the position before it
                j = j - 1;
            }
            //1st: 5 = 5, we aren't doing anything
            //2nd: j is now -1, 0 = 1;
            // 145 now.
            sorted[j + 1] = temp;
            setColoredIndex([i, j]);
            setRandom([...sorted])
            await new Promise(r => setTimeout(r, delay));
        }
        setSorting(false);
        setColoredIndex([]);
    }

    // const shellSort = async () => {
    //     setSorting(true);
    //     let sorted = random;
    //     setSorting(false);
    //     setColoredIndex([]);
    // }

    const merge = async () => {

    }

    const mergeSort = async () => {
        setSorting(true);
        let sorted = random;
        let midpoint = 0;
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
                case "insertion":
                    insertionSort();
                    break;
                default:
                    break;
            }
        }
    }
    return (
        <div>
    <AppBar position="static" style={{width: "calc(100vw - 240px) !important"}}>
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: "1"}}>
            Sorting
          </Typography>
          <Button variant="contained" style={{margin: "10px"}} onClick={() => sort()}>Sort</Button>
          <Button variant="contained" style={{margin: "10px"}} onClick={() => setRandom(getRandomNumbers(count))}>Generate Random Numbers</Button>
          <Select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          style={{margin: "10px"}}
        >
            <MenuItem value="selection">Selection Sort</MenuItem>
            <MenuItem value="bubble">Bubble Sort</MenuItem>
            <MenuItem value="insertion">Insertion Sort</MenuItem>
            <MenuItem value="merge">Merge Sort</MenuItem>
            <MenuItem value="quick">Quick Sort</MenuItem>
            <MenuItem value="heap">Heap Sort</MenuItem>
            <MenuItem value="radix">Radix Sort</MenuItem>
        </Select>
                <Typography style={{margin: "10px"}}>Animation Delay (ms)</Typography>
        <TextField value={delay} onChange={(e) => setDelay(e.target.value)} style={{width: "30px", margin: "10px"}}/>
        <Typography style={{margin: "10px"}}># of values</Typography>
        <Slider
        defaultValue={count}
        value={count}
        step={20}
        marks
        min={10}
        max={400}
        onChange={(e, val) => setCount(val)}
        style={{width: "200px", margin: "10px", color: "white"}}
      />
        </Toolbar>

      </AppBar>
            {
                random.map((r, i) => (
                    <div style={{width: r * .88 + "vw", height: 90/count + "vh", backgroundColor: coloredIndex.includes(i) ? "#f48fb1" : "#90caf9"}}></div>
                ))
            }
            {/* <Row className="justify-content-md-center">
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
                    <button onClick={() => setRandom(getRandomNumbers())}>Generate Random Numbers</button>
                    <br />
                    <button variant="secondary" onClick={() => sort()}>Sort</button>
                </Col>
            </Row> */}
        </div>
    )
}

export default Sorting
