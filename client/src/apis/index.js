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

export function register ({ username, email, password, postCode, address, phone }) {
  return axios.post(`${ BASE_URL }/user`, { username, email, password, postCode, address, phone })
}

export function login ({ username, password }) {
  return axios.post(`${ BASE_URL }/auth/login`, { username, password })
}

export function verify ({ accessToken }) {
  return axios.get(`${ BASE_URL }/auth/verify?accessToken=${ accessToken }`)
}

export function deal (dealInfo) {
  return axios.post(`${ BASE_URL }/order`, dealInfo)
}

export function fetchOrders ({ userId }) {
  return axios.get(`${ BASE_URL }/order?userId=${userId}`)
}

export function fetchWishlist ({ userId }) {
  return axios.get(`${ BASE_URL }/wish?userId=${userId}`)
}

export function addToWishlist ({ userId, productId }) {
  return axios.post(`${ BASE_URL }/wish`, { userId, productId })
}

export function removeToWishlist ({ userId, productId }) {
  return axios.delete(`${ BASE_URL }/wish?userId=${userId}&productId=${productId}`)
}

export function fetchEventProducts ({ type, eventId }) {
  return axios.get(`${ BASE_URL }/product/event/${type}/${eventId}`)
}

export function fetchBestProducts ({ countBy }) {
  return axios.get(`${ BASE_URL }/product/best?countBy=${countBy || ''}`)
}

export function searchProducts ({ name, page }) {
  console.log('API searchProducts : ', { name, page })
  return axios.get(`${ BASE_URL }/product/search?name=${name}&page=${page || ''}`)
}
