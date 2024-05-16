import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'quartos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('numero_quarto').notNullable()
      table.string('tipo_quarto').notNullable()
      table.integer('capacidade').unsigned().notNullable()
      table.enum('status', ['Disponível', 'Ocupado', 'Limpeza', 'Manutenção']).defaultTo('Disponível')
      table.float('preco_por_noite').notNullable()
      table.integer('resort_id').unsigned().references('resorts.id').onDelete('CASCADE')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}