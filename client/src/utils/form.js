import { reduce } from 'lodash'

const getValue = element => {
    const { type } = element
    let value
    switch (type) {
      case 'radio':
        value = element.checked ? element.value || true : false
        break
      default:
        value = element.value
        break
    }
  
    return value
  }

export const formToJson = form => {
    const { elements } = form
    let value
  
    return reduce(
      elements,
      (memo, element) => {
        // To avoid button submit for example
        if (!!element.name) {
          value = getValue(element)
          memo[element.name] = value
        }
        return memo
      },
      {}
    )
  }