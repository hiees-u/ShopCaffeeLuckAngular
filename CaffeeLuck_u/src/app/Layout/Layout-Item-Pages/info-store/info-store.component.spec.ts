import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStoreComponent } from './info-store.component';

describe('InfoStoreComponent', () => {
  let component: InfoStoreComponent;
  let fixture: ComponentFixture<InfoStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
