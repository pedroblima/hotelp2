import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Quarto from '#models/quarto'
import Hospede from '#models/hospede'
import Funcionario from '#models/funcionario'
import Servico from '#models/servico'
import Atividade from '#models/atividade'

export default class Resort extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare endereco: string

  @column()
  declare classificacao: number

  @column()
  declare numeroQuartos: number

  @column()
  declare taxaOcupacao: number

  @column()
  declare taxaMediaPorNoite: number

  @column()
  declare dataAbertura: Date

  @hasMany(() => Quarto)
  declare quartos: HasMany<typeof Quarto>

  @hasMany(() => Hospede)
  declare hospedes: HasMany<typeof Hospede>

  @hasMany(() => Funcionario)
  declare funcionarios: HasMany<typeof Funcionario>

  @hasMany(() => Servico)
  declare servicos: HasMany<typeof Servico>

  @hasMany(() => Atividade)
  declare atividades: HasMany<typeof Atividade>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
