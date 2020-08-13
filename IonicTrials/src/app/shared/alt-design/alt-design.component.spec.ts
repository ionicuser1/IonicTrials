import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltDesignComponent } from './alt-design.component';

describe('AltDesignComponent', () => {
  let component: AltDesignComponent;
  let fixture: ComponentFixture<AltDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltDesignComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
