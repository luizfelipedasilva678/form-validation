import cpfValidator from '../js/class/CpfValidator.js';
import FormValidator from '../js/class/FormValidator.js';

(function (){
    let validateForm;

    
    document.addEventListener('submit', function(e){
        e.preventDefault();
        validateForm = new FormValidator(e.target);
        if(validateForm.emptyFields()) {
            console.log('Deu certo')
        } else {
            console.log('Falhou')
        }
        
        validateForm.onlyLetters('cpf')
    })
})();