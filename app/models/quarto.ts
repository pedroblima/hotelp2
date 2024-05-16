import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Resort from '#models/resort'

export default class Quarto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numeroQuarto: number

  @column()
  declare tipoQuarto: string

  @column()
  declare capacidade: number

  @column()
  declare status: string

  @column()
  declare precoPorNoite: number

  @belongsTo(() => Resort)
  declare resort: BelongsTo<typeof Resort>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
