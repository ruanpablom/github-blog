import axios from 'axios'

const githubApi = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
})

export { githubApi }
