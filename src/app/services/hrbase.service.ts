import { Http } from '@angular/http';
<<<<<<< HEAD
// @Injectable()
// export class HrbaseService {
//   hrpostdetails: any;
//   hrpostdetail: HrPostDetail;
//   hrdostdetails: HrPostDetail[];
//   constructor() {
//     this.hrpostdetails = [
//             HrPostDetail.PostDetailsFromJSON({
//                 'id': 1,
//                 'title': 'software Devloper',
//                 'companyname': 'google',
//                 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley ',
//                 'startdate': '10/4/2018',
//                 'enddate': '10/5/2018',
//                 'skills': 'c,c++,java',
//                 'location': 'delhi',
//                 'salary': 2.5,
//                 'experinece': '2 year',
//                 'dateOfJoining': '20/06/2018',
//                 'extraRequirement': 'Passionate, Ready to work in a team, Comfortable to travel',
//                 'noOfJobOpenings': '10',
//                 'CompanyUrl': 'www.google.co.in',
//                 'bondDetails': '2 years',
//                 'ReportingVenue': '32-c San Fransico 144401 ',
//                 'ResourcePersonContact': 'Shudhakar Reddy contact:01234567890 email:faltu@gmail.com',
//                 'selectionProcedure': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
//             }),
//             HrPostDetail.PostDetailsFromJSON({
//               'id': 2,
//               'title': 'senoir software Devloper',
//               'companyname': 'Dell',
//               'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
//               'startdate': '10/4/2018',
//               'enddate': '10/5/2018',
//               'skills': 'c,c++,python',
//               'location': 'hyderabad',
//               'salary': 2.5,
//               'experinece': 'fershers',
//               'dateOfJoining': '20/06/2018',
//               'extraRequirement': 'Passionate, Ready to work in a team, Comfortable to travel',
//               'noOfJobOpenings': '10',
//               'CompanyUrl': 'www.google.co.in',
//               'bondDetails': '2 years',
//               'ReportingVenue': '32-c San Fransico 144401 ',
//               'ResourcePersonContact': 'Shudhakar Reddy contact:01234567890 email:faltu@gmail.com',
//               'selectionProcedure': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
//           }),
//           HrPostDetail.PostDetailsFromJSON({
//             'id': 3,
//             'title': 'web Devloper',
//             'companyname': 'Hp',
//             'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
//             'startdate': '10/4/2018',
//             'enddate': '10/5/2018',
//             'skills': 'html,css,angular 2,nodejs',
//             'location': 'pune',
//             'salary': 2.5,
//             'experinece': '1 year',
//             'dateOfJoining': '20/06/2018',
//             'extraRequirement': 'Passionate, Ready to work in a team, Comfortable to travel',
//             'noOfJobOpenings': '10',
//             'CompanyUrl': 'www.google.co.in',
//             'bondDetails': '2 years',
//             'ReportingVenue': '32-c San Fransico 144401 ',
//             'ResourcePersonContact': 'Shudhakar Reddy contact:01234567890 email:faltu@gmail.com',
//             'selectionProcedure': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
//         })
//         ];

// }


//   getAllHrPost(): Promise<HrPostDetail[]> {
//    return new Promise((resolve, reject) => {
//       resolve(this.hrpostdetails);
//    });
//   }

//     getHrPostById(hrpost_id): Promise<HrPostDetail> {
//     return new Promise((resolve, reject) => {
//         for (const hrpostdetail of this.hrpostdetails) {
//           if (hrpostdetail.id === hrpost_id) {
//                resolve(hrpostdetail);
//                return;
//           }
//         }
//     });
//   }

//     addNewPost(hrpostdetail: HrPostDetail) {
//     this.hrpostdetails.unshift(hrpostdetail);
//   }
// }


// upar ka delete mat maarna abhi

=======
>>>>>>> 0ea74ece3ad5bb2791741107f147c3c9f2ce59f3
import { Injectable } from '@angular/core';
import { HrPostDetail } from '../model/hrpostdetails';
import { environment } from '../../environments/environment';
import { Userbase } from '../model/userbase';
@Injectable()
export class HrbaseService {
  hrpostdetails: any;
  hrpostdetail: HrPostDetail;
  hrdostdetails: HrPostDetail[];
  constructor(
    private http: Http
  ) { }


  getAllHrPost(user: string): Promise<HrPostDetail[]> {
    return this.http.get(`${environment.USER_SERVER}/api/posts`, {
      params: {
        'id': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log('data get: ', response.json());
        return response.json().data;
      });
  }

  getHrPostById(hrpost_id): Promise<HrPostDetail> {
    console.log(' :: ', hrpost_id);
    return this.http.get(`${environment.USER_SERVER}/api/posts/${hrpost_id}`)
      .toPromise()
      .then((response) => {
        console.log('id data:', response.json().data);
        return response.json().data;
      });
  }

  addNewPost(hrpostdetail: HrPostDetail, user: string): Promise<boolean> {
    // this.hrpostdetails.unshift(hrpostdetail);
    console.log('data123', hrpostdetail);
    return this.http.put(`${environment.USER_SERVER}/api/posts/new-post`, hrpostdetail, {
      params: {
        'id': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log(' 123 : ', response);
        return false;
      });
  }



  getAllUserViewPost(): Promise<HrPostDetail[]> {
    return this.http.get(`${environment.USER_SERVER}/api/posts/all/post`)
      .toPromise()
      .then((response) => {
        console.log('data get post: ', response.json());

        return response.json().data;
      });
  }


  getHrDetailsById(user: string): Promise<Userbase> {
    console.log('user_id', user);
    return this.http.get(`${environment.USER_SERVER}/api/hrs`, {
      params: {
        'id': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log('data get of hrs: ', response.json());
        return response.json();
      });

  }
}

