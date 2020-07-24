import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Module1Page } from './module1.page';

describe('Module1Page', () => {
  let component: Module1Page;
  let fixture: ComponentFixture<Module1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Module1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
