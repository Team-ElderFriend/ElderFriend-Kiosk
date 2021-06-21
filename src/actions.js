export const add = (id, cost) => ({
    type: 'ADD',
    id,
    cost
  })
export const reduce = (id) => ({
    type: 'REDUCE',
    id
  })
export const remove = (id) => ({
    type: 'REMOVE',
    id
  })
export const reset = (id = 1) =>({
  type: 'RESET',
  id
})
export const makecopy = (id = 1) =>({
  type: 'MAKECOPY',
  id
})
export const usecopy = (id = 1) =>({
  type: 'USECOPY',
  id
})
