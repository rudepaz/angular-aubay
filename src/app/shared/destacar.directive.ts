import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[abyDestacar]'
})
export class DestacarDirective implements OnInit {
  @Input() abyDestacar: string;
  constructor(private eTarget: ElementRef) { 
    console.log(`Directiva aplicada $(this.abyDestacar)`)
  }

  @HostListener('click') anular() {
    console.log('Directiva anulada')
    this.eTarget.nativeElement.setAttribute('title' , this.abyDestacar) 
  }

  ngOnInit() {
    console.log(`Directiva aplicada ${this.abyDestacar}`)
    this.eTarget.nativeElement.setAttribute('title' , this.abyDestacar) 
  }
}
