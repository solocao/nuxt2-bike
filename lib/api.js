import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
import store from '../store'
export const get = params => {
  const { url, payload, auth } = params
  let config = {}
  // 负载不为空
  if (payload !== null || payload !== undefined) {
    config = Object.assign({}, config, { params: payload })
  }
  // 需要验证
  if (auth) {
    config = Object.assign({}, config, {
      headers: {
        authorization: app.store.state.user.auth
      }
    })
  }
  return axios.get(url, config).then(x => x.data)
}

export const post = params => {
  const { url, payload, auth } = params
  let authHeader = {}
  // 需要验证
  if (auth) {
    authHeader = {
      headers: {
        authorization: app.store.state.user.auth
      }
    }
  }
  return axios.post(url, qs.stringify(payload), authHeader).then(x => x.data)
}

export const upload = params => {
  const { url, payload } = params
  return axios
    .post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(x => x.data)
}
