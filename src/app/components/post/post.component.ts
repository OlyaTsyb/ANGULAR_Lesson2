import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Post} from '../../models/Post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  bubbleUpPost = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPost(post: Post): void {
    this.bubbleUpPost.emit(post);
  }
}
