import { Injectable } from '@angular/core';
import { BaseService } from '../../../base/util/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PerfilEditService extends BaseService {

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { super (http, snackBar); }
}
