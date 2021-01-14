export default class FormValidator {
    constructor(form) {
        this.form = form;
    }

    emptyFields() {
        for(let field of this.form) {
            if(field.type === 'checkbox' || field.type === 'text' || field.type === 'password'){
                if(field.value === '') {
                    return false;
                }
            }
        }
        
        return true;
    }
}