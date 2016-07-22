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
          description: 'Lorem ipsum dolor sit amet, vero vocent principes id nec, et nemore accumsan rationibus eos, ne sed virtute utroque. Atqui quodsi laboramus eos ei, sit at sanctus nusquam. No vocent hendrerit mea, graeci interpretaris at cum. Et per elit graeci eloquentiam, ullum errem principes his ex. Corrumpit abhorreant in vix, an vero errem quo. Duo cu platonem gloriatur, vis primis viderer ad.',
          date: new Date(),
          vote: 0
        },
        {
          id: ++counter,
          title: 'Salamanca, Spain',
          image: 'http://img02.deviantart.net/94c8/i/2014/335/8/4/shadows___free_stock_by_heavensinyoureyes-d88detg.jpg',
          author: 'Sara Rodriguez',
          description: 'Lorem ipsum dolor sit amet, vero vocent principes id nec, et nemore accumsan rationibus eos, ne sed virtute utroque. Atqui quodsi laboramus eos ei, sit at sanctus nusquam. No vocent hendrerit mea, graeci interpretaris at cum. Et per elit graeci eloquentiam, ullum errem principes his ex. Corrumpit abhorreant in vix, an vero errem quo. Duo cu platonem gloriatur, vis primis viderer ad.',
          date: new Date(),
          vote: 0
        },
        {
          id: ++counter,
          title: 'Maastricht, Netherlands',
          image: 'http://img10.deviantart.net/e578/i/2008/275/4/2/maastricht_v_by_ayseselen.jpg',
          author: 'Rick Van Der Van',
          description: 'Lorem ipsum dolor sit amet, vero vocent principes id nec, et nemore accumsan rationibus eos, ne sed virtute utroque. Atqui quodsi laboramus eos ei, sit at sanctus nusquam. No vocent hendrerit mea, graeci interpretaris at cum. Et per elit graeci eloquentiam, ullum errem principes his ex. Corrumpit abhorreant in vix, an vero errem quo. Duo cu platonem gloriatur, vis primis viderer ad.',
          date: new Date(),
          vote: 0
        }
      ];

      choices = [
        {name: '-vote'},
        {name: 'title'},
        {name: 'date'}
      ]

      function plusVote(posts) {
        if(!posts.vote) {
        posts.vote = 0;
        posts.vote += 1;
      } else {
        posts.vote += 1;
      }
    }
    function minusVote(posts) {
      if(!posts.vote) {
      posts.vote = 0;
      posts.vote -= 1;
    } else {
      posts.vote -= 1;
    }
  }

  function addNewPost(form) {
    console.log(form);
      posts.push({
        id: ++counter,
        title: form.title,
        image: form.image,
        author: form.author,
        description: form.description,
        date: new Date()
       });
    }

      return {
        posts: function() { return posts },
        choices: function() {return choices},
        plusVote: plusVote,
        minusVote: minusVote,
        addNewPost: addNewPost
      };
    }
]);

app.controller("FirstControl", [
   'factory',
   function(f) {
     var main = this;
     main.posts = f.posts();
     main.choices = f.choices();
     main.plusVote = f.plusVote;
     main.minusVote = f.minusVote;
     main.addNewPost = f.addNewPost;
   }
 ]);
