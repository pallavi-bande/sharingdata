import { Injectable } from '@angular/core';
import {IItem} from 'src/app/iItem';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private _items:IItem[] = [];
 
  addItem(item: IItem) {
      this._items.push(item);
  }

  getItems(): IItem[] {
      return this._items;
  }
}
