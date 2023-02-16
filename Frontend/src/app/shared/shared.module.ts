import { NgModule } from "@angular/core";
import { HttpClientModule  } from '@angular/common/http';
import { NgbCollapseModule, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [

    ],
    imports: [
        HttpClientModule,
        NgbCollapseModule,
        NgbDatepickerModule,
        NgbModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        NgbCollapseModule,
        NgbDatepickerModule,
        NgbModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    providers: [
    ]
})

export class SharedModule {}