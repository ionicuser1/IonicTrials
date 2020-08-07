import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Notification3Component } from './notification3.component';

describe('Notification3Component', () => {
  let component: Notification3Component;
  let fixture: ComponentFixture<Notification3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Notification3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Notification3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
