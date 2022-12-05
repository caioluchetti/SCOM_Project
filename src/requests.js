import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://scom-project-back.onrender.com',
    timeout: 10000,
});

const requests = {
    getCriaturas: async function getCriaturas() {
        const criaturas = await axios.get('/criatura')
        if (criaturas) return criaturas.data
    },
    getCriaturaId: async function getCriaturaId(id) {
        const criatura = await axios.get(`/criatura/${id}`)
        if (criatura) return criatura.data
    },
    getBestiario: async function getBestiario() {
        const bestiario = await axios.get('/bestiario')
        if (bestiario) return bestiario.data
    },
    getCidades: async function getCidades() {
        const cidades = await axios.get('/cidade')
        if (cidades) return cidades.data
    },
    getCidadeNome: async function getCidadeNome(nome) {
        const cidade = await axios.get(`/cidade/${nome}`)
        if (cidade) return cidade.data
    },
    getComentario: async function getComentario() {
        const comentario = await axios.get('/comentario')
        if (comentario) return comentario.data
    },
    postComentario: async function postComentario(body) {
        const comentario = await axios.post('/comentario', body)
        if (comentario) return comentario.data
    },
    postCadastro: async function postCadastro(body) {
        const cadastro = await axios.post('/usuario/cadastro', body)
        if (cadastro) return cadastro.data
    },
    postLogin: async function postLogin(body) {
        const login = await axios.post('/usuario/login', body)
        if (login) return login.data
    },
    postEsqueciSenha: async function postEsqueciSenha(body) {
        const esqueciSenha = await axios.post('/usuario/esquecisenha', body)
        if (esqueciSenha) return esqueciSenha.data
    },
    deleteComentario: async function deleteComentario(body, idComentario) {
        const comentario = await axios.delete(`/comentario/${idComentario}`, {data: body })
        if (comentario) return comentario.data
    },
    getScore: async function getScore() {
        const score = await axios.get('/score')
        if (score) return score.data
    },
    postScore: async function postScore(body) {
        const score = await axios.post('/score', body)
        if (score) return score.data
    },
}

export default requests