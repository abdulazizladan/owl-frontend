import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddUser } from '../add-user/add-user';

export interface User {
  id: string;
  fullName: string;
  role: 'admin' | 'staff' | 'student' | 'guardian';
  status: 'active' | 'suspended';
  email: string;
  phone?: string;
  createdAt: Date;
}

@Component({
  selector: 'users-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit {

  private dialog = inject(MatDialog);

  // Table properties
  displayedColumns: string[] = ['fullName', 'role', 'status', 'actions'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Sample data
  users: User[] = [
    {
      id: '1',
      fullName: 'John Doe',
      role: 'admin',
      status: 'active',
      email: 'john.doe@school.com',
      phone: '+1234567890',
      createdAt: new Date('2024-01-15')
    },
    {
      id: '2',
      fullName: 'Jane Smith',
      role: 'staff',
      status: 'active',
      email: 'jane.smith@school.com',
      phone: '+1234567891',
      createdAt: new Date('2024-01-20')
    },
    {
      id: '3',
      fullName: 'Mike Johnson',
      role: 'student',
      status: 'active',
      email: 'mike.johnson@school.com',
      phone: '+1234567892',
      createdAt: new Date('2024-02-01')
    },
    {
      id: '4',
      fullName: 'Sarah Wilson',
      role: 'guardian',
      status: 'suspended',
      email: 'sarah.wilson@email.com',
      phone: '+1234567893',
      createdAt: new Date('2024-01-10')
    },
    {
      id: '5',
      fullName: 'David Brown',
      role: 'staff',
      status: 'active',
      email: 'david.brown@school.com',
      phone: '+1234567894',
      createdAt: new Date('2024-01-25')
    },
    {
      id: '6',
      fullName: 'Emily Davis',
      role: 'student',
      status: 'active',
      email: 'emily.davis@school.com',
      phone: '+1234567895',
      createdAt: new Date('2024-02-05')
    },
    {
      id: '7',
      fullName: 'Robert Miller',
      role: 'admin',
      status: 'active',
      email: 'robert.miller@school.com',
      phone: '+1234567896',
      createdAt: new Date('2024-01-05')
    },
    {
      id: '8',
      fullName: 'Lisa Garcia',
      role: 'guardian',
      status: 'active',
      email: 'lisa.garcia@email.com',
      phone: '+1234567897',
      createdAt: new Date('2024-01-30')
    }
  ];

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers(): void {
    // Simulate API call
    setTimeout(() => {
      this.dataSource.data = this.users;
    }, 1000);
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUser, {
      width: '600px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      disableClose: false,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User added:', result);
        // Add the new user to the table
        const newUser: User = {
          id: (this.users.length + 1).toString(),
          fullName: `${result.firstName} ${result.lastName}`,
          role: result.role,
          status: 'active',
          email: result.email,
          phone: result.phone,
          createdAt: new Date()
        };
        this.users.unshift(newUser);
        this.dataSource.data = [...this.users];
      }
    });
  }

  // Table filter function
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Get role display name
  getRoleDisplayName(role: string): string {
    const roleMap: { [key: string]: string } = {
      'admin': 'Administrator',
      'staff': 'Staff',
      'student': 'Student',
      'guardian': 'Guardian'
    };
    return roleMap[role] || role;
  }

  // Get role icon
  getRoleIcon(role: string): string {
    const iconMap: { [key: string]: string } = {
      'admin': 'admin_panel_settings',
      'staff': 'work',
      'student': 'school',
      'guardian': 'family_restroom'
    };
    return iconMap[role] || 'person';
  }

  // Get status color
  getStatusColor(status: string): string {
    return status === 'active' ? 'green' : 'red';
  }

  // Get status icon
  getStatusIcon(status: string): string {
    return status === 'active' ? 'check_circle' : 'block';
  }

  // Edit user
  editUser(user: User): void {
    console.log('Edit user:', user);
    // Implement edit functionality
  }

  // Delete user
  deleteUser(user: User): void {
    console.log('Delete user:', user);
    // Implement delete functionality
  }

  // Toggle user status
  toggleUserStatus(user: User): void {
    user.status = user.status === 'active' ? 'suspended' : 'active';
    this.dataSource.data = [...this.users];
  }
}
