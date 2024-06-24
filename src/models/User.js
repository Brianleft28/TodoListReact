// @ts-check
/* prettier-ignore */

class User {
    constructor(username, password, role) {
        this.username = username,
        this.password = password,
        this.role = role;
    }

    // metodo para convertir el objeto usuario a un objeto JSON
    toJson() {
        return {
            username: this.username,
            password: this.password,
            role: this.role,
        };
    }

    // metodo estatico para crear un usuario desde un objeto json
    static fromJSON(json) {
        return new User(json.username, json.password, json.role);
    }    
}

export default User;
