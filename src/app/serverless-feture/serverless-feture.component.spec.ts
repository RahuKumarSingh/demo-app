import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlessFetureComponent } from './serverless-feture.component';

describe('ServerlessFetureComponent', () => {
  let component: ServerlessFetureComponent;
  let fixture: ComponentFixture<ServerlessFetureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerlessFetureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServerlessFetureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
