import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from "./component/blog/blog.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogSPA';
}
