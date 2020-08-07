import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomSwlAlertDialogComponent } from './custom-swl-alert-dialog.component';

describe('CustomSwlAlertDialogComponent', () => {
  let component: CustomSwlAlertDialogComponent;
  let fixture: ComponentFixture<CustomSwlAlertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSwlAlertDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSwlAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
