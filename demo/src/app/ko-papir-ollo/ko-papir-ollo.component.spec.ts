import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoPapirOlloComponent } from './ko-papir-ollo.component';

describe('KoPapirOlloComponent', () => {
  let component: KoPapirOlloComponent;
  let fixture: ComponentFixture<KoPapirOlloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoPapirOlloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KoPapirOlloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
