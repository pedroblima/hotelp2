import router from '@adonisjs/core/services/router'
import AtividadesController from '../app/controllers/atividades_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'
import HospedesController from '../app/controllers/hospedes_controller.js'
import QuartosController from '../app/controllers/quartos_controller.js'
import ResortsController from '../app/controllers/resorts_controller.js'
import ServicosController from '../app/controllers/servicos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/atividades', AtividadesController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/hospedes', HospedesController).apiOnly()
router.resource('/quartos', QuartosController).apiOnly()
router.resource('/resorts', ResortsController).apiOnly()
router.resource('/servicos', ServicosController).apiOnly()
