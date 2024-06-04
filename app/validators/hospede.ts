import vine from "@vinejs/vine";


export const createHospedeValidator = vine.compile(
    vine.object({
      nome: vine.string(),
      email: vine.string().email(),
      telefone: vine.string(),
      pais: vine.string(),
      dataCheckIn: vine.date(),
      dataCheckOut: vine.date(),
    })
  );
  
  export const updateHospedeValidator = vine.compile(
    vine.object({
      nome: vine.string(),
      email: vine.string().email(),
      telefone: vine.string(),
      pais: vine.string(),
      dataCheckIn: vine.date(),
      dataCheckOut: vine.date(),
    })
  );
  
  export const hospedeMessages = {
    'email.email': 'O email fornecido não é válido.',
  };
  