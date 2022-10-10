/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
    selector: 'ng-app',
    template: `
                <h2>Enter your first and last name</h2>
                <div>
                    <form [formGroup]="nameForm">
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name (required)"
                        formControlName="firstName"
                        (blur)="getDisplayName()"
                     />
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name (required)"
                        formControlName="lastName"
                        (blur)="getDisplayName()"
                     />
                    </form>

                    <h3 *ngIf="finalString">{{finalString}}</h3>
                </div>
                `,
    styles: []
})
export class UserNameComponent implements OnInit {
    nameForm: FormGroup;
    finalString = "";

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.nameForm = this.fb.group({
            firstName: ["", Validators. required],
            lastName: ["", Validators.required]
        })
    }

    getDisplayName(){
        if(this.nameForm.valid && (this.nameForm.get('firstName').touched && this.nameForm.get('lastName').touched)){
            let randomInt = Math.floor(Math.random() * 10);
            setTimeout(() => {
                this.finalString = this.nameForm.get('firstName').value.toLowerCase()+"_"+this.nameForm.get('lastName').value.toLowerCase()+"_"+randomInt;
            });
        }else{
            this.finalString = "";
        }
    }

}

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: "",
                component: UserNameComponent
            }
        ])
    ],
    declarations: [UserNameComponent]
})
export class UserNameModule { };