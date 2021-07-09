import axios from 'axios';


async function getAgendamentos() {
    try {
        const response = await axios.get("http://localhost:4000/api/agendamentos");
        console.log(response);
        return response.data.message;
    } catch (error) {
        console.error(error);
    }
}

async function getPessoas() {
    try {
        const response = await axios.get("http://localhost:4000/api/pessoas");
        console.log(response);
        return response.data.message;
    } catch (error) {
        console.error(error);
    }
}

async function getUnidades() {
    try {
        const response = await axios.get("http://localhost:4000/api/unidades");
        console.log(response);
        return response.data.message;
    } catch (error) {
        console.error(error);
    }
}

export { getAgendamentos, getPessoas, getUnidades };