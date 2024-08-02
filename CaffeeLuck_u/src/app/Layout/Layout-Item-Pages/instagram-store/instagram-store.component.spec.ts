import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramStoreComponent } from './instagram-store.component';

describe('InstagramStoreComponent', () => {
  let component: InstagramStoreComponent;
  let fixture: ComponentFixture<InstagramStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
