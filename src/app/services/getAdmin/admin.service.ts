import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/models/admin.model';
import { AdminPost} from 'src/app/Models/adminPost.model'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private serviceUlr = environment.adminApiUrl;
  constructor(private http: HttpClient) { }

    getAdmin(): Observable<Admin[]> {
      return this.http.get<Admin[]>(this.serviceUlr);
    }

    deleteAdmin(id){
      return this.http.delete(this.serviceUlr + "/" + id);
    }
    postAdmin = async(admin : AdminPost) => {
      await this.http.post<AdminPost>(this.serviceUlr, admin);
    }
}
