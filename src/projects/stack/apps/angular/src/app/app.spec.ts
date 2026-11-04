import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the counter and update its value', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular workspace');
    expect(compiled.querySelector('output')?.textContent).toBe('0');

    compiled.querySelector<HTMLButtonElement>('[aria-label="Увеличить значение"]')?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('output')?.textContent).toBe('1');

    compiled.querySelector<HTMLButtonElement>('[aria-label="Уменьшить значение"]')?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('output')?.textContent).toBe('0');
  });
});
