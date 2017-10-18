import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";
import {PostService} from "./post.service";
import {PostError} from "./post-error";
import {PostNotFoundError} from "./post-not-found-error";
import {PostBadRequestError} from "./post-bad-request-error";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
        (response: Response) => {
          this.posts = response.json();
        });
  }

  createPost(input: HTMLInputElement): void {
    let post = {title: input.value};
    input.value = '';

    this.postService.createPost(post)
      .subscribe(
        (response: Response) => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: PostError) => {
          this.handleError(error);
        });
  }

  updatePost(post) {
    this.postService.updatePost(post)
      .subscribe(
        (response: Response) => {
          console.log(response);
        });
  }

  deletePost(post) {
    this.postService.deletePost(post.id)
      .subscribe(
        (response: Response) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: PostError) => {
          this.handleError(error);
        });
  }

  private handleError(error: PostError) {
    if (error instanceof PostNotFoundError) {
      console.log(error);
      alert('This post has already been deleted.');
    } else if (error instanceof PostBadRequestError) {
      console.log(error);

      // this.form.setErrors(error.originalError);
      alert('Bad request.');
    } else {
      throw error;
    }
  }
}
