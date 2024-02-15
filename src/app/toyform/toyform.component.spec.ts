import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyformComponent } from './toyform.component';

describe('ToyformComponent', () => {
  let component: ToyformComponent;
  let fixture: ComponentFixture<ToyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToyformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
