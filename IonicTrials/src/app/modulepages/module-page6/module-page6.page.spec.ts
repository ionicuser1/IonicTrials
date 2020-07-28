import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModulePage6Page } from './module-page6.page';

describe('ModulePage6Page', () => {
  let component: ModulePage6Page;
  let fixture: ComponentFixture<ModulePage6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePage6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModulePage6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
