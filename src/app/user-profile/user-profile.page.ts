import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  auth:AuthService = null;
  constructor( auth: AuthService) { 
    this.auth = auth;
  }

  ngOnInit() {
  }

}
