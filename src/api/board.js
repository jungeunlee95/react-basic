import axios from 'axios';

export function getBoards(param) {
    return axios.get('http://127.0.0.1:8080/boards/2', {
        params: param
    });
}

export function postBoard(body) {
    return axios.post('http://127.0.0.1:8080/boards', body)
}