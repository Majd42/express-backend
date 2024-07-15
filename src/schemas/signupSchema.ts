import * as yup from 'yup'

const signupSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})

export default signupSchema