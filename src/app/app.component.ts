import { Component, ElementRef, OnInit } from '@angular/core';
import { avatar } from 'dawn-js-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-dawn-js-ui';

  constructor(private dom: ElementRef) {}

  ngOnInit() {
    const context = this.dom.nativeElement.querySelctor;

    const dsAvatar = avatar();
    dsAvatar.register('ds-avatar', this.dom.nativeElement);
    dsAvatar.props.set({
      size: 6,
      style: 'circle',
      note: { position: 'bottom-right', status: 'success' },
      img: {
        src: 'https://avatars.githubusercontent.com/u/86862861?v=4',
        alt: 'Foto - Marciely',
      },
    });

    dsAvatar.init();

    const dsAvatar2 = avatar();
    dsAvatar2.register('ds-avatar-2', this.dom.nativeElement);
    dsAvatar2.props.set({
      size: 6,
      style: 'circle',
      note: { position: 'bottom-right', status: 'success' },
      img: {
        src: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.18169-9/26001135_108612123273660_4572699388903841992_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-YV_MP0KkxEAX-oPzI9&_nc_ht=scontent-gru2-1.xx&oh=00_AfBYfts3IEE_r4k3Y13JTgtMmHoz0pnObDmX0jJEtX_bgg&oe=63B48A22',
        alt: 'Foto - João',
      },
    });

    dsAvatar2.init();

    const dsAvatar3 = avatar();
    dsAvatar3.register('ds-avatar-3', this.dom.nativeElement);
    dsAvatar3.props.set({
      size: 6,
      style: 'circle',
      note: { position: 'bottom-right', status: 'success' },
      img: {
        src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGAW0KIUoJ2uA/profile-displayphoto-shrink_200_200/0/1658177651905?e=1675900800&v=beta&t=IEVFx2jzRl_qfHX_QZ4Mex4EI0s5inSmEuXxmrPO9pw',
        alt: 'Foto - João',
      },
    });

    dsAvatar3.init();
  }
}
