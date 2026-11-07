import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly count = signal(0);

  protected decrement(): void {
    if (this.count() > 0) {
      this.count.update((value) => value - 1);
    }
  }

  protected increment(): void {
    this.count.update((value) => value + 1);
  }
}
