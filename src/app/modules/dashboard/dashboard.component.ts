import { Component, OnInit } from '@angular/core';
import { ComponentLookup } from 'src/app/decorators/components.decorators';

@ComponentLookup('dashboard')
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
