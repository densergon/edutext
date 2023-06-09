import { Fragment } from "react"
import Bar from "../components/Bar"
import LoginForm from '../components/LoginForm'
import Footer from "../components/Footer"


const Login = () => {
    return (
        <Fragment>
            <Bar />
            <LoginForm />
            <Footer />
        </Fragment>
    )
}

export default Login