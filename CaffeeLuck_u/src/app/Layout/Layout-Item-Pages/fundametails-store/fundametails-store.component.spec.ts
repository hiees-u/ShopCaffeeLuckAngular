import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundametailsStoreComponent } from './fundametails-store.component';

describe('FundametailsStoreComponent', () => {
  let component: FundametailsStoreComponent;
  let fixture: ComponentFixture<FundametailsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundametailsStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundametailsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
