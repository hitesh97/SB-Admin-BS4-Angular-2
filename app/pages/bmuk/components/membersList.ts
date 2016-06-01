import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'MembersList',
    templateUrl: './pages/BMUK/components/MembersList.html'
})

export class MembersList {
	constructor(private _router: Router) { }
	gotoDashboard() {
		this._router.navigate(['Home']);
	}
}
