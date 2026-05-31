import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTitle = '';
  newPriority: 'low' | 'medium' | 'high' = 'medium';
  filter: 'all' | 'active' | 'completed' = 'all';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void { this.tasks = this.taskService.getTasks(); }

  get filtered() {
    if (this.filter === 'active') return this.tasks.filter(t => !t.completed);
    if (this.filter === 'completed') return this.tasks.filter(t => t.completed);
    return this.tasks;
  }

  add() {
    if (this.newTitle.trim()) {
      this.taskService.addTask(this.newTitle.trim(), this.newPriority);
      this.newTitle = '';
    }
  }

  toggle(id: number) { this.taskService.toggleTask(id); }
  delete(id: number) { this.taskService.deleteTask(id); }
}