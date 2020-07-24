import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Module5Page } from './module5.page';

describe('Module5Page', () => {
  let component: Module5Page;
  let fixture: ComponentFixture<Module5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Module5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
