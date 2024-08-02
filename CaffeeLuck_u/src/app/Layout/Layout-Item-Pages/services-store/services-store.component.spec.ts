import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStoreComponent } from './services-store.component';

describe('ServicesStoreComponent', () => {
  let component: ServicesStoreComponent;
  let fixture: ComponentFixture<ServicesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
