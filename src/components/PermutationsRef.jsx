import React, { useEffect, useState } from "react";

const PermutationsRef = () => {
  const [permutations, setPermutations] = useState([]);

  const permutator = () => {
    //En result, se almacenan todas las permutaciones
    const result = [];
    //Permute es la encargada de cada iteración
    //"permutation" en cada iteración va a almacenar una permutación diferente
    const permute = (arr, permutation = []) => {
      //Cuando el array esté vacio colocamos return para que la función recursiva deje de ejecutarse
      if (!arr.length) {
        result.push(permutation);
      } else {
        //arr.lenght sólo va a iterar con el número de elementos contenidos en el array y cuando los cumpla se va a detener
        for (let i = 0; i < arr.length; i++) {
          //Declarar una variable para sobre escribir el array actual para crear las permutaciones (Se crea una copia del array)
          let current = arr.slice();
          /* console.log(current); */

          //Con splice se remueven elementos de un arreglo y se crea un array nuevo solo con ese valor.
          //Saca la primer letra en next, cuando la saca, la va a concatenar con el permutation= []
          let next = current.splice(i, 1);
          /* console.log(next); */
          //Reclusión: permite que la función se siga ejecutando,  sacando todos los valores hasta que sea cero
          permute(current, permutation.concat(next));
        }
      }
    };

    //Resultado
    console.log(result);

    //Almacenando el input de entrada en una variable
    let inputArray = ["C", "A", "T"];

    //Ejecutando la función permute utilizando en input ya almacenado
    permute(inputArray);

    //Seteando el result
    setPermutations(result);
    return result;
  };

  //Usando useEffect para ejecutar uns única vez la función, evitando el loop infinito de renders
  /*  permutator(); */
  useEffect(() => {
    permutator();
  }, []);

  return (
    <>
      <h1>Permutations</h1>
      <ul>
        {permutations.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  );
};

export default PermutationsRef;
