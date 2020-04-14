import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LendBookPage } from './lend-book.page';

describe('LendBookPage', () => {
  let component: LendBookPage;
  let fixture: ComponentFixture<LendBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LendBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
