import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DtablePage } from './dtable.page';

describe('DtablePage', () => {
  let component: DtablePage;
  let fixture: ComponentFixture<DtablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DtablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
