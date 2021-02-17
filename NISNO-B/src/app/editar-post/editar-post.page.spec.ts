import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarPostPage } from './editar-post.page';

describe('EditarPostPage', () => {
  let component: EditarPostPage;
  let fixture: ComponentFixture<EditarPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
