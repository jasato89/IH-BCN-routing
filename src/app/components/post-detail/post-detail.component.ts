import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: number;
  post!: Post;

  constructor(private postService: PostServiceService, private route: ActivatedRoute) {

    this.postId = this.route.snapshot.params["id"];

   }

  ngOnInit(): void {
    this.postService.getPostById(this.postId).subscribe(result => {
      this.post = result;
      console.log(this.post);
    });
  }

}
