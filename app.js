var app = angular.module('App', []);

app.factory('factory', [
  function() {
    var counter = 0,
    posts = [
        {
          id: ++counter,
          title: 'Olsztyn, Poland',
          image: 'http://img06.deviantart.net/bf45/i/2010/157/d/5/olsztyn_old_city_hdr_by_unsu.jpg',
          author: 'Pawel Maciulewski',
          description: 'Lorem ipsum dolor sit amet, vero vocent principes id nec, et nemore accumsan rationibus eos, ne sed virtute utroque. Atqui quodsi laboramus eos ei, sit at sanctus nusquam. No vocent hendrerit mea, graeci interpretaris at cum. Et per elit graeci eloquentiam, ullum errem principes his ex. Corrumpit abhorreant in vix, an vero errem quo. Duo cu platonem gloriatur, vis primis viderer ad.'
        },
        {
          id: ++counter,
          title: 'Salamanca, Spain',
          image: 'http://img02.deviantart.net/94c8/i/2014/335/8/4/shadows___free_stock_by_heavensinyoureyes-d88detg.jpg',
          author: 'Sara Rodriguez',
          description: 'Lorem ipsum dolor sit amet, vero vocent principes id nec, et nemore accumsan rationibus eos, ne sed virtute utroque. Atqui quodsi laboramus eos ei, sit at sanctus nusquam. No vocent hendrerit mea, graeci interpretaris at cum. Et per elit graeci eloquentiam, ullum errem principes his ex. Corrumpit abhorreant in vix, an vero errem quo. Duo cu platonem gloriatur, vis primis viderer ad.'

        },
        {
          id: ++counter,
          title: 'Maastricht, Netherlands',
          image: 'http://img10.deviantart.net/e578/i/2008/275/4/2/maastricht_v_by_ayseselen.jpg',
          author: 'Rick Van Der Van',
          description: 'Lorem ipsum dolor sit amet, vero vocent principes id nec, et nemore accumsan rationibus eos, ne sed virtute utroque. Atqui quodsi laboramus eos ei, sit at sanctus nusquam. No vocent hendrerit mea, graeci interpretaris at cum. Et per elit graeci eloquentiam, ullum errem principes his ex. Corrumpit abhorreant in vix, an vero errem quo. Duo cu platonem gloriatur, vis primis viderer ad.'
        }
      ];
      return {
        posts: function() { return posts }
      };
    }
]);

app.controller("FirstControl", [
   'factory',
   function(f) {
     var main = this;
     main.posts = f.posts();
   }
 ]);
