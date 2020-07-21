import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminUserHomePage } from './admin-user-home.page';

describe('AdminUserHomePage', () => {
  let component: AdminUserHomePage;
  let fixture: ComponentFixture<AdminUserHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUserHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
