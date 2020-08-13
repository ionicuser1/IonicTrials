import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarpagePage } from './carpage.page';

describe('CarpagePage', () => {
  let component: CarpagePage;
  let fixture: ComponentFixture<CarpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
