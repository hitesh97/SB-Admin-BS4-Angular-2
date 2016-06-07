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

    public members$: Observable<Member[]>;

    private _baseUrl: string;
    private _membersObserver: Observer<Member[]>;

    private _dataStore: {
        members: Member[]
    };


    constructor(private _http: Http) {
        this._baseUrl = 'http://localhost/bmukapi/api/bmuk';
        this._dataStore = { members: []};
        this.members$ = new Observable(observer => this._membersObserver = observer).share();
    };

    getMembers() {
        this._http.get(`${this._baseUrl}/getheadmembers`).map(response => response.json()).subscribe(data => {
            this._dataStore.members = data;
            this._membersObserver.next(this._dataStore.members);
        }, error => console.log('Could not load members.'));
    };

    getMember(memberId: number) {
        return this._http.get(`${this._baseUrl}/getmember/${memberId}`).map(response => response.json());
    };
}
