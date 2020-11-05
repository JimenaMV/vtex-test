import React, { useState } from "react";

function App() {
  //State
  const [permutation, setPermutation] = useState([]);

  /* const a = ["A", "B", "C"]; */

  const permutations = (inputArray) => {
    //1. Declarar variable  con array vacío donde se giardarán las permutaciones
    const arrayPermutation = [];

    //2. Iterar con un for sobre la longitud del array
    //3. Declarar variable en donde haga slice y se guarde la primera letra y se una conla segunda(Puedo usar ...?)

    const permute = (arr, permutation = []) => {
      if (!arr.length) {
        arrayPermutation.push(permutation);
        return;
      }

      for (let i in arr) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr, permutation.concat(next));
      }
    };
    permute(inputArray);
    return arrayPermutation;
  };

  /* console.log(permutations(["A", "B", "C"])); */

  if (permutation === []) {
    setPermutation(permutations(["A", "B", "C"]));
  }

  return (
    <>
      <h1>VETEX</h1>
      <p>Permutaciones de tres elementos</p>
      {/* <ul>
        {permutations(["A", "B", "C"]).map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul> */}

      <ul>
        {permutation.map((element, index) => (
          <li key={index}>{element.permutation}</li>
        ))}
      </ul>

      {/* <p>{permutations(["A", "B", "C"])}</p> */}
    </>
  );
}

export default App;
