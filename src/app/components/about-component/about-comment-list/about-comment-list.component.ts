import { Component, OnInit } from '@angular/core';
import { CommentDataService } from '../../../services/comment-data.service';
import { Comment } from './Comment';

@Component({
  selector: 'app-about-comment-list',
  standalone: false,
  templateUrl: './about-comment-list.component.html',
  styleUrl: './about-comment-list.component.scss'
})
export class AboutCommentListComponent implements OnInit {

  comments: Comment[] = [];

  constructor(
    private commentDataService: CommentDataService,
  ){}

  loadComments(): void {
    this.commentDataService.getAll().subscribe(comments=> this.comments = comments);
  }

  ngOnInit(): void {
    this.loadComments();
  }
}
