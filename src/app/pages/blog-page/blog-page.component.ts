import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";

@Component({
    selector: 'app-blog-page',
    standalone: true,
    templateUrl: './blog-page.component.html',
    styleUrl: './blog-page.component.scss',
    imports: [CommonModule, HeaderComponent]
})
export class BlogPageComponent {

}
