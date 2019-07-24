import request from '../https/http'


export function AddItem(data) {
  return request({
    url:'/list',
    method: 'post',
    data
  })
}

export function deleteItem(id) {
  return request({
    url:'/list/' + id,
    method: 'delete',
  })
}

export function UpdateItemContent(id,data) {
  return request({
    url:'/list/' + id,
    method: 'put',
    data
  })
}

export function loadList() {
  return request({
    url:'/list',
    method: 'get'
  })
}

