import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../services/account.service';
import { inject } from '@angular/core';
import { take } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService);
  accountService.currentUser$.pipe(take(1)).subscribe({
    next: (response) => {
      if (response) {
        req = req.clone({
          setHeaders: {
            Authorization: 'Bearer ${response.token}',
          },
        });
      }
    },
  });
  return next(req);
};
