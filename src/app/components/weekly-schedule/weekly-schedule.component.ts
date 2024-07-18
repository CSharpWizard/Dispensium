import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrl: './weekly-schedule.component.css',
})
export class WeeklyScheduleComponent implements OnInit {
  @Input() schedule: string = '';
  weeklySchedule: { day: string; open: Date; close: Date }[] = [];
  displayedColumns: string[] = ['day', 'open', 'close'];

  ngOnInit(): void {
    if (
      this.schedule == '' ||
      this.schedule == null ||
      this.schedule == undefined
    ) {
      this.weeklySchedule = [];
      return;
    }

    const weeklyData = this.parseSchedule(this.schedule);

    this.weeklySchedule = Object.keys(weeklyData.Weekly).map((day) => {
      return {
        day: day,
        open: new Date(weeklyData.Weekly[day].Open),
        close: new Date(weeklyData.Weekly[day].Close),
      };
    });
  }

  parseSchedule(schedule: string) {
    // Add outer braces to make it a valid JSON string
    const formattedInput = schedule;

    // Replace equals sign with colon and add double quotes around keys and string values
    const jsonString = formattedInput
      .replace(/=/g, ':')
      .replace(/([a-zA-Z]+):/g, '"$1":')
      .replace(
        /:([a-zA-Z]{3} [a-zA-Z]{3} [0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2} [A-Z]{3} [0-9]{4})/g,
        ':"$1"'
      );

    // Parse the JSON string into an object
    return JSON.parse(jsonString);
  }
}
