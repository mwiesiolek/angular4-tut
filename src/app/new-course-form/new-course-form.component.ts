import {Component} from "@angular/core";
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
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
