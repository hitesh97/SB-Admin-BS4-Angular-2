import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import { Member } from '../datatypes/Member';
import { MemberService } from '../services/MemberService';
//import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'MemberDetails',
    templateUrl: './pages/BMUK/components/MemberDetails.html',
    providers: [MemberService],
    bindings: [MemberService]
})

export class MemberDetails {

    public BMUKMember: Member;

    constructor(private _router: Router, private _routeParams: RouteParams, private memberService: MemberService) {
    }

    ngOnInit() {

        let selectedMemberId: number = parseInt(this._routeParams.get('memberId'));

        this.memberService.getMember(selectedMemberId).subscribe(data => {
            this.BMUKMember = data;
        }, error => console.log(`Could not load member : ${selectedMemberId} \r\n ${error}`));

    }

	gotoDashboard() {
		this._router.navigate(['Home']);
    }

}

