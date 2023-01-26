import { NgModule } from "@angular/core";
import { HttpClientModule  } from '@angular/common/http';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [

    ],
    imports: [
        HttpClientModule,
        NgbCollapseModule,
        NgbModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
    ]
})

export class SharedModule {}