import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {
        nome: 'Ana Oliveira',
        cargo: 'Recepcionista',
        salario: 2500,
        id: 1,
      },
      {
        nome: 'Pedro Santos',
        cargo: 'Garçom',
        salario: 2000,
        id: 2,
      },
      {
        nome: 'Marta Silva',
        cargo: 'Camareira',
        salario: 2200,
        id: 3,
      },
    ])
  }
}