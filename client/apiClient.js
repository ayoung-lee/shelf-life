import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getHome() {
  return request.get(`${serverURL}`).then((response) => response.body)
}

export function getRecipes() {
  return request.get(`${serverURL}/recipes`).then((response) => response.body)
}
