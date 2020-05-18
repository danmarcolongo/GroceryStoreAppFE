import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {
  headers = [
    {
      name: 'Home',
      url: 'home-page',
    },
    {
      name: 'Marketplace',
      url: 'marketplace-page',
    },
    {
      name: 'Contact Us',
      url: 'contact-us-page',
    },
    {
      name: 'Inventory',
      url: 'inventory-page',
    },
  ];

  constructor(public dialog: MatDialog) {}

  username: string;
  password: string;

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    });
  }

}
