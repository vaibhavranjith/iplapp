import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Team } from './shared/model/team.model'
import { Player } from './shared/model/player.model'
import { rolecount } from './shared/model/rolecount.model'
import { TeamAmount } from './shared/model/teamamount.model';
import {roleamount} from './shared/model/roleamount.model';
import {maxplayer} from './shared/model/maxplayer.model'
@Injectable({
  providedIn: 'root'
})
export class IplService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  teamDetails(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.baseUrl}/all`);
  }
  playerDetailsbyteam(label: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.baseUrl}/${label}`);
  }
  rolecountbyteam(label: string): Observable<rolecount[]> {
    return this.http.get<rolecount[]>(`${this.baseUrl}/role/${label}`)
  }
  teamAmountDetails(): Observable<TeamAmount[]> {
    return this.http.get<TeamAmount[]>(`${this.baseUrl}/totalamount`);
  }
  playersbyteamandrole(label:string,role:string):Observable<Player[]>{
    return this.http.get<Player[]>(`${this.baseUrl}/${label}/${role}`);
  }
  amountbyrole(label:string):Observable<roleamount[]>{
    return this.http.get<roleamount[]>(`${this.baseUrl}/amountbyrole/${label}`)
  }

  maxplayerbyrole():Observable<maxplayer[]>{
    return this.http.get<maxplayer[]>(`${this.baseUrl}/maxamountbyrole`);
  }
  searchplayer(name:string):Observable<Player[]>{
    return this.http.get<Player[]>(`${this.baseUrl}/players/search/${name}`)
  }
  
}
