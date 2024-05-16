import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Hospede from '../../app/models/hospede.js'

export default class extends BaseSeeder {
  async run() {
    await Hospede.createMany([
      {
        nome: 'João Silva',
        email: 'joao@example.com',
        telefone: '123456789',
        pais: 'Brasil',
        dataCheckIn: new Date(2024,5,10),
        dataCheckOut: new Date(2024,5,15),
        id: 1,
      },
      {
        nome: 'Maria Santos',
        email: 'maria@example.com',
        telefone: '987654321',
        pais: 'Brasil',
        dataCheckIn: new Date(2024,6,1),
        dataCheckOut: new Date(2024,6,5),
        id: 2,
      },
      {
        nome: 'Carlos Oliveira',
        email: 'carlos@example.com',
        telefone: '111222333',
        pais: 'Portugal',
        dataCheckIn: new Date(2024,7,10),
        dataCheckOut: new Date(2024,7,20),
        id: 3,
      },
    ])
  }
}