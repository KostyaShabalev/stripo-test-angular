import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';

// import { ITemplates } from './templates';

// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  // private _url: string = "../assets/data/templates.json";

  // constructor(private http: HttpClient) { }

  constructor() { }

  // getTemplates(): Observable<ITemplates[]> {
  // 	    return this.http.get<ITemplates[]>(this._url);
  // 	}

  getTemplates() {

  	 return   [
      {
        "id": 1,
        "name": "One",
        "template": `
          <div class='template'> 
            <div class='editable' style='{font-size: 10px;}'> 
              One 
            </div> 
            <div class='container'> 
                <div class='editable'> 
                Two 
              </div> 
              <div class='editable'> 
                Three 
              </div> 
            </div> 
          </div>`,
        "modified": 1516008350380
      },
      {
        "id": 2,
        "name": "Two",
        "template": ` 
          <div class='template'> 
            <div class='container'> 
                <div class='editable'> 
                One 
              </div> 
              <div class='editable'> 
                Two 
              </div> 
              <div class='editable'> 
                Three 
              </div> 
            </div> 
            <div class='editable'> 
              Four 
            </div> 
          </div>`,
        "modified": 1516008489616
      },
      {
        "id": 3,
        "name": "Three",
        "template": ` 
          <div class='template'> 
            <div class='editable'> 
              one 
            </div> 
            <div class='editable'> 
              two 
            </div> 
            <div class='editable'> 
              three 
            </div> 
          </div>`,
       "modified": 1516008564742
      }
    ]

}

}
