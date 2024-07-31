import React, { useState, useEffect } from 'react';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setSorting(true);
    let arr = [...array];
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    } while (swapped);
    setSorting(false);
  };

  const selectionSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    setSorting(false);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h2>Bubble Sort</h2>
          <button onClick={bubbleSort} disabled={sorting}>Bubble Sort</button>
        </div>
        <div>
          <h2>Selection Sort</h2>
          <button onClick={selectionSort} disabled={sorting}>Selection Sort</button>
        </div>
        <div>
          <h2>Generate Array</h2>
          <button onClick={generateArray} disabled={sorting}>Generate New Array</button>
        </div>
      </div>
      <div style={{
        height: '300px',
        border: '1px solid #ccc',
        padding: '10px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: '100%',
        }}>
          {array.map((value, index) => (
            <div
              key={index}
              style={{
                width: `${value * 3}px`,
                height: '200px',
                backgroundColor: 'blue',
                margin: '0 2px',
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;