import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Resort from '../../app/models/resort.js'

export default class extends BaseSeeder {
  async run() {
    await Resort.createMany([
      {
        nome: 'Resort Paradise',
        endereco: '123 Beach Avenue',
        classificacao: 5,
        numeroQuartos: 100,
        taxaOcupacao: 0.8,
        taxaMediaPorNoite: 300,
        dataAbertura: new Date(2020,3,5),
      },
      {
        nome: 'Sunset Resort',
        endereco: '456 Ocean Drive',
        classificacao: 4,
        numeroQuartos: 80,
        taxaOcupacao: 0.7,
        taxaMediaPorNoite: 250,
        dataAbertura: new Date(2022,7,15),
      },
      {
        nome: 'Tropical Haven',
        endereco: '789 Palm Street',
        classificacao: 4,
        numeroQuartos: 120,
        taxaOcupacao: 0.75,
        taxaMediaPorNoite: 280,
        dataAbertura: new Date(2022,12,10),
      },
    ])
  }
}