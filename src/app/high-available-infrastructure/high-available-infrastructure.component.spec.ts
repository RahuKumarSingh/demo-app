import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAvailableInfrastructureComponent } from './high-available-infrastructure.component';

describe('HighAvailableInfrastructureComponent', () => {
  let component: HighAvailableInfrastructureComponent;
  let fixture: ComponentFixture<HighAvailableInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighAvailableInfrastructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighAvailableInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
