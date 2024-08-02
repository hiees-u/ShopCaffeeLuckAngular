import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleIconComponent } from './subtitle-icon.component';

describe('SubtitleIconComponent', () => {
  let component: SubtitleIconComponent;
  let fixture: ComponentFixture<SubtitleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtitleIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
