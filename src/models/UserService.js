import User from './User';

/* prettier-ignore */
class UserService {
    constructor(){
        this.users = UserService.getUsersFromStorage() || [];
    }

    // metodo para obtener usuarios de LS
    static getUsersFromStorage() {
        const usersJson = localStorage.getItem('users');
        return JSON.parse(usersJson)
    }

    // metodo para guardar usuarios en LS
    saveUsersToStorage(users){
        const userJson = JSON.stringify(users);
        localStorage.setItem('users', userJson)
    }

    // metodo para crear un nuevo usuario 
    createUser(username, password, role) {
        const newUser = new User(username, password, role) 
        this.users.push(newUser)
        this.saveUsersToStorage(this.users)
        return newUser;
    }

    //metodo para obtener todos los usuarios
    getAllUsers() {
        return this.users
    }
    //meotodo para encontrar usuario por su nombre de usuario

    findUserByUsername(username) {
        return this.users.find(user => user.username === username)
    }

    //metodo para eliminar un usuario por su nombre de usuario
    deleteUserByUsername(username) {
        this.users = this.users.filter(user => user.username !== username);
        this.saveUsersToStorage(this.users);
    }

    // metodo para actualizar un usuario 
    updateUser(user) {
        const index = this.users.findIndex(u => u.username === user.username)
        if (index !== -1) {
            this.users[index] = user;
            this.saveUsersToStorage(this.users)
        }
    }

}
export default UserService;
