import * as yup from 'yup'


const createCategorySchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    parentCategory: yup.string(),
    image: yup.string().required()
})

export default createCategorySchema