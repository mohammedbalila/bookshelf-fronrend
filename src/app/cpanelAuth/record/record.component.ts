import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit() {
  }

}
