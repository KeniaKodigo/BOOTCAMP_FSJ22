import {useForm} from 'react-hook-form';

export const RegisterForm = () => {
    const {register,watch} = useForm()

    //console.log(watch("email"));
    console.log(watch("password"));
 

    return (
    <div>
        <form>
            <section>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" placeholder="Ingresa tu email" {...register('email')}/>
            </section>
            <section>
                <label>Password</label>
                <input type="password" placeholder="Ingresa tu contrasenia" {...register('password')} />
            </section>
            <section>
                <label>Confirm Password</label>
                <input type="password" placeholder="Ingrese nuevamente su contrasenia" {...register('confirmPassword')}/>
            </section>
            <button type="submit">Registrarse</button>
        </form>

    </div>
  )
}
