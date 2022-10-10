/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { CommonModule } from '@angular/common';
import { Component, Input,NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{ bool(loan_amount) ? (monthly_payment | currency) : "N/A"}} <br/>
                    <b>Late Payment Fee :</b> {{ bool(loan_amount) ? (late_payment | currency) : "N/A"}} <br/>
                </div>`
})
export class Test01Component {

    loan_amount:number = 0;
    monthly_payment:number | string = Boolean(this.loan_amount)? (this.loan_amount/100)* 2: "N/A";
    late_payment: number | string = Boolean(this.loan_amount) ? (+this.monthly_payment/100)* 5: "N/A";

    bool(input: number){
        return Boolean(input);
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}