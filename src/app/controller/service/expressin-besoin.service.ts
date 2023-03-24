import {createEnvironmentInjector, Injectable} from '@angular/core';
import {ExpressionBesoin} from '../model/expression-besoin';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Environment} from "@angular/cli/lib/config/workspace-schema";

@Injectable({
  providedIn: 'root'
})
export class ExpressinBesoinService {
   private _expressinBesoin = new ExpressionBesoin();
   private _expressionBesoins = new Array<ExpressionBesoin>;
   private _url =  'http://localhost:8036/api/v1/expressionbesoin/';
  public save(expressionBesoin: ExpressionBesoin): Observable<number>{
     return this._http.post<number>(this._url, expressionBesoin);
   }
  constructor(private _http: HttpClient) { }

  get expressinBesoin(): ExpressionBesoin {
    if(this._expressinBesoin == null){
      this._expressinBesoin = new ExpressionBesoin();
    }
    return this._expressinBesoin;
  }

  set expressinBesoin(value: ExpressionBesoin) {
    this._expressinBesoin = value;
  }
  get expressionBesoins(): Array<ExpressionBesoin> {
    if(this._expressionBesoins == null){
      this._expressionBesoins = new Array<ExpressionBesoin>();
    }
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }


}
