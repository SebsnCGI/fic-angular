import { Component, OnInit } from '@angular/core';
import {User} from '../_model/user.model';

@Component({
  selector: 'fic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    user: User = new User({firstname: 'John', lastname: 'Doe'});
}
