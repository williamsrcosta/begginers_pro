import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaIgrejaComponent } from './nova-igreja.component';

describe('NovaIgrejaComponent', () => {
  let component: NovaIgrejaComponent;
  let fixture: ComponentFixture<NovaIgrejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaIgrejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaIgrejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
