import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCatComponent } from './mange-cat.component';

describe('MangeCatComponent', () => {
  let component: MangeCatComponent;
  let fixture: ComponentFixture<MangeCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangeCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
