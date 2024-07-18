import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
  @Input() longitude: number = 0;
  @Input() latitude: number = 0;
  private map!: L.Map;
  private centroid: L.LatLngExpression = [0, 0];
  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: '../../../assets/images/marker-icon.png',
      shadowUrl: '../../../assets/images/marker-shadow.png',
    }),
  };

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );

    L.marker(this.centroid, this.icon)
      .addTo(this.map)
      .bindPopup('Dispensary Location')
      .openPopup();
  }

  ngOnInit(): void {
    debugger;
    this.centroid = [this.latitude, this.longitude];
    this.initMap();
  }
}
