import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Module6Page } from './module6.page';

describe('Module6Page', () => {
  let component: Module6Page;
  let fixture: ComponentFixture<Module6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Module6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
