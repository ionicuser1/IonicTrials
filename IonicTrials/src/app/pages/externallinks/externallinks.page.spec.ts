import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExternallinksPage } from './externallinks.page';

describe('ExternallinksPage', () => {
  let component: ExternallinksPage;
  let fixture: ComponentFixture<ExternallinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternallinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExternallinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
