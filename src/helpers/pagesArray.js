import { chunk } from 'lodash'

const pagesArray = (elements, elementsPerPages) => chunk(elements, elementsPerPages)

export default pagesArray