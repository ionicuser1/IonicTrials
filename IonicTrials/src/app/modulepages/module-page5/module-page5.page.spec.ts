import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModulePage5Page } from './module-page5.page';

describe('ModulePage5Page', () => {
  let component: ModulePage5Page;
  let fixture: ComponentFixture<ModulePage5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModulePage5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
