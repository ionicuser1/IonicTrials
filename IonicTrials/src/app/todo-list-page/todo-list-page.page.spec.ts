import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoListPagePage } from './todo-list-page.page';

describe('TodoListPagePage', () => {
  let component: TodoListPagePage;
  let fixture: ComponentFixture<TodoListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
