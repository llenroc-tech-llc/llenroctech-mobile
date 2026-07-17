import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiAssistantPage } from './ai-assistant.page';

describe('AiAssistantPage', () => {
  let fixture: ComponentFixture<AiAssistantPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AiAssistantPage] }).compileComponents();
    fixture = TestBed.createComponent(AiAssistantPage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
