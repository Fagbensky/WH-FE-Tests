/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, EventEmitter, NgModule, OnInit, Output, ViewChild  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector : 'textfield',
    template : '<input [(ngModel)]="field" type="text" value="" (ngModelChange)="emitText($event)" />'
})
export class TextField implements OnInit{
    @Output() outString: EventEmitter<string> = new EventEmitter();

    field = "Test";
    
    ngOnInit(){
        this.emitText(this.field);
    }

    emitText(event){
        console.log(event);
        this.outString.emit(event);
    }


}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield (outString)="emitTitle($event)"></textfield>`
})
export class ChildComponent {
    @Output() outString: EventEmitter<string> = new EventEmitter();
    
    emitTitle(event){
        this.outString.emit(event);
    }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component (outString)="setTitle($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";

    setTitle(event){
        this.title = event;
    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};