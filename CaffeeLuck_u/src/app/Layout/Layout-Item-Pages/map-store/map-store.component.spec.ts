import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStoreComponent } from './map-store.component';

describe('MapStoreComponent', () => {
  let component: MapStoreComponent;
  let fixture: ComponentFixture<MapStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
