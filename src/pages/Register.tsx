import { Fragment } from "react"
import Bar from "../components/Bar"
import RegisterForm from "../components/RegisterForm"
import Footer from "../components/Footer"

const Register = () => {
    return (
        <Fragment>
            <Bar />
            <RegisterForm />
            <Footer />
        </Fragment>
    )
}

export default Register