import { NgModule } from "@angular/core";
import { HttpClientModule  } from '@angular/common/http';
import { NgbCollapseModule, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [

    ],
    imports: [
        HttpClientModule,
        NgbCollapseModule,
        NgbDatepickerModule,
        NgbModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        NgbCollapseModule,
        NgbDatepickerModule,
        NgbModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
    ]
})

export class SharedModule {}