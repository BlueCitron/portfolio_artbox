import axios from 'axios'
import querystring from 'querystring'

const BASE_URL = process.env.VUE_APP_BASE_URL

export function fetchCategory () {
  return axios.get(`${ BASE_URL }/category`)
}

export function fetchProducts ({ categoryId, divisionId, page }) {
  return axios.get(`${ BASE_URL }/product?${querystring.stringify({ category: categoryId, division: divisionId, page })}`,)
}

export function fetchSingleProduct ({ productId }) {
  return axios.get(`${ BASE_URL }/product/${productId}`,)
}

export function register ({ username, password, email }) {
  return axios.post(`${ BASE_URL }/user`, { username, password, email })
}

export function login ({ username, password }) {
  return axios.post(`${ BASE_URL }/auth/login`, { username, password })
}

export function verify ({ accessToken }) {
  return axios.get(`${ BASE_URL }/auth/verify?accessToken=${ accessToken }`)
}
