import { Component } from '@angular/core';
import { ModelService} from 'src/app/model.service';
import { IItem } from 'src/app/iItem';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent  {

  private _item:IItem = {name:'',description:'',price:0};
 
  constructor(private _modelService: ModelService){}
 
 public get Item():IItem{
     return this._item;
 }
 
 public addItem(){
     const currentItem:IItem = {
         name:this._item.name,
         description:this._item.description,
         price:this._item.price
        
     };
 
    this._modelService.addItem(currentItem);
    console.log("added successfully");
 }

}
