import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../../../shared/shared.module';

import { State } from '../../examples.state';
import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
    let component: CrudComponent;
    let fixture: ComponentFixture<CrudComponent>;
    let store: MockStore<State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                NoopAnimationsModule,
                RouterTestingModule,
                TranslateModule.forRoot()
            ],
            providers: [
                provideMockStore({
                    initialState: {
                        examples: {
                            books: {
                                ids: [],
                                entities: {}
                            }
                        }
                    }
                })
            ],
            declarations: [CrudComponent]
        }).compileComponents();
        store = TestBed.get(Store);
        fixture = TestBed.createComponent(CrudComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
