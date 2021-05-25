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
