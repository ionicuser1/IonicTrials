import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModulePage2Page } from './module-page2.page';

describe('ModulePage2Page', () => {
  let component: ModulePage2Page;
  let fixture: ComponentFixture<ModulePage2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModulePage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
