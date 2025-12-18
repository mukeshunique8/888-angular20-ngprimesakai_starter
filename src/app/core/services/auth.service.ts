import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tokenKey = 'auth_token';
    private userSubject = new BehaviorSubject<any | null>(null);
    public user$ = this.userSubject.asObservable();

    constructor(
        private apiService: ApiService,
        private router: Router
    ) {
        this.loadUser();
    }

    login(credentials: { username: string; password: string }): Observable<any> {
        return this.apiService.post<{ access_token: string; expires_in: number }>('/token', credentials).pipe(
            tap((response) => {
                this.setToken(response.access_token);
                this.router.navigate(['/admin']);
            })
        );
    }

    logout(): void {
        localStorage.removeItem(this.tokenKey);
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    private setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
        this.loadUser();
    }

    private loadUser(): void {
        const token = this.getToken();
        if (token) {
            try {
                const decoded: any = jwtDecode(token);
                const user = {
                    id: decoded['user.id'],
                    username: decoded['user.username'],
                    email: decoded['user.email'],
                    fullname: decoded['user.fullname'],
                    rolename: decoded['user.rolename'],
                    role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
                };
                this.userSubject.next(user);
            } catch (error) {
                console.error('Invalid token', error);
                this.logout();
            }
        }
    }
}
