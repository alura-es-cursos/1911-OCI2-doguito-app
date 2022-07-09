const BASE_PATH = '/clientes'

const listaClientes = () => {
    return fetch(`${BASE_PATH}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Ocurrio in error')
        })
}

const criaCliente = (nome, email) => {
    return fetch(`${BASE_PATH}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nome,
            email: email
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.body
            }
            throw new Error('Ocurrio in error')
        })
}

const removeCliente = (id) => {
    return fetch(`${BASE_PATH}/${id}`, {
        method: 'DELETE'
    })
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Ocurrio in error')
            }
        })
}

const detalhaCliente = (id) => {
    return fetch(`${BASE_PATH}/${id}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }

            throw new Error('Ocurrio in error')
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`${BASE_PATH}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nome,
            email: email
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Ocurrio in error')
        })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
