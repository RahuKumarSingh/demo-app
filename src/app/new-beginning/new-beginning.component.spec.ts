import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBeginningComponent } from './new-beginning.component';

describe('NewBeginningComponent', () => {
  let component: NewBeginningComponent;
  let fixture: ComponentFixture<NewBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBeginningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
