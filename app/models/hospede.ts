import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Resort from '#models/resort'

export default class Hospede extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column()
  declare telefone: string

  @column()
  declare pais: string

  @column()
  declare dataCheckIn: Date

  @column()
  declare dataCheckOut: Date

  @column()
  declare resort_id: number

  @belongsTo(() => Resort)
  declare resort: BelongsTo<typeof Resort>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
