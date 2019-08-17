import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToolbarComponent } from './form-toolbar.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FormToolbarComponent', () => {
    let component: FormToolbarComponent;
    let fixture: ComponentFixture<FormToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, TranslateModule.forRoot(), MatDialogModule, NoopAnimationsModule],
            declarations: [FormToolbarComponent],
            providers: [
                provideMockStore({
                    initialState: {}
                })
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
