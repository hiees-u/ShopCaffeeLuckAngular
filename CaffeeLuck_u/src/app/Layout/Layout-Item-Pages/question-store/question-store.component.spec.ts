import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionStoreComponent } from './question-store.component';

describe('QuestionStoreComponent', () => {
  let component: QuestionStoreComponent;
  let fixture: ComponentFixture<QuestionStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
