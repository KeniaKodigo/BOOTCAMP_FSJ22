import { useState } from "react"
import { LoginForm } from "./components/LoginForm"
import { RegisterForm } from "./components/RegisterForm"

export const Session = () => {
  const [typeForm,setTypeForm] = useState(null);

  return (
    <div>
    <button onClick={() => {setTypeForm('Login')}}>Iniciar Sesion</button>
    <button onClick={() => {setTypeForm('Signup')}}>Registrarse</button>
        {typeForm === "Signup" ? <RegisterForm /> : <LoginForm />}
    </div>
  )
}
