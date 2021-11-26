import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlteraralumnoaadPage } from './alteraralumnoaad.page';

describe('AlteraralumnoaadPage', () => {
  let component: AlteraralumnoaadPage;
  let fixture: ComponentFixture<AlteraralumnoaadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraralumnoaadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlteraralumnoaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
