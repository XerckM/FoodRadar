// frontend/src/models/UserModel.js
class UserModel {
    constructor(id, firstname, lastname, email, mobile, role, isBlocked) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        this.isBlocked = isBlocked;
    }

    // TODO: Other methods related to user data can be added here
}

export default UserModel;
