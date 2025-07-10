import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUser } from '../add-user/add-user';
import { UsersStore } from '../../store/user.store';

@Component({
  selector: 'users-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit {
  private dialog = inject(MatDialog);
  public usersStore = inject(UsersStore);

  filterValue = signal('');

  filteredUsers = computed(() => {
    const filter = this.filterValue().toLowerCase();
    return this.usersStore.users().filter(user =>
      (`${user.firstName} ${user.middleName} ${user.lastName}`.toLowerCase().includes(filter) ||
        user.email.toLowerCase().includes(filter) ||
        user.role.toLowerCase().includes(filter) ||
        user.status.toLowerCase().includes(filter))
    );
  });

  displayedColumns: string[] = ['fullName', 'email', 'role', 'status', 'actions'];

  openAddUserDialog() {
    this.dialog.open(AddUser, {
      data: {}
    });
  }

  onFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filterValue.set(value);
  }

  editUser(user: any) {
    // Implement edit logic
    alert('Edit user: ' + user.firstName);
  }

  viewUser(user: any) {
    // Implement view logic
    alert('View user: ' + user.firstName);
  }

  toggleDisable(user: any) {
    // Implement toggle disable logic
    // This should call a method on the store to update the user's status
    alert('Toggle disable for: ' + user.firstName);
  }

  ngOnInit(): void {}
}
