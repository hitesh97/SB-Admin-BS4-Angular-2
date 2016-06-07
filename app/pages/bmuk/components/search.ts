import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
//import { Member } from '../datatypes/Member';
import { MemberService } from '../services/MemberService';
//import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'Search',
    templateUrl: './pages/BMUK/components/Search.html',
    styles: [`
.search-box {
  -webkit-transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
  transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: #ebebeb;
}
.search-box + label .search-icon {
  color: black;
}
.search-box:hover {
  color: white;
  background: #c8c8c8;
  box-shadow: 0 0 0 5px #3d4752;
}
.search-box:hover + label .search-icon {
  color: white;
}
.search-box:focus {
  -webkit-transition: width 0.6s cubic-bezier(0, 1.22, 0.66, 1.39), border-radius 0.6s, background 0.6s;
  transition: width 0.6s cubic-bezier(0, 1.22, 0.66, 1.39), border-radius 0.6s, background 0.6s;
  border: none;
  outline: none;
  box-shadow: none;
  padding-left: 15px;
  cursor: text;
  width: 300px;
  border-radius: auto;
  background: #ebebeb;
  color: black;
}
.search-box:focus + label .search-icon {
  color: black;
}
.search-box:not(:focus) {
  text-indent: -5000px;
}

#search-submit {
  position: relative;
  left: -5000px;
}

.search-icon {
  position: relative;
  left: -80px;
  color: white;
  cursor: pointer;
}
  `],
    providers: [MemberService],
    bindings: [MemberService]
})

export class Search {

    constructor(private _router: Router, private memberService: MemberService) {
    }

}

