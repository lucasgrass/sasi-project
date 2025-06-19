import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './entities/task.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: uuidv4(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      completed: false,
      status: 'pending',
      createdAt: new Date()
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task ${id} not found.`);
    }
    
    task.completed = updateTaskDto.completed;
    task.status = updateTaskDto.completed ? 'done' : 'pending';
    return task;
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task ${id} not found.`);
    }
    this.tasks.splice(index, 1);
  }
}
