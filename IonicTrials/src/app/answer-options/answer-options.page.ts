import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-options',
  templateUrl: './answer-options.page.html',
  styleUrls: ['./answer-options.page.scss'],
})
export class AnswerOptionsPage implements OnInit {

  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
