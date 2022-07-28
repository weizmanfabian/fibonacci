import React, { useEffect, useState } from 'react'
import Mostrar from './components/Mostrar';
import Reloj from './components/Reloj';

function App() {
  const [time, setTime] = useState();
  const [output, setOutput] = useState([]);

  const calcular = async () => {

    //9:31:09 AM
    //3113131
    setOutput([])
    let hora = await time.split(" ")
    let newHora = await hora[0].split(":")
    let h = newHora[0]
    let m = newHora[1]
    let s = newHora[2]

    let arreglo = [];
    for (let x = 0; x < parseInt(s) + 2; x++) {
      if (x == 0) {
        arreglo.push(parseInt(m[0]));
      }
      else if (x == 1) {
        arreglo.push(parseInt(m[1]));
      }
      else {
        let cal = arreglo[x - 1] + arreglo[x - 2]
        arreglo.push(cal);
      }
    }
    setOutput(arreglo.reverse())
  }



  return (
    <>
      <div className='container'>

        <div className="card text-center">
          <Reloj setTime={setTime} />
          <div className="card-body">
            <Mostrar data={output} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={calcular}
            >Calcular</button>
          </div>
        </div>



      </div>
    </>
  );
}

export default App;


