import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface Test {
    test: boolean;
}

@Component({
    template: `<div class="msg"><img [src]="icon">{{message}}</div>`,
    styles: [
        `img {
            width: 30px;
            height: 30px;
            margin-right: 5px;
        } 
        .msg {
            display: flex;
            align-items: center;
        }`
    ]
})


export class TestDialogComponent implements OnInit {
    message: string;
    icon: string;
    constructor(
        public dialogRef: MatDialogRef<TestDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Test) { }
    ngOnInit() {
        this.message = this.data.test ? 'Connection Established' : 'Connection Error'
        this.icon = this.data.test? '../../../assets/Green_tick.svg': '../../../assets/cross.png'
    }
}