import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Resort from './resort.js'

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

  @belongsTo(() => Resort)
  declare resort: BelongsTo<typeof Resort>

  @column()
  declare precoPorNoite: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
