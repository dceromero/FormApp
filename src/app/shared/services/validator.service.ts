import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

    public emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";;

    public cantBeStrinder(control: FormControl){
        const value: string = control.value?.trim().toLowerCase();
        if (value === 'strider') {
            return {
                noStrider: true
            }
        }
        return null;
    }
}