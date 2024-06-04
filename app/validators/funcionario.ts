import vine from '@vinejs/vine';

export const createFuncionarioValidator = vine.compile(
    vine.object({
      nome: vine.string(),
      cargo: vine.string(),
      salario: vine.number().positive(),
    })
  );
  
  export const updateFuncionarioValidator = vine.compile(
    vine.object({
      nome: vine.string(),
      cargo: vine.string(),
      salario: vine.number().positive(),
    })
  );
  
  export const funcionarioMessages = {
    'salario.positive': 'O salário deve ser um número positivo.',
  };
  
