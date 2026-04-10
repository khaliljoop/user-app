import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  constructor(private userService: UserService,private router:Router){}

  users: User[] = [];
  search = '';

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next:(data) =>{
          this.users = data;
      },

    });
  }

  get filteredUsers() {
    return this.users.filter(u =>
      u.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  goToDetail(id: number) {
  this.router.navigate(['/user', id]);
}
}
