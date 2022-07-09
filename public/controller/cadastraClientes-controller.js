import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    await clienteService.criaCliente(nome, email)
    window.location.href = '../vistas/cadastro_concluido.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../vistas/erro.html"
  }
})