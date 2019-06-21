import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';
 
@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
                    <div class="form-group">
                        <h1><label>Input phone</label></h1>
                        <input class="form-control" name="phone" ngModel required pattern="[0-9]{9}" />
                    </div>
                    <div class="form-group">
                        <button 
                                class="btn btn-default">Submit</button>
                    </div>
                </form>
                <div *ngIf="payload" class="form-row">
                    <strong>Phone:</strong><br>{{payload  | split}}
                 </div>                
`
})
export class AppComponent {
    payload:string;

    constructor(){
        this.payload='';
    }
    onSubmit(myform: NgForm){
        if(myform.value.phone.length===9){
            this.payload = myform.value.phone;        
            console.log(this);
        }
     }
}