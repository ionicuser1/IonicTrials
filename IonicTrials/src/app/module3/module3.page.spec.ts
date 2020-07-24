import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Module3Page } from './module3.page';

describe('Module3Page', () => {
  let component: Module3Page;
  let fixture: ComponentFixture<Module3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Module3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
