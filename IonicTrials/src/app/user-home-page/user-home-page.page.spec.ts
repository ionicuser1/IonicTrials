import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserHomePagePage } from './user-home-page.page';

describe('UserHomePagePage', () => {
  let component: UserHomePagePage;
  let fixture: ComponentFixture<UserHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
