import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Atividade from '../../app/models/atividade.js'

export default class extends BaseSeeder {
  async run() {
    await Atividade.createMany([
      {
        nomeAtividade: 'Aula de Surf',
        descricao: 'Aula de surf na praia próxima ao resort',
        preco: 80,
        id: 1,
      },
      {
        nomeAtividade: 'Passeio de Barco',
        descricao: 'Passeio de barco pelas ilhas próximas',
        preco: 120,
        id: 2,
      },
      {
        nomeAtividade: 'Trilha na Mata',
        descricao: 'Trilha guiada pela mata ao redor do resort',
        preco: 40,
        id: 3,
      },
    ])
  }
}