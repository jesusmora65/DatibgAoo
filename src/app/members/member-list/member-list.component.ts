import { Component } from '@angular/core';
import { Member } from '../../models/members.model';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
  members : Member[] = [];

  constructor(private membersService: MembersService){}

  loadMembers(){
    this.membersService.getMembers().subscribe({
      next: response => this.members = response
    });
  }
}
