import vine from '@vinejs/vine';

export const createResortValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    endereco: vine.string(),
    classificacao: vine.number(),
    numeroQuartos: vine.number(),
    taxaOcupacao: vine.number(),
    taxaMediaPorNoite: vine.number(),
    dataAbertura: vine.date(),
  })
);

export const updateResortValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    endereco: vine.string(),
    classificacao: vine.number(),
    numeroQuartos: vine.number(),
    taxaOcupacao: vine.number(),
    taxaMediaPorNoite: vine.number(),
    dataAbertura: vine.date(),
  })
);

export const resortMessages = {
  'nome.string': 'O nome do resort deve ser uma string.',
  'endereco.string': 'O endereço do resort deve ser uma string.',
  'classificacao.number': 'A classificação do resort deve ser um número.',
  'numeroQuartos.number': 'O número de quartos do resort deve ser um número.',
  'taxaOcupacao.number': 'A taxa de ocupação do resort deve ser um número.',
  'taxaMediaPorNoite.number': 'A taxa média por noite do resort deve ser um número.',
  'dataAbertura.date': 'A data de abertura do resort deve ser uma data válida.',
};