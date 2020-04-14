import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LendCdPage } from './lend-cd.page';

describe('LendCdPage', () => {
  let component: LendCdPage;
  let fixture: ComponentFixture<LendCdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendCdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LendCdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
