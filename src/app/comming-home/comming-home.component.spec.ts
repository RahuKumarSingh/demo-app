import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingHomeComponent } from './comming-home.component';

describe('CommingHomeComponent', () => {
  let component: CommingHomeComponent;
  let fixture: ComponentFixture<CommingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommingHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
