import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://scom-project-back.herokuapp.com',
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
    }
}

export default requests