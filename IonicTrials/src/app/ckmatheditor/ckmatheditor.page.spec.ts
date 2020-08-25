import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CkmatheditorPage } from './ckmatheditor.page';

describe('CkmatheditorPage', () => {
  let component: CkmatheditorPage;
  let fixture: ComponentFixture<CkmatheditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkmatheditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CkmatheditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
