import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksComponent],
  template: `<app-tasks></app-tasks>`
})
export class AppComponent {}