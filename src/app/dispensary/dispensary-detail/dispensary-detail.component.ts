import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DispensaryService } from '../dispensary.service';

@Component({
  selector: 'app-dispensary-detail',
  templateUrl: './dispensary-detail.component.html',
  styleUrl: './dispensary-detail.component.css',
})
export class DispensaryDetailComponent implements OnInit {
  slug: string = '';
  dispensary: any = null;
  menuItems: any[] = [];
  schedule: any = {};
  location: { [key: string]: number } = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private dispensaryService: DispensaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.slug = param['slug'];
      this.dispensaryService.getDispensary(this.slug).subscribe(
        (dispensary) => {
          this.dispensary = dispensary;
          this.parseLocation(dispensary.PrimaryLocation);
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/not-found']);
        }
      );
    });
  }
  parseLocation(locationString: string) {
    const keyValuePairs = locationString.replace(/[{}]/g, '').split(', ');

    // Loop through the key-value pairs and add them to the object
    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split('=');
      this.location[key] = parseFloat(value);
    });
  }
}
