import { Component } from '@angular/core';
import { SocialOption, SocialType } from 'src/app/models/social';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public socialOptions: Array<SocialOption>
  constructor() {
    this.socialOptions = [
      { title: 'Facebook', type: SocialType.Facebook, url: 'http://www.facebook.com' },
      { title: 'Linkedin', type: SocialType.Linkedin, url: 'http://www.linkedin.com' },
      { title: 'Twitter', type: SocialType.Twitter, url: 'http://www.twitter.com' },
      { title: 'Instagram', type: SocialType.Instagram, url: 'http://www.instagram.com' },
      { title: 'Youtube', type: SocialType.Youtube, url: 'http://www.youtube.com' }
    ];
  }


}
