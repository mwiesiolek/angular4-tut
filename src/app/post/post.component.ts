import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";
import {PostService} from "./post.service";
import {AppError} from "../common/app-error";
import {NotFoundError} from "../common/not-found-error";
import {BadRequestError} from "../common/bad-request-error";

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
    this.postService.getAll()
      .subscribe(
        (response: Response) => {
          this.posts = response.json();
        });
  }

  createPost(input: HTMLInputElement): void {
    let post = {title: input.value};
    input.value = '';

    this.postService.create(post)
      .subscribe(
        (response: Response) => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          this.handleError(error);
        });
  }

  updatePost(post) {
    this.postService.update(post)
      .subscribe(
        (response: Response) => {
          console.log(response);
        });
  }

  deletePost(post) {
    this.postService.delete(post.id)
      .subscribe(
        (response: Response) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          this.handleError(error);
        });
  }

  private handleError(error: AppError) {
    if (error instanceof NotFoundError) {
      console.log(error);
      alert('This post has already been deleted.');
    } else if (error instanceof BadRequestError) {
      console.log(error);

      // this.form.setErrors(error.originalError);
      alert('Bad request.');
    } else {
      throw error;
    }
  }
}
