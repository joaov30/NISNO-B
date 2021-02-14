import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobreNosPage } from './sobre-nos.page';

describe('SobreNosPage', () => {
  let component: SobreNosPage;
  let fixture: ComponentFixture<SobreNosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreNosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobreNosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
