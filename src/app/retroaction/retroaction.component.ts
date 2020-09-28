import { Component, OnInit } from '@angular/core';
import { RetroactionService } from '../retroaction.service';

@Component({
  selector: 'app-retroaction',
  templateUrl: './retroaction.component.html',
  styleUrls: ['./retroaction.component.css']
})
export class RetroactionComponent implements OnInit {

  constructor(public retroactionService:RetroactionService) { }

  ngOnInit(): void {
    
  }


}
