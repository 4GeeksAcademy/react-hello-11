import React from 'react';

const Contador = () =>{
  let cont = 0;
  setInterval(()=>{
    cont++;
    document.getElementById("contador").innerHTML=cont;
  },1000)
return(
    <div className="contenedor">
        <div className="container d-flex">
            <p><i class="bi bi-clock"></i></p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p id="contador">0</p>
        </div>
    </div>
)
}
export default Contador;