import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';

@Component({ selector: 'lib-task-list', templateUrl: './task-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TaskListComponent {
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  constructor(@Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort, @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort) {
  }

  onTasksClicked(id: string): void {
    this._removesTaskDto.remove(id);
  }
}
