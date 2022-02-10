'use strict';

const pacientes= [

  {id: 1, nome: "Davi", idade: 32},
  {id: 2, nome: "Bruna", idade: 26},
  {id: 3, nome: "Betoven", idade: 7},
  {id: 4, nome: "Theo", idade: 3}

];


module.exports.listarPacientes = async (event) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        pacientes
      },
      null,
      2
    ),
  };

};

module.exports.obterPaciente = async (event) => {
  console.log(event); //recebe as informações da req
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        pacientes
      },
      null,
      2
    ),
  };

};

