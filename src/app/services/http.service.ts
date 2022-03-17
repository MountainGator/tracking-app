import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, firstValueFrom } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  async getData (tracking: any) {
    const res = await axios.get(`https://www.jet-airways-stl.com/gt5ws.nsf/ws_trace?openagent&a=${tracking}&noobject=false`);
    console.log(res);
    // const res = await this.http.get(`https://www.jet-airways-stl.com/gt5ws.nsf/ws_trace?openagent&a=20549243806&noobject=false`)
    return res.data[0].awbs;
  }
}
