export default class FormValidator {
    constructor(form) {
        this.form = form;
    }

    static markField(form,fieldId) {
        form[fieldId].style.border = "solid 2px red";
    }

    
    static deselectField(form, fieldId) {
        form[fieldId].style.border = "none";
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
        let regex = new RegExp("[A-Za-z\s?]");
        if(regex.test(term)) {
            FormValidator.deselectField(this.form, fieldId);
            return true;
        }
        FormValidator.markField(this.form, fieldId);
        return false;
    }

    onlyNumbers(fieldId) {
        let term = this.form[fieldId].value;
        let regex = new RegExp("[A-Za-z\s?]");
    }

}