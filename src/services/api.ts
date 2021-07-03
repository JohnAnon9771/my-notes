import axios, {CancelToken, AxiosResponse} from 'axios'

const api = axios.create({
	baseURL: 'https://api.github.com/',
})

export {api}

export type {CancelToken, AxiosResponse as HttpResponse}
