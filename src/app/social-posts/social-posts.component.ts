import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {
      title: "I like turtles",
      thought: "because I am a great zombie"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought
    }
    this.posts.push(newPost);
  }
}
