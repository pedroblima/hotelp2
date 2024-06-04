import vine from '@vinejs/vine';

export const createAtividadesValidator = vine.compile(
  vine.object({
    nome_atividade: vine.string(),
    preco: vine.number().positive()
   
  })
);

export const updateAtividadesValidator = vine.compile(
  vine.object({
    nome_atividade: vine.string(),
    preco: vine.number().positive()
   
  })
);

export const messages = {
  'nome_atividade.string': 'O nome da atividade deve ser inserido.',
  'preco.number': 'O preco deve ser inserido.'
};
