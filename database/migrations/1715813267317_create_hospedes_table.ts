import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'hospedes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('email').notNullable()
      table.string('telefone').notNullable()
      table.string('pais').notNullable()
      table.date('data_check_in').notNullable()
      table.date('data_check_out').notNullable()
      table.integer('resort_id').unsigned().references('resorts.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}