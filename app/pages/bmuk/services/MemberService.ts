import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/toPromise';
import { Member } from '../datatypes/Member';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';


@Injectable()
export class MemberService {

    public todos$: Observable<Member[]>;
    private _baseUrl: string;
    private _todosObserver: Observer<Member[]>;
    private _dataStore: {
        todos: Member[]
    };

    constructor(private _http: Http) {
        console.log('Task Service created.');
        this._baseUrl = 'http://localhost/bmukapi/api/bmuk';
        this._dataStore = { todos: [] };
        this.todos$ = new Observable(observer => this._todosObserver = observer).share();
    };

    getMembers() {
        this._http.get(`${this._baseUrl}/getheadmembers`).map(response => response.json()).subscribe(data => {
            console.log(data);
            this._dataStore.todos = data;
            this._todosObserver.next(this._dataStore.todos);
        }, error => console.log('Could not load todos.'));
    };
}

//.map((tasks: Array<any>) => {
//    let result: Array<Member> = [];
//    if (tasks) {
//        tasks.forEach((task) => {
//            result.push(new Member(task.id, task.description, task.priority, task.dueDate, task.complete));
//        });
//    }
//    return result;
//})
