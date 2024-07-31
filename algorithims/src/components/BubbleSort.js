import React, { useState, useEffect } from 'react';

const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  // Generates new array of a certain length and fills with random numbers
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

  return (
    <div>
      <button onClick={generateArray} disabled={sorting}>Generate New Array</button>
      <button onClick={bubbleSort} disabled={sorting}>Sort</button>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value * 3}px`,
              width: '20px',
              backgroundColor: 'blue',
              margin: '0 2px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSort;