import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Set up Angular project', completed: true, priority: 'high' },
    { id: 2, title: 'Build task service', completed: true, priority: 'high' },
    { id: 3, title: 'Create UI components', completed: false, priority: 'medium' },
  ];
  private nextId = 4;

  getTasks(): Task[] { return this.tasks; }

  addTask(title: string, priority: 'low' | 'medium' | 'high'): void {
    this.tasks.push({ id: this.nextId++, title, completed: false, priority });
  }

  toggleTask(id: number): void {
    const t = this.tasks.find(t => t.id === id);
    if (t) t.completed = !t.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}