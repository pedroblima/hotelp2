import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateResorts extends BaseSchema {
  protected tableName = 'resorts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('endereco').notNullable()
      table.integer('classificacao').notNullable()
      table.integer('numero_quartos').unsigned().notNullable()
      table.float('taxa_ocupacao').notNullable()
      table.float('taxa_media_por_noite').notNullable()
      table.date('data_abertura').notNullable()

      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
