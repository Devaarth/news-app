import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  constructor() { }
  likeCount =100;
  toggleLike = false;
  commentCount = 30;
  toggleComment = false;
  shareCount = 100;
  toggleShare= false;

  ngOnInit(): void {
  }

  public onLike(){
    this.toggleLike = !this.toggleLike;
    let count = this.toggleLike ? 1 : -1
    this.likeCount += count; 
  }
  public onComment(){
    this.toggleComment = !this.toggleComment;
    let count = this.toggleComment ? 1 : -1
    this.commentCount += count; 
  }
  public onShare(){
    this.toggleShare = !this.toggleShare;
    let count = this.toggleShare ? 1 : -1
    this.shareCount += count; 
  }
}

