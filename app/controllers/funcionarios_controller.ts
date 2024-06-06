import { HttpContext } from "@adonisjs/core/http";
import Funcionario from "#models/funcionario";

export default class FuncionariosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Funcionario.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Funcionario.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cargo', 'salario', 'resort_id'])
        return await Funcionario.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)
        const dados = request.only(['nome', 'cargo', 'salario', 'resort_id'])

        funcionario.merge(dados)
        return await funcionario.save()
    }


    async destroy({ params }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)

        await funcionario.delete()
        return { msg: 'Funcionário deletado com sucesso', funcionario }
    }
}
