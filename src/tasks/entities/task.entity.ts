/* eslint-disable prettier/prettier */
export type TaskStatus = 'pending' | 'done';

export class Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    status: TaskStatus;
    createdAt: Date
}
