export default class FormValidator {
    constructor(form) {
        this.form = form;
    }

    static markField(form,fieldId) {
        form[fieldId].style.border = "solid 2px red";
        form[fieldId].style.backgroundColor = "#E97E67 ";
    }

    
    static deselectField(form, fieldId) {
        form[fieldId].style.border = "none";
        form[fieldId].style.backgroundColor = "#fff ";
    }

    emptyFields() {
        for(let field of this.form) {
            if(field.type === 'text' || field.type === 'password'){
                if(field.value === '') {
                    return false;
                }
            }
        }
        return true;
    }
    
    addWarning(message, fieldId) {
        let msg = document.createTextNode(message);
        let small = document.createElement('small');
        small.appendChild(msg);

        if(this.form[fieldId].nextElementSibling === null) {
            this.form[fieldId].parentElement.appendChild(small);
        } 
    }

    removeWarning(fieldId) {
        if(this.form[fieldId].nextElementSibling !== null) {
            this.form[fieldId].nextElementSibling.remove();
        }
    }

    checksLength(minLength, maxLength, fieldId) {
        if(this.form[fieldId].value.length >= minLength && this.form[fieldId].value.length <= maxLength) {
            FormValidator.deselectField(this.form, fieldId);
            return true;
        }
        FormValidator.markField(this.form, fieldId);
        return false;
    }

    onlyLetters(fieldId) {
        let term = this.form[fieldId].value;
        let regex = new RegExp("^[A-Za-z]+$", "g");
        if(regex.test(term)) {
            FormValidator.deselectField(this.form, fieldId);
            this.removeWarning(fieldId);
            return true;
        }
        this.addWarning(`${fieldId} deve ter apenas letras`, fieldId)
        FormValidator.markField(this.form, fieldId);
        return false;
    }

    onlyNumbers(fieldId) {
        let term = this.form[fieldId].value;
        let regex = new RegExp("^[0-9]+$", "g");
        if(regex.test(term)) {
            FormValidator.deselectField(this.form, fieldId);
            this.removeWarning(fieldId);
            return true;
        }
        this.addWarning(`${fieldId} deve ter apenas números`, fieldId)
        FormValidator.markField(this.form, fieldId);
        return false;
    }

    validateUser(fieldId) {
        let term = this.form[fieldId].value;
        let regex = new RegExp("^[A-Za-z0-9]+$", "g");
        if(term.match(regex)) {
            FormValidator.deselectField(this.form, fieldId);
            this.removeWarning(fieldId);
            return true;
        }
        this.addWarning(`${fieldId} deve ter apenas letras e números`, fieldId)
        FormValidator.markField(this.form, fieldId);
        return false;
    }

}