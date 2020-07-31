import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Modulepage8Page } from './modulepage8.page';

describe('Modulepage8Page', () => {
  let component: Modulepage8Page;
  let fixture: ComponentFixture<Modulepage8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulepage8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Modulepage8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
