import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispensaryRoutingModule } from './dispensary-routing.module';
import { DispensaryListComponent } from './dispensary-list/dispensary-list.component';
import { DispensaryDetailComponent } from './dispensary-detail/dispensary-detail.component';
import { DispensaryService } from './dispensary.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from '../components/rating/rating.component';
import { TruncatePipe } from '../utils/truncate.pipe';
import { WeeklyScheduleComponent } from '../components/weekly-schedule/weekly-schedule.component';
import { MatTableModule } from '@angular/material/table';
import { MapComponent } from '../components/map/map.component';

@NgModule({
  declarations: [
    DispensaryListComponent,
    DispensaryDetailComponent,
    RatingComponent,
    WeeklyScheduleComponent,
    MapComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    DispensaryRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [DispensaryService],
})
export class DispensaryModule {}
