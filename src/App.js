import React, { useState } from "react";

function App() {
  //State
  //const [permutation, setPermutation] = useState([]);

  const permutations = (inputArray) => {
    //Array vacío donde se guardarán las permutaciones
    const arrayPermutation = [];

    //permute hace cada iteración, recibe dos parámetros.En permutation = [] es donde se va a almacenar un a de las posibles permutaciones
    const permute = (arr, permutation = []) => {
      //Se deja de ejecutar cuando el array es cero
      if (!arr.length) {
        arrayPermutation.push(permutation);
        return;
      }

      for (let i in arr) {
        //En current se almacena un nuevo array con slice para no modificar el original
        let current = arr.slice();
        //Con slice se van quitando las letras del current y crea un array nuevo con ese valor
        let next = current.splice(i, 1);
        permute(current, permutation.concat(next));
      }
    };
    //Ejecutando la función permute
    permute(inputArray);
    return arrayPermutation;
  };

  /* setPermutation(permutations(["A", "B", "C"])); */

  /* if (permutation === []) {
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

      {/*   <ul>
        {permutation.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
