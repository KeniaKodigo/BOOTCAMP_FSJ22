import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { auth } from '../../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserDataContext';
import { useNavigate } from 'react-router';


const schema = yup.object().shape({
    email: yup.string().email('Correo no valido. Ejemplo nombre@correo.com').required('El correo es obligatorio'),
    password: yup.string().min(8,'La contraseña debe tener al menos 8 caracteres').required('El password es obligatorio')
})

export const LoginForm = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate();

    const {data,setData} = useContext(UserContext)
    
    const onSubmitForm = data => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);

    //Guardamos el usuario en el contexto
    setData(user);
    //Redireccionamos al Home
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

return (
<div>
    <form onSubmit={handleSubmit(onSubmitForm)}>
        <section>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" placeholder="Ingresa tu email" {...register('email')}/>
            {errors.email && <p>{errors.email.message}</p>}
        </section>
        <section>
            <label>Password</label>
            <input id="password" type="password" placeholder="Ingresa tu contrasenia" {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}
        </section>
        <button type="submit"> Iniciar sesion</button>
    </form>
</div>
)
}
