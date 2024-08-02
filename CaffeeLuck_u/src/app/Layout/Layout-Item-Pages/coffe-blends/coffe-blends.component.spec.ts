import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeBlendsComponent } from './coffe-blends.component';

describe('CoffeBlendsComponent', () => {
  let component: CoffeBlendsComponent;
  let fixture: ComponentFixture<CoffeBlendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeBlendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
