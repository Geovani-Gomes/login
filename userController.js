
const UserService = require('./user.service');
const userService = new UserService();
const { GenericException } = require("../generic-exception.js");

class UserController {
    createUser(req, res) {
        const { id, email, senha } = req.body;
        const user = userService.create(id, email, senha);
        res.json(user);
    }

    getAllUsers(req, res) {
        const users = userService.findAll();
        res.json(users);
    }

    getUserById(req, res) {
        const { id } = req.params;
        const user = userService.findOne(id);

        if(!user) {
            return res.status(404).send('Registro não encontrado');
        }
        res.json(user);
    }

    updateUser(req, res) {
        const { id } = req.params;
        const { email, senha } = req.body;
        const updatedUser = userService.update(id, email, senha);
        if(!updatedUser) return res.status(404).send('Usuário não encontrado');
        res.status(200).json(updatedUser);
    }

    deleteUser(req, res) {
        const { id } = req.params;
        const result = userService.remove(id);
        if(!result) return res.status(404).send('Usuário não encontrado');
        res.status(204).send();
    }
}

module.exports = UserController;