import { FormControl } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";

export const cantBeStrinder = (control: FormControl) => {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'strider') {
        return {
            noStrider: true
        }
    }
    return null;
}