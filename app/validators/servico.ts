import vine from '@vinejs/vine'

export const createServicoValidator = vine.compile(
    vine.object({
      nomeServico: vine.string(),
      descricao: vine.string(),
      preco: vine.number().positive(),
    })
  );
  
  export const updateServicoValidator = vine.compile(
    vine.object({
      nomeServico: vine.string(),
      descricao: vine.string(),
      preco: vine.number().positive(),
    })
  );
  
  export const servicoMessages = {
    'preco.positive': 'O preço deve ser um número positivo.',
  };