import * as yup from 'yup'

const addProductSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    discount: yup.number().min(1).max(100),
    images: yup.array().of(yup.string()).min(1),
    categoryId: yup.string().required()

})

export default addProductSchema