import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';

const PROBLEMS: Problem[] = [
  {
  	"id": 1,
  	"name": "Two Sum",
  	"desc": "Given an array",
  	"difficulty": "easy"
  },
  {
  	"id": 2,
  	"name": "3Sum",
  	"desc": "Given an array",
  	"difficulty": "medium"
  }
];

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor() { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems() {
    this.problems = PROBLEMS;
  }

}
