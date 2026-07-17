import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactPage } from './contact.page';

describe('ContactPage', () => {
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ContactPage] }).compileComponents();
    fixture = TestBed.createComponent(ContactPage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
