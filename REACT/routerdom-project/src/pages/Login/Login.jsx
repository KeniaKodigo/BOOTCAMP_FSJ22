import { Link } from "react-router-dom"

export const Login = () => {


    const handleMail =(e) => {
       console.log(e.target.value);
    }

  return (
    <div className="container-fluid">
        <h1 className="mb-4">Aca te podes logear o registrar</h1>
    <div className="card col-6 m-auto">
    <div className="card-body">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleMail}/>
</div>
<div class="mb-3">
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Introduce tu password"/>
    </div>
        <Link to="/" className="btn btn-primary">Iniciar Sesion</Link>
        <Link to="/signup" className="btn btn-success ms-2">Registrarse</Link>
</div>
</div>
    </div>
  )
}
