import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { NotFoundException } from '@nestjs/common';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a task', () => {
      const dto: CreateTaskDto = {
        title: 'Title',
        description: 'Description'
      };
      const task = service.create(dto);
      expect(task.title).toBe(dto.title);
      expect(task.description).toBe(dto.description);
      expect(task.completed).toBe(false);
      expect(task.status).toBe('pending');
      expect(task.id).toBeDefined();
      expect(task.createdAt).toBeInstanceOf(Date);
    });
  });

  describe('findAll', () => {
    it('should return all tasks', () => {
      service.create({ title: 'Title 1', description: 'Description 1' });
      service.create({ title: 'Title 2', description: 'Description 2' });
      service.create({ title: 'Title 3', description: 'Description 3' });
      const tasks = service.findAll();
      expect(tasks.length).toBe(3);
    });
  });

  describe('update', () => {
    it('should update the task to done', () => {
      const task = service.create({ title: 'Title', description: 'Description' });
      const updateDto: UpdateTaskDto = { completed: true };
      const updated = service.update(task.id, updateDto);
      expect(updated.completed).toBe(true);
      expect(updated.status).toBe('done');
    });
  });

  describe('update', () => {
    it('should update the task to peding', () => {
      const task = service.create({ title: 'Title', description: 'Description' });
      const updateDto: UpdateTaskDto = { completed: false };
      const updated = service.update(task.id, updateDto);
      expect(updated.completed).toBe(false);
      expect(updated.status).toBe('pending');
    });
  });

  describe('remove', () => {
    it('should remove a task', () => {
      const task = service.create({ title: 'Title', description: 'Description' });
      service.remove(task.id);
      expect(service.findAll().length).toBe(0);
    });
  });

  it('should throw NotFoundException if updating task do not exist', () => {
    const updateDto: UpdateTaskDto = { completed: true };
    expect(() => service.update('id-not-exist', updateDto)).toThrow(NotFoundException);
  });

  it('should throw NotFoundException if removing task do not exist', () => {
    expect(() => service.remove('id-not-exist')).toThrow(NotFoundException);
  });
});
