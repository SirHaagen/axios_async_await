
//!EJECUTAR EL CONJUNTO DE ARCHIVOS EN HTDOCS !!!!!!!!!!!!!!

let aproba= document.querySelector(".aprobaInfo");
let desaproba= document.querySelector(".desaprobaInfo");

let getInformacion= async ()=>{
  
  try{
    let respuesta= await axios("042_inforfmacion.txt");
    aproba.textContent= respuesta.data.aprobados;
    desaproba.textContent= respuesta.data.desaprobados;
  }
  catch{  
    aproba.textContent= "Error, la API falló";
    desaproba.textContent= "Error, la API falló";
  }
}

document.querySelector(".getInfo").addEventListener("click",getInformacion);