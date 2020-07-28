import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModulePage4Page } from './module-page4.page';

describe('ModulePage4Page', () => {
  let component: ModulePage4Page;
  let fixture: ComponentFixture<ModulePage4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModulePage4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
