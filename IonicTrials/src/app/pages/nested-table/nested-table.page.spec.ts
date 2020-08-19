import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NestedTablePage } from './nested-table.page';

describe('NestedTablePage', () => {
  let component: NestedTablePage;
  let fixture: ComponentFixture<NestedTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NestedTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
