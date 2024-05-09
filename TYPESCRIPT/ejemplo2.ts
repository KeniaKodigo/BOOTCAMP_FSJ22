class Cliente {
    protected nombre: string;
    private contrasena: string;
    private esNuevo: boolean;

    constructor(name: string) {
        this.nombre = name;
        this.contrasena = "123";
        this.esNuevo = true;
    }

    setContrasena(newPassword: string) {
        if (this.esNuevo) {
            this.contrasena = newPassword;
            this.esNuevo = false;
            return 'Contrasena cambiada exitosamente';
        }
        return 'No tiene permiso para cambiar la contrasena';
    }

    getContrasena(): string {
        return this.contrasena;
    }
}

let eduardo = new Cliente("Eduardo Calles");
console.log(eduardo.getContrasena());
console.log(eduardo.setContrasena('1234'));
console.log(eduardo.getContrasena());
//console.log(eduardo.nombre);



