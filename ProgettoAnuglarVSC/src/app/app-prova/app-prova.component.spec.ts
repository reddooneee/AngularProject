import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProvaComponent } from './app-prova.component';

describe('AppProvaComponent', () => {
  let component: AppProvaComponent;
  let fixture: ComponentFixture<AppProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
