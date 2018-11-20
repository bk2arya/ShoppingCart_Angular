import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  
  login = false;
  
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://localhost:8083/getAllUsers');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post<User>('http://localhost:8083/userRegistration', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.get<User[]>('http://localhost:8083/deleteUser/' + id);
    }
}