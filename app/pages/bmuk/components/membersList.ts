import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import { Member } from '../datatypes/Member';
import { MemberService } from '../services/MemberService';
import {Observable} from 'rxjs/Observable';
import {Search} from './Search';

@Component({
    selector: 'MembersList',
    templateUrl: './pages/BMUK/components/MembersList.html',
    providers: [MemberService],
    bindings: [MemberService],
    directives: [Search]
})

export class MembersList {

    BMUKMembers: Observable<Member[]>;

    constructor(private _router: Router, private memberService: MemberService) {
    }

    ngOnInit() {
        this.BMUKMembers = this.memberService.members$;
        this.memberService.getMembers();
    }

	gotoDashboard() {
		this._router.navigate(['Home']);
    }

    showMemberDetails(selectedMember: Member) {
        this._router.navigate(['MemberDetails', { memberId: selectedMember.Id }]);
    }
}

