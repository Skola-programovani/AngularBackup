import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdminService } from '../../services/getAdmin/admin.service';
import { DataSource } from '@angular/cdk/collections';
import { Admin } from 'src/app/Models/admin.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.scss']
})
export class AdmintableComponent implements OnInit {

  dataSource = new AdminDataSource(this.adminService);
  displayedColumns = ['id','username','email', 'delete'];
  selectedAdmin: Admin;
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.refresh();
  }
  onClick(admin: Admin){
    this.selectedAdmin = admin;
    this.adminService.deleteAdmin(admin.id).subscribe(result => this.refresh());
    this.refresh();
  }
  onPost(username: string, email: string, password: string) {
    this.adminService.postAdmin({username, email, password }) //subscribe (refresh)
    .then(() => this.refresh());



  }
  refresh(){
    this.dataSource = new AdminDataSource(this.adminService);
  }

}
export class AdminDataSource extends DataSource<any>{
  constructor(private adminService : AdminService){
    super();
  }

  connect(): Observable<Admin[]> {
    return this.adminService.getAdmin();
    
  }

  disconnect() {}
}
