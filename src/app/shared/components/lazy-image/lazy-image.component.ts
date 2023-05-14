import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
    
    @Input()
    url!: string;

    @Input()
    alt: string = '';

    hasLoaded: boolean = false;
    
    ngOnInit(): void {
        if( !this.url ){
            throw new Error('URL propiedad es requerida')
        }
    }

    onLoad() {
        // console.log('Imagen cargada');
        setTimeout(() => {
            this.hasLoaded = true;
        }, 1000)
    }
}
