import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeStoreComponent } from './welcome-store.component';

describe('WelcomeStoreComponent', () => {
  let component: WelcomeStoreComponent;
  let fixture: ComponentFixture<WelcomeStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
