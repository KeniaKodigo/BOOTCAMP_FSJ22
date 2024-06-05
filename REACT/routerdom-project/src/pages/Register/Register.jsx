import { Link } from "react-router-dom"

export const Register = () => {
  return (
    <div className="container-fluid">
    <h1 className="mb-4">Registrate por favor</h1>
<div className="card col-6 m-auto">
<div className="card-body">
    <div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
<label for="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
</div>
    <Link to="/" className="btn btn-primary">Volver al incio</Link>
    <Link to="/login" className="btn btn-success ms-2">Registrarse</Link>
</div>
</div>
</div>
  )
}
