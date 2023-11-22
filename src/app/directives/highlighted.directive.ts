import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true,
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighLight = new EventEmitter<boolean>();

  constructor() {
    console.log('Directive created...');
  }


  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }


  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  // @HostBinding('style.border')
  // get styles() {
  //   return '5px solid blue';
  // }


  @HostBinding('attr.disabled')
  get disabled() {
    return 'true';
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighLight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false
    this.toggleHighLight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighLight.emit(this.isHighlighted);
  }

}
