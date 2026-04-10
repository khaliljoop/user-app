import { Component,  } from '@angular/core';
import { FormsModule,} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
constructor(private userService: UserService) {}

   users: User[] = [];


   submit(form: any) {

    if (form.invalid) return;

    this.userService.addUser(form.value).subscribe({
      next: (res) => {

        // 🔥 ajouter le user dans la liste
        this.users.unshift(res); // ou push(res)

        form.reset();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}



