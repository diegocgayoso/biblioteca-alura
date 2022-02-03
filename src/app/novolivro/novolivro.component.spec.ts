import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovolivroComponent } from './novolivro.component';

describe('NovolivroComponent', () => {
  let component: NovolivroComponent;
  let fixture: ComponentFixture<NovolivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovolivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovolivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
