import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesPage } from './services.page';

describe('ServicesPage', () => {
  let fixture: ComponentFixture<ServicesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ServicesPage] }).compileComponents();
    fixture = TestBed.createComponent(ServicesPage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
