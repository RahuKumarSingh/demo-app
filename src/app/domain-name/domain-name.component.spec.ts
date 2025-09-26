import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainNameComponent } from './domain-name.component';

describe('DomainNameComponent', () => {
  let component: DomainNameComponent;
  let fixture: ComponentFixture<DomainNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
