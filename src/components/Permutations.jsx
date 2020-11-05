import React, { useState, useEffect } from "react";

function Permutations() {
  //State
  const [permutation, setPermutation] = useState([]);

  const permutations = () => {
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
    let inputArray = ["A", "B", "C"];
    permute(inputArray);
    setPermutation(arrayPermutation);
    return arrayPermutation;
  };
  //Con useEffect, ejecuto la función permutations una única
  useEffect(() => {
    permutations();
  }, []);

  console.log("state", permutation);
  /* setPermutation(permutations(["A", "B", "C"])); */

  /* if (permutation === []) {
    setPermutation(permutations(["A", "B", "C"]));
  } */

  // console.log("arrayPermutation", permutations(example));

  return (
    <>
      <h1>VETEX</h1>
      <p>Permutaciones de tres elementos</p>
      <ul>
        {/* {permutations(example).map((element, index) => (
          <li key={index}>{element}</li>
        ))} */}
        {permutation.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        {}
      </ul>

      {/*   <ul>
        {permutation.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul> */}
    </>
  );
}

export default Permutations;
