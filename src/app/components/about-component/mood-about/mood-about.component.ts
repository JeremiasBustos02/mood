import { Component, ViewChild } from '@angular/core';
import { AboutCommentListComponent } from '../about-comment-list/about-comment-list.component';


@Component({
  selector: 'app-mood-about',
  standalone: false,
  templateUrl: './mood-about.component.html',
  styleUrl: './mood-about.component.scss'
})
export class MoodAboutComponent {
  @ViewChild('commentList') commentListComponent!: AboutCommentListComponent;

  onCommentAdded() {
    this.commentListComponent.loadComments(); // Recargo la lista
  }
}
