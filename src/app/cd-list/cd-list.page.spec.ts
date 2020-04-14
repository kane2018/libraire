import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CdListPage } from './cd-list.page';

describe('CdListPage', () => {
  let component: CdListPage;
  let fixture: ComponentFixture<CdListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CdListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
