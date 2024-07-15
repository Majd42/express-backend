import * as yup from 'yup'

const updateCategorySchema= yup.object().shape({
    id: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    image: yup.string(),
    parentCategory: yup.string()
})

export default updateCategorySchema