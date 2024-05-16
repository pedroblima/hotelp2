import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Quarto from '../../app/models/quarto.js'

export default class extends BaseSeeder {
  async run() {
    await Quarto.createMany([
      {
        numeroQuarto: 101,
        tipoQuarto: 'Standard',
        capacidade: 2,
        status: 'Disponível',
        precoPorNoite: 150,
     
      },
      {
        numeroQuarto: 102,
        tipoQuarto: 'Suite',
        capacidade: 4,
        status: 'Disponível',
        precoPorNoite: 250,
       
      },
      {
        numeroQuarto: 201,
        tipoQuarto: 'Standard',
        capacidade: 2,
        status: 'Disponível',
        precoPorNoite: 120,
       
      },
    ])
  }
}