import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Module7Page } from './module7.page';

describe('Module7Page', () => {
  let component: Module7Page;
  let fixture: ComponentFixture<Module7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Module7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
