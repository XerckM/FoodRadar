// frontend/src/models/UserModel.js
class UserModel {
    constructor({ _id, firstname, lastname, email, mobile, token }) {
        this.id = _id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobile = mobile;
        this.token = token;
    }
}

export default UserModel;
