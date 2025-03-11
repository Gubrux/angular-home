import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: ` <a routerLink=""> Go Back, i want to be a monke</a> `,
    styleUrls: ['./details.component.css'],
})
export class DetailsComponent {}
