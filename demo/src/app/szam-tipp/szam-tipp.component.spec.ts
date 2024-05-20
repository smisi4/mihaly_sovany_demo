import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamTippComponent } from './szam-tipp.component';

describe('SzamTippComponent', () => {
  let component: SzamTippComponent;
  let fixture: ComponentFixture<SzamTippComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzamTippComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SzamTippComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
