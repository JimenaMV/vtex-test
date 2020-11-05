import React, { useState } from "react";

function App() {
  //State
  const [permutation, setPermutation] = useState([]);

  const permutations = (inputArray) => {
    //Array vacío donde se guardarán las permutaciones
    const arrayPermutation = [];

    //

    const permute = (arr, permutation = []) => {
      if (!arr.length) {
        arrayPermutation.push(permutation);
        return;
      }

      for (let i in arr) {
        let current = arr.slice();
        let next = current.splice(i, 1);
        permute(current, permutation.concat(next));
      }
    };
    permute(inputArray);
    return arrayPermutation;
  };

  /*   if (permutation === []) {
    setPermutation(permutations(["A", "B", "C"]));
  } */
  console.log(permutations(["A", "B", "C"]));

  return (
    <>
      <h1>VETEX</h1>
      <p>Permutaciones de tres elementos</p>
      <ul>
        {permutations(["A", "B", "C"]).map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>

      {/* <ul>
        {permutation.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul> */}

      {/* <p>{permutations(["A", "B", "C"])}</p> */}
    </>
  );
}

export default App;
