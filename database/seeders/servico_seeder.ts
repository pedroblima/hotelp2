import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Servico from '../../app/models/servico.js'

export default class extends BaseSeeder {
  async run() {
    await Servico.createMany([
      {
        nomeServico: 'Piscina',
        descricao: 'Acesso à piscina do resort',
        preco: 50,
        id: 1,
      },
      {
        nomeServico: 'Café da Manhã',
        descricao: 'Café da manhã completo',
        preco: 30,
        id: 2,
      },
      {
        nomeServico: 'Spa',
        descricao: 'Tratamentos de spa',
        preco: 100,
        id: 3,
      },
    ])
  }
}