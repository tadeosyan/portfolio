import * as yup from "yup";

export type initialValuesTypes = {
    name: string;
    email: string;
    subject: string;
    message: string
}

export const basicSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        'Please enter a valid email'
    ).required("Email is Required"),
    subject: yup.string().required("Subject is Required"),
    message: yup.string().required("Message is Required")
})

export const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

