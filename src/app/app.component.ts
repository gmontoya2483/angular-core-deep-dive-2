import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


    // @ViewChild(HighlightedDirective)
    // highlighted: HighlightedDirective;

  @ViewChild(CourseCardComponent, {read: HighlightedDirective})
  highlighted: HighlightedDirective;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    constructor() {

    }

    ngAfterViewInit() {

      console.log(this.highlighted);

    }

    onCourseSelected(course: Course) {

    }

  protected readonly console = console;

  onToggle(event: boolean) {
    console.log('onToggle -> ', event);

  }
}
