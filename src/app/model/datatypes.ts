import {Point} from 'geojson';

export class Column {
  constructor(public name: string) {

  }
}

export class GeoPoint implements Point {
  public type: 'Point' = 'Point';
  constructor(public coordinates: number[]) {
    this.type = 'Point';
  }
}



export interface RowData {
  coords: GeoPoint;
  effectSize: number;
  sampleSize: number;
  studyID: string;
}

export interface YieldRowData extends RowData {

}

