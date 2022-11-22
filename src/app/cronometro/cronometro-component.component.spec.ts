import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroComponentComponent } from './cronometro-component.component';

describe('CronometroComponentComponent', () => {
  let component: CronometroComponentComponent;
  let fixture: ComponentFixture<CronometroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronometroComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronometroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
