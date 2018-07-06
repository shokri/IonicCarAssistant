import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  private mediaSamplesApiUrl = 'assets/js/categories.json';
  private infoTextApiUrl = 'assets/js/logo.json';
  private modelApiUrl = 'assets/js/model.json';
  private ProductApiUrl = 'assets/js/product-details.json';

  constructor(public http: Http) {}

  getMediaSamples() {
    return this.http.get(this.mediaSamplesApiUrl)
      .map(this.extractJsonData)
      .catch(this.handleErrors);
  }

  getLogoUrl() {
    return this.http.get(this.infoTextApiUrl)
      .map(this.extractJsonData)
      .catch(this.handleErrors);
  }

  getModel() {
    return this.http.get(this.modelApiUrl)
      .map(this.extractJsonData)
      .catch(this.handleErrors);
  }

  getProduct() {
    return this.http.get(this.ProductApiUrl)
      .map(this.extractJsonData)
      .catch(this.handleErrors);
  }

  getInfoText() {
    return this.http.get(this.infoTextApiUrl)
      .map(this.extractJsonData)
      .catch(this.handleErrors);
  }

  private extractJsonData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleErrors(error: Response) {
    console.log("Error API");
    return Observable.throw("خطای دریافت اطلاعات");
  }
}
