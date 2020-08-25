import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TinymcePage } from './tinymce.page';

describe('TinymcePage', () => {
  let component: TinymcePage;
  let fixture: ComponentFixture<TinymcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinymcePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TinymcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
