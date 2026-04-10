import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private userService:UserService
  ){}

  user:User={
    id: 0,
    name: '',
    email: '',
    phone: '',
    website: ''
  };

ngOnInit() {
  const id = this.route.snapshot.params['id'];

  this.userService.getUser(id).subscribe({
    next:(data)=> {
      this.user = data;
    },
  });
}

}
