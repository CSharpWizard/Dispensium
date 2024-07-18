import { Component } from '@angular/core';
import { DispensaryService } from '../dispensary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispensary-list',
  templateUrl: './dispensary-list.component.html',
  styleUrl: './dispensary-list.component.css',
})
export class DispensaryListComponent {
  layout = 'list';

  dispensaries!: any[];

  constructor(
    private dispensaryService: DispensaryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dispensaryService
      .getDispensaries()
      .subscribe((dispensaries) => (this.dispensaries = dispensaries));
  }

  viewDetails(slug: string) {
    this.router.navigate([`dispensaries/${slug}`]);
  }
}
