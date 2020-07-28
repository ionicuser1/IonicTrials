import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModulePage3Page } from './module-page3.page';

describe('ModulePage3Page', () => {
  let component: ModulePage3Page;
  let fixture: ComponentFixture<ModulePage3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModulePage3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
