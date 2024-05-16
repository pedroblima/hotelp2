import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Resort from '#models/resort'


export default class Atividade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nomeAtividade: string

  @column()
  declare descricao: string

  @column()
  declare preco: number

  @belongsTo(() => Resort)
  declare resort: BelongsTo<typeof Resort>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
