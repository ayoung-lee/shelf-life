import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getRecipes() {
  return request.get(`${serverURL}/recipes`).then((response) => response.body)
}
// ***   ***   ***
