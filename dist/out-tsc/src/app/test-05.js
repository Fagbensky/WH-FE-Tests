import { __decorate } from "tslib";
/**
 * Fix the following issues in the component :
 * * ExpressionChangedAfterItHasBeenCheckedError
 * * Spot the memory leak
 *
 */
import { Component, NgModule, Injectable, Input } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BehaviorSubject, delay } from 'rxjs';
let TestService = class TestService {
    constructor() {
        this.test = new BehaviorSubject("angular test #5");
    }
    SetTest(test) {
        this.test.next(test);
    }
};
TestService = __decorate([
    Injectable()
], TestService);
export { TestService };
let MainComponent = class MainComponent {
    constructor(_srv) {
        this._srv = _srv;
        this.test = this._srv.test.pipe(delay(0));
    }
    // Open Subscription causing memory leaks
    ngOnInit() {
    }
};
MainComponent = __decorate([
    Component({
        selector: 'ng-app',
        template: `
                <h2>Current test is:</h2>
                {{test | async}}
                <br/>
                <child [skip-current]="true"></child>
                `,
        styles: []
    })
], MainComponent);
export { MainComponent };
let TextChildComponent = class TextChildComponent {
    constructor(_srv, _router) {
        this._srv = _srv;
        this._router = _router;
        this.skip = false;
    }
    Next() {
        this._router.navigate(["test-six"]);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.skip)
                this._srv.SetTest("angular test #6");
        });
    }
};
__decorate([
    Input('skip-current')
], TextChildComponent.prototype, "skip", void 0);
TextChildComponent = __decorate([
    Component({
        selector: 'child',
        template: `Sample Child component<br/> <button (click)="Next()">next test</button>`
    })
], TextChildComponent);
export { TextChildComponent };
let MainModule = class MainModule {
};
MainModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: "",
                    component: MainComponent
                }
            ])
        ],
        declarations: [MainComponent, TextChildComponent],
        providers: [TestService]
    })
], MainModule);
export { MainModule };
;
//# sourceMappingURL=test-05.js.map