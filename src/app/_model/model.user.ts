export class User {
    firstname: string = '';
    lastname: string = '';

    constructor(props) {
        this.firstname = props.firstname;
        this.lastname = props.lastname;
    }

}
