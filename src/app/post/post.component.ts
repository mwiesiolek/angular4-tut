import {Component} from "@angular/core";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: any[];
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe((response: Response) => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement): void {
    let post = {title: input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe((response: Response) => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .subscribe((response: Response) => {
        console.log(response);
      })
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe((response: Response) => {
        console.log(response);

        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
