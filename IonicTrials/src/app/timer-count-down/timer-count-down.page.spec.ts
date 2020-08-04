import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimerCountDownPage } from './timer-count-down.page';

describe('TimerCountDownPage', () => {
  let component: TimerCountDownPage;
  let fixture: ComponentFixture<TimerCountDownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerCountDownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerCountDownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
