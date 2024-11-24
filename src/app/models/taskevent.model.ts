export class TaskEvent{

    action:string;
    taskid:number;



        constructor(action:string, taskid:number){
            this.action = action,
            this.taskid = taskid
        }
}