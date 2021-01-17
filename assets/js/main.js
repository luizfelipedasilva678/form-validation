import cpfValidator from '../js/class/CpfValidator.js';
import FormValidator from '../js/class/FormValidator.js';

(function (){
    let validateForm, validateCpf;

    document.addEventListener('submit', function(e){
        e.preventDefault();
        validateForm = new FormValidator(e.target);
        
        if(validateForm.emptyFields()) {
            if(validateForm.validateUser('user') && validateForm.onlyNumbers('cpf') &&
            validateForm.onlyLetters('name') && validateForm.onlyLetters('surname') ) {
                if(validateForm.checksLength(6,12, 'password') && validateForm.checksLength(3,12, 'user') ) {
                    if(document.querySelector('#cpf').value.length === 11) {
                       validateCpf = new cpfValidator(document.querySelector('#cpf').value);
                        if(validateCpf.validateFirstNumber() && validateCpf.validateSecondNumber()) {
                            alert('Formulário enviado com sucesso');
                            e.target.submit();
                        } else {
                            alert('cpf inválido')
                        }
                    } else {
                        alert("O cpf deve ter 11 números");
                    }
                }else {
                    alert('A senha deve ter entre 6 e 12 caracteres \n O nome de usuário deve ter entre 3 e 12 caracteres');
                }
            } else {
                alert("Existem erros no seu formulário.");
            }
        } else {
            alert("Nenhum campo pode ficar vazio.");
        }
    })
})();