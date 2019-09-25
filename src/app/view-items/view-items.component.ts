import { Component, OnInit } from '@angular/core';
import { ModelService} from 'src/app/model.service';
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent{

   
constructor(private _modelService: ModelService){}
 
public printItems(){
   console.log('items in warehouse:');
   console.log(this._modelService.getItems());
}

}
