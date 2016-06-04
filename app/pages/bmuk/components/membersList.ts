import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import { Member } from '../datatypes/Member';
import { MemberService } from '../services/MemberService';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'MembersList',
    templateUrl: './pages/BMUK/components/MembersList.html',
    providers: [MemberService],
    bindings: [MemberService]
})

export class MembersList {

    BMUKMembers: Observable<Member[]>;

    constructor(private _router: Router, private memberService: MemberService) {
    }

    ngOnInit() {
        this.BMUKMembers = this.memberService.todos$;
        this.memberService.getMembers();
    }

	gotoDashboard() {
		this._router.navigate(['Home']);
	}
}

