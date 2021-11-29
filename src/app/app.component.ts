import { Component } from '@angular/core';
import { ShorteningService } from 'src/service/shortening.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shorten-ui';
  longUrl: string = '';
  shortUrl: string = '';
  errorMessage: string = '';

  constructor(public shorteningService: ShorteningService) {
  }

  submit(longUrl: any) {
    this.longUrl = longUrl;
    let requestObject: any = {};
    requestObject.longUrl = longUrl;
    this.shorteningService.createShortenURL(requestObject).subscribe((res: any) => {
      this.shortUrl = res.shortUrl;
      this.errorMessage = '';
    }, (error: any) => {
      this.errorMessage = 'Please provide Valid URL';
    })

  }

  getOriginalURL() {
    this.shorteningService.getOriginalURL(this.shortUrl).subscribe((res: any) => {
      window.open(res.longUrl, "_blank");
      this.errorMessage = '';
    }, (error: any) => {
      this.errorMessage = 'Please provide Valid URL';
    })
  }

}
