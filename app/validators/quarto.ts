import vine from '@vinejs/vine';

export const createQuartoValidator = vine.compile(
  vine.object({
    numero_quarto: vine.number(),
    tipo_quarto: vine.string(),
    capacidade: vine.number().positive(),
    preco_por_noite: vine.number().positive(),
   
  })
);

export const updateQuartoValidator = vine.compile(
  vine.object({
    numero_quarto: vine.number(),
    tipo_quarto: vine.string(),
    capacidade: vine.number().positive(),
    preco_por_noite: vine.number().positive(),
   
  })
);

export const messages = {
  'numero_quarto.number': 'O número do quarto deve ser um número inteiro.',
  'tipo_quarto.string': 'O tipo do quarto deve ser uma string.',
  'capacidade.number': 'A capacidade do quarto deve ser um número inteiro positivo.',
  'status.required': 'O status do quarto deve ser "Disponível", "Ocupado", "Limpeza" ou "Manutenção".',
  'preco_por_noite.positive': 'O preço por noite deve ser um número positivo.',
};
