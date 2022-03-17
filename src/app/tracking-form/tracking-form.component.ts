import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tracking-form',
  templateUrl: './tracking-form.component.html',
  styleUrls: ['./tracking-form.component.css']
})
export class TrackingFormComponent implements OnInit {
  public trackingForm:FormGroup;
  shipment: string = '';
  dataList: any = [];

  constructor(
    private http: HttpService,
    private FormBuilder: FormBuilder
  ) { 
    this.trackingForm = this.FormBuilder.group({
      tracking: ''
  })}

  ngOnInit(): void {
  }

  async handleSubmit () {
    this.shipment = this.trackingForm.get('tracking')?.value;
    console.log(this.shipment);
    const res = await this.http.getData(this.shipment);
    console.log(res);
    this.dataList = res;
  }
}
