import { FormGroup } from "@angular/forms";

export function passwordMatch(password,confirmPassword){
    return (formGroup: FormGroup)=>{
         const passwordControl= formGroup.controls[password];
        const passwordConfirmControl= formGroup.controls[confirmPassword]
        if(passwordConfirmControl.errors && !passwordConfirmControl.errors['passwordMatch']){
            return;
        }
        if(passwordControl.value!== passwordConfirmControl.value){
            passwordConfirmControl.setErrors({mustMatch: true});
        }
        else{
            passwordConfirmControl.setErrors(null);
        }
    }
}