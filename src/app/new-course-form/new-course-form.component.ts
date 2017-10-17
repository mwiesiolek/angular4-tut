import {Component} from "@angular/core";
import {FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() {
  }

  addTopic(topic: HTMLInputElement): void {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray
  }
}
