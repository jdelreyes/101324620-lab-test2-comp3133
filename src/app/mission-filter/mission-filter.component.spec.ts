import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFilterComponent } from './mission-filter.component';

describe('MissionFilterComponent', () => {
  let component: MissionFilterComponent;
  let fixture: ComponentFixture<MissionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
