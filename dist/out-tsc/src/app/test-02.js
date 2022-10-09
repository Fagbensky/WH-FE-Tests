import { __decorate } from "tslib";
/**
 * Update the following components to meet the requirements :
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
let TextField = class TextField {
    constructor() {
        this.outString = new EventEmitter();
        this.field = "Test";
    }
    ngOnInit() {
        this.emitText(this.field);
    }
    emitText(event) {
        console.log(event);
        this.outString.emit(event);
    }
};
__decorate([
    Output()
], TextField.prototype, "outString", void 0);
TextField = __decorate([
    Component({
        selector: 'textfield',
        template: '<input [(ngModel)]="field" type="text" value="" (ngModelChange)="emitText($event)" />'
    })
], TextField);
export { TextField };
let ChildComponent = class ChildComponent {
    constructor() {
        this.outString = new EventEmitter();
    }
    emitTitle(event) {
        this.outString.emit(event);
    }
};
__decorate([
    Output()
], ChildComponent.prototype, "outString", void 0);
ChildComponent = __decorate([
    Component({
        selector: 'child-component',
        template: `<h2>Title:<h2><br/><textfield (outString)="emitTitle($event)"></textfield>`
    })
], ChildComponent);
export { ChildComponent };
let Test02Component = class Test02Component {
    constructor() {
        this.title = "";
    }
    setTitle(event) {
        this.title = event;
    }
};
Test02Component = __decorate([
    Component({
        selector: 'ng-app',
        template: `<div>
                    <child-component (outString)="setTitle($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
    })
], Test02Component);
export { Test02Component };
let Test02Module = class Test02Module {
};
Test02Module = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            RouterModule.forChild([
                {
                    path: "",
                    component: Test02Component
                }
            ])
        ],
        declarations: [Test02Component, ChildComponent, TextField]
    })
], Test02Module);
export { Test02Module };
;
//# sourceMappingURL=test-02.js.map