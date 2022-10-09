/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
let Test01Component = class Test01Component {
    constructor() {
        this.loan_amount = 100000;
        this.monthly_payment = Boolean(this.loan_amount) ? (this.loan_amount / 100) * 2 : "N/A";
        this.late_payment = Boolean(this.loan_amount) ? (+this.monthly_payment / 100) * 5 : "N/A";
    }
    bool(input) {
        return Boolean(input);
    }
};
Test01Component = __decorate([
    Component({
        selector: 'ng-app',
        template: `<div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{ bool(loan_amount) ? (monthly_payment | currency) : "N/A"}} <br/>
                    <b>Late Payment Fee :</b> {{ bool(loan_amount) ? (late_payment | currency) : "N/A"}} <br/>
                </div>`
    })
], Test01Component);
export { Test01Component };
let Test01Module = class Test01Module {
};
Test01Module = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: "",
                    component: Test01Component
                }
            ])
        ],
        declarations: [Test01Component]
    })
], Test01Module);
export { Test01Module };
//# sourceMappingURL=test-01.js.map