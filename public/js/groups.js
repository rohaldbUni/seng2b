/*
var groupsVue = new Vue({
  el: '#groupID',
  data: {
 },
  mounted() {
  }
});
*/
$('.modal').modal();

var myName = '';
var update;

//make a comment on a feed event
$("#post-new-comment").on("click", function() {
  var comment = $('#new-comment-text').val();
  var postId = $('#post-comment-id').val();
  if (comment.match(/^\s*$/)) {
    Materialize.toast('Nothing to post.', 1250);
    $('#new-comment-text').val('');
    $('#new-comment-text').trigger('autoresize');
    return;
  } else {
    comment = comment.replace(/\s+/g, ' ').trim();
    $('#new-comment-text').val(comment);
    $('#new-comment-text').trigger('autoresize');
  }

  var timestamp = Date.now();
  var data = {
    'comment': comment,
    'postId': postId,
    'timestamp': timestamp
  };
  console.log(data);

  $.ajax({
    url: "/comment_on_feed",
    method: "POST",
    data: data,
    dataType: "json",
    success: function(response) {
      console.log("success, result = " + JSON.stringify(response));
      var whoami = response.me;
      var commentId = response.id;
      var posterId = response.userId;
      var d = new Date(timestamp);
      var prettyDate = timeSince(d);
      var date = d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      Materialize.toast('Comment added.', 1250);
      var numComments = $('#num-comments-' + postId.replace(/\..*/, '')).text().match(/\d+/)[0];
      numComments++;
      var plural = (numComments === 1) ? '' : 's';
      $('#num-comments-' + postId.replace(/\..*/, '')).text(numComments + ' comment' + plural);
      $('#new-comment-text').val('');
      $('#new-comment-text').trigger('autoresize');
      $('.tooltipped').tooltip('remove');
      $('#comment-id-' + postId.replace(/\..*/, '')).prepend(
      '<div id="comment-id-' + commentId + '">' +
      '<li class="collection-item avatar feed-item">' +
      //'  <img src="images/sample_user.png" alt="" class="circle">' +
      `<img src="profile_images/${posterId}.png" alt="" onerror="this.onerror=null; this.src='images/sample_user.png';" class="circle">` +
      '  <span class="title spaceship-text feed-username"><a href="#">' + whoami + '</a></span>' +
      '  <span class="feed-action">' + comment + '</span>' +
      '  <p><small class="feed-timestamp tooltipped" data-position="bottom" data-delay="50" data-tooltip="' + date + '" data-timestamp="' + timestamp + '">' + prettyDate + '</small></p>' +
      '  <a class="waves-effect waves-light btn modal-trigger secondary-content" href="#delete-comment-on-feed-form"' +
      '  onclick="document.getElementById(\'delete-comment-id\').value=\'#comment-id-' + commentId + '\';' +
      '  document.getElementById(\'delete-post-id-user\').value=\'' + postId.replace(/.*\./, '') + '\';' +
      '  document.getElementById(\'delete-post-id\').value=\'#num-comments-' + postId.replace(/\..*/, '') + '\'";>Delete</a>' +
      '</li></div>');
      $('.tooltipped').tooltip({delay: 50});
      clearInterval(update);
      var rnd = Math.floor(Math.random() * 8) + 4; //update timestamps after ~6 seconds
      update = setInterval(updateDateTimestamps, rnd * 1000);
    },
    error: function(response) {
      Materialize.toast('Could not post comment. Try again later.', 1250);
      console.log("failed, result = " + JSON.stringify(response));
    }
  });
});

//delete a comment on a feed event
$("#delete-comment-bttn").on("click", function() {
  var user = $('#delete-post-id-user').val();
  var history = $('#delete-post-id').val().replace(/^#num-comments-/, '');
  var comm = $('#delete-comment-id').val().replace(/^#comment-id-/, '');
  console.log(`user id: ${user}, history id: ${history}, comment id: ${comm}`);
  $.ajax({
    url: "/delete_comment_on_feed",
    method: "POST",
    data: {'user': user, 'history': history, 'comm': comm},
    dataType: "json",
    success: function(response) {
      console.log("success, result = " + JSON.stringify(response));
      var commentId = $('#delete-comment-id').val();
      $(commentId).empty();
      $(commentId).remove();
      Materialize.toast('Comment deleted.', 1250);
      var numComments = $($('#delete-post-id').val()).text().match(/\d+/)[0];
      numComments--;
      var plural = (numComments === 1) ? '' : 's';
      $($('#delete-post-id').val()).text(numComments + ' comment' + plural);
    },
    error: function(response) {
      Materialize.toast('Could not delete comment. Try again later.', 1250);
      console.log("failed, result = " + JSON.stringify(response));
    }
  });
});

//group feed - generated and sorted before being displayed
//need to be global
var feed = [];
var numMembers = 0;
var numProcessed = 0;

//load number of group members and list of group members
var data = {
  'id': getUrlParameter('id')
};

var updateGroupPage = function(response) {
  feed = []; //need to reset these values every time
  $('#group-feed-events').empty();
  numProcessed = 0;

  console.log("success, result = " + JSON.stringify(response));
  numMembers = response.numMembers;
  var members = response.members;
  var memberNameIds = response.memberNameIds;
  var leaderboardIds = response.leaderboardIds;
  var history = response.history;
  var memberCountText = (numMembers === 1) ? ' member' : ' members';

  $('#num-group-members').text(numMembers + memberCountText); // Update members count HTML

  //generate members list
  var memberListText = "";
  var memberListIds = "";
  memberNameIds.forEach(x => {
    if (memberListText !== "") {
      memberListText += ", ";
      memberListIds += ", ";
    }
    memberListText += members[x].name;
    getFeed(x, members[x].name);
  });

  $('#group-member-names').text(memberListText); // Update member names HTML
  $('#group-member-ids').text(memberListIds); // Update member ids HTML - no longer needed?

  // Empty feed and leaderboard HTML to prevent duplicate loading
  // TODO POSSIBLY NEED LATER WHEN ALL USER PURCHASES FIXED
  // $('#group-feed-events').empty();
  $('#leaderboard-list').empty();

  //generate leaderboard
  leaderboardIds.forEach(x => {
    $('#leaderboard-list').append(`<li><span class="name">${members[x].name}</span><span class="percent">${members[x].balance}</span></li>`)
  });

  //generate part of the feed that shows create/join/leave events
  history.forEach(x => {
    if (x !== null) {
      var user = x.user;
      var d = new Date(parseInt(x.joined));
      var joined = d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      var prettyJoined = timeSince(d);
      d = new Date(parseInt(x.left));
      var left = d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      var prettyLeft = timeSince(d);
      appendToFeed(x.joined, x.user, x.created, prettyJoined, x.id); //should always be valid
      if (x.left !== '') {
        appendToFeed(x.left, x.user, 'left', prettyLeft, x.id);
      }
    }
  });

  $.ajax({
    url: "/get_user_list",
    method: "POST",
    data: '',
    dataType: "json",
    success: function(response) {
      var name = response.name;
      var myuid = response.myuid;
      // console.log("MEMBERNAMEIDS: " + memberNameIds);
      $('.chips-autocomplete').empty(); // Clear chips from input box
      response.userList.forEach(function(item){
        // console.log("ITEM: " + item.uid + " with index" + memberNameIds.indexOf(item.uid));

        if (item.uid !== myuid && memberNameIds.indexOf(item.uid) === -1) { // Not current user/group member uid
          user_keys[item.name] = null;
          user_ids[item.name] = item.uid;
        } else {
          delete user_keys[item.name];
          delete user_ids[item.name];
        }
      });

      $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
          data: user_keys,
          limit: Infinity,
          minLength: 1
        },
        placeholder: 'Enter a User',
        secondaryPlaceholder: '+ User',
      });
    },
    error: function(response) {
      //console.warn("hey ben failed");
      console.log("failed, result = " + JSON.stringify(response));
    }
  });
};

//update all timestamps on the feed
function updateDateTimestamps() {
  clearInterval(update);
  $('.feed-timestamp').each(function(i, t) {
    var $t = $(t);
    $t.text(timeSince(new Date($t.data('timestamp'))));
  });
  var nextUpdate = Math.floor(Math.random() * 30) + 8; //update timestamps after random num of seconds
  update = setInterval(updateDateTimestamps, nextUpdate * 1000);
}

//load number of group members and list of group members, then load user list and generate chips
$.ajax({
  url: "/get_group_info",
  method: "POST",
  data: {'id': getUrlParameter('id')},
  dataType: "json",
  success: function(response) {
    myName = response.myName;
    updateGroupPage(response);
  },
  error: function(response) {
    console.log("failed, result = " + JSON.stringify(response));
  }
});

//append create/leave/join event to group feed
function appendToFeed(date, user, word, timestamp, userId) {
  var d = new Date(parseInt(date));
  var fullDate = d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  feed.push({timestamp: date, content:
  '<div class="col s12 feed-col">' +
  '  <li class="collection-item avatar feed-item">' +
  //'    <img src="images/sample_user.png" alt="" class="circle">' +
  `<img src="profile_images/${userId}.png" alt="" onerror="this.onerror=null; this.src='images/sample_user.png';" class="circle">` +
  `    <span class="title spaceship-text feed-username"><a href="#">${user}</a></span>` +
  `    <span class="feed-action">${word} the group.<span>` +
  `   <p><small class="feed-timestamp tooltipped" data-position="bottom" data-delay="50" data-tooltip="${fullDate}" data-timestamp="${date}">${timestamp}</small></p>` +
  '    <a href="#!" class="secondary-content"><i class="material-icons orange-text">grade</i></a>' +
  '  </li>' +
  '</div>' +
  '<br>' +
  '</div>'});
}

//load the purchases made by group members
function getFeed(id, user) {
  $.ajax({
    url: "/get_user_purchase_history",
    method: "POST",
    data: {'user': id},
    dataType: "json",
    success: function(response) {
      console.log(JSON.stringify(response));
      /*
      if (numMembers === 1 && response.historyList.length === 0) {
        //if group contains one user and no previous purchases, show the one possible event - group creation
        //TODO: this may be redundant now
        feed.forEach(x => {
          $('#group-feed-events').append(x.content);
        });
      }
      */
      response.historyList.forEach(function (item, index) {
        var companyCode = item.companyCode;
        var companyName = item.companyName;
        var numUnits = parseFloat(item.num_units);
        var tradeAmount = parseFloat(item.tradeAmount).toFixed(2);
        var date = item.date;
        var d = new Date(date);
        var prettyDate = timeSince(d);
        var timestamp = d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        var purchaseId = item.id;
        var comments = item.comments;
        var link = `/stock?stock=${companyCode}&company=${companyName}`;

        //append existing comments to html for comments of current purchase
        var commentsHtml = "";
        var numComments = 0;
        if (comments !== undefined) {
          Object.keys(comments).forEach(function(key) {
            numComments++;
            var commentObj = comments[key];
            var dd = new Date(parseInt(commentObj.date));
            var posterId = commentObj.posterId;
            var prettyDate = timeSince(dd);
            var timestampComment = dd.toDateString() + ' ' + dd.getHours() + ':' + dd.getMinutes() + ':' + dd.getSeconds();
            var toPrepend =
            '<div id="comment-id-' + key + '">' +
            '<li class="collection-item avatar feed-item">' +
            //'  <img src="images/sample_user.png" alt="" class="circle">' +
            `<img src="profile_images/${posterId}.png" alt="" onerror="this.onerror=null; this.src='images/sample_user.png';" class="circle">` +
            '  <span class="title spaceship-text feed-username"><a href="#">' + commentObj.poster + '</a></span>' +
            '  <span class="feed-action">' + commentObj.comment + '</span>' +
            '  <p><small class="feed-timestamp tooltipped" data-position="bottom" data-delay="50" data-tooltip="' + timestampComment + '" data-timestamp="' + parseInt(commentObj.date) +'">' + prettyDate + '</small></p>';
            if (myName === commentObj.poster) {
              toPrepend +=
              '  <a class="waves-effect waves-light btn modal-trigger secondary-content" href="#delete-comment-on-feed-form"' +
              '  onclick="document.getElementById(\'delete-comment-id\').value=\'#comment-id-' + key + '\';' +
              '  document.getElementById(\'delete-post-id-user\').value=\'' + id + '\';' +
              '  document.getElementById(\'delete-post-id\').value=\'#num-comments-' + purchaseId + '\'";>Delete</a>';
            } else {
              toPrepend+= '    <a href="#!" class="secondary-content"><i class="material-icons orange-text">grade</i></a>';
            }
            toPrepend += '</li></div>';
            commentsHtml = toPrepend + commentsHtml;
          });
        }

        //append purchases & comments to feed array
        var plural = (numComments === 1) ? '' : 's';
        feed.push({timestamp: date, content:
  '<div class="col s12 feed-col">' +
  '  <li class="collection-item avatar feed-item">' +
  //'    <img src="images/sample_user.png" alt="" class="circle">' +
  `<img src="profile_images/${id}.png" alt="" onerror="this.onerror=null; this.src='images/sample_user.png';" class="circle">` +
  `    <span class="title spaceship-text feed-username"><a href="#">${user}</a></span>` +
  `    <span class="feed-action">bought ${numUnits.toFixed(2)} units of <a href="${link}">${companyCode}</a> for $${tradeAmount}.<span>` +
  `    <p><small class="feed-timestamp tooltipped" data-position="bottom" data-delay="50" data-tooltip="${timestamp}" data-timestamp="${date}">${prettyDate}</small></p>` +
  `    <a href="#!" id="num-comments-${purchaseId}" class="feed-comments-link">${numComments} comment${plural}</a>` +
  `    <a class="waves-effect waves-light btn modal-trigger secondary-content" href="#comment-on-feed" onclick="document.getElementById('post-comment-id').value='${purchaseId}.${id}';">Comment</a>` +
  '    <a href="#!" class="secondary-content"><i class="material-icons orange-text">grade</i></a>' +
  '  </li>' +
  '</div>' +
  '<br>' +
  `<div class="col s11 offset-s1 feed-col" id="comment-id-${purchaseId}">` +
  '<ul>' +
  '  <!-- comments for feed event above -->' +
  commentsHtml + //i.e. existing comments
  '</ul>' +
  '</div>'});

      });

      //push everything to the feed when all group members processed
      numProcessed++;
      if (numProcessed === numMembers) {
        feed.sort(function(lhs, rhs) {
          return rhs.timestamp - lhs.timestamp; //reverse chronological
        });
        feed.forEach(x => {
          $('#group-feed-events').append(x.content);
        });
        var nextUpdate = Math.floor(Math.random() * 30) + 8; //update timestamps after random num of seconds
        update = setInterval(updateDateTimestamps, nextUpdate * 1000);
        $('.tooltipped').tooltip({delay: 50}); //now make the tooltips visible
      }

    },
    error: function(response) {
      console.log("failed Purchases, result = " + JSON.stringify(response));
    }
  });
}

var user_keys = {};
var user_ids = {};

var invite_usernames = {};
var invite_uids = [];
$("#btn-invite").on("click", function() {
  Object.keys(invite_usernames).forEach(username => {
    invite_uids.push(user_ids[username]);
  })
  console.log('invite_uids: ', invite_uids);

  if (invite_uids.length === 0) {
    Materialize.toast('No members to add.', 1250);
    return;
  }

  var data = {
    invite_uids: JSON.stringify(invite_uids),
    group_id: getUrlParameter('id'),
    date: Date.now()
  };

  console.log("DATA: " + JSON.stringify(data));

  $.ajax({
    url: "/invite_to_group",
    method: "POST",
    data: data,
    dataType: "json",
    success: function(response) {
      $.ajax({
        url: "/get_group_info",
        method: "POST",
        data: {'id': getUrlParameter('id')},
        dataType: "json",
        success: function (response) {
          Materialize.toast('Members successfully added.', 1250);
          updateGroupPage(response);
        },
        error: function(response) {
          Materialize.toast('Could not add members to group. Try again later.', 1250);
          console.log("failed, result = " + JSON.stringify(response));
        }
      });
    }
  });

  // Clear invite_uids after submitting
  invite_uids = [];
});


$("#btn-leave").on("click", function() {
  $.ajax({
    url: "/leave_group",
    method: "POST",
    data: {'group_id': getUrlParameter('id'), 'date': Date.now()},
    dataType: "json",
    success: function(response) {
      $.ajax({
        url: "/get_group_info",
        method: "POST",
        data: {'id': getUrlParameter('id')},
        dataType: "json",
        success: function (response) {
          console.log("success, result = " + JSON.stringify(response));
          Materialize.toast('Left the group.', 1250);
          window.location.href = '/profile';
        },
        error: function(response) {
          console.log("failed, result = " + JSON.stringify(response));
        }
      });
    },
    error: function(response) {
      Materialize.toast('Could not leave group. Try again later.', 1250);
      console.log("failed, result = " + JSON.stringify(response));
    }
  });
});

$('.chips').on('chip.add', function(e, chip){
  console.log('Adding chip: ' + chip.tag);
  invite_usernames[chip.tag] = null;
});

$('.chips').on('chip.delete', function (e, chip) {
  console.log('Removing chip: ' + chip.tag);
  delete invite_usernames[chip.tag];
});

/*
$.ajax({
  url: "/get_user_list",
  method: "POST"
  data: '',
  dataType: "json",
  success: function(response) {
    console.log("success, result = " + JSON.stringify(response));
    var first = response.first;
    var last = response.last;
    console.log('first = ' + first + ' last = ' + last);
  },
  error: function(response) {
    console.log("failed, result = " + JSON.stringify(response)) {
  }
});

*/
/*
$.ajax({
  url: '/get_user_list',
  type: 'GET' // this is default, but worth pointing out
}).done(function(data){
  console.log("data is = " + JSON.stringify(data));
  // you may use "data" to access the underlying data
}
*/



var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];

generateChartData();

function generateChartData() {
  var firstDate = new Date();
  firstDate.setDate( firstDate.getDate() - 500 );
  firstDate.setHours( 0, 0, 0, 0 );

  var a1 = 1500;
  var b1 = 1500;
  var a2 = 1700;
  var b2  = 1700;
  var a3 = 1600;
  var b3 = 1600;
  var a4 = 1400;
  var b4 = 1400;

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    a1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    a4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
    b4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

    chartData1.push( {
      "date": newDate,
      "value": a1,
      "volume": b1 + 1500
    } );
    chartData2.push( {
      "date": newDate,
      "value": a2,
      "volume": b2 + 1500
    } );
    chartData3.push( {
      "date": newDate,
      "value": a3,
      "volume": b3 + 1500
    } );
    chartData4.push( {
      "date": newDate,
      "value": a4,
      "volume": b4 + 1500
    } );
  }
}

//Comparing members
var chart = AmCharts.makeChart( "chartdiv2", {
  "type": "stock",
  "theme": "light",
  "dataSets": [ {
      "title": "Thor Odinson",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData1,
      "categoryField": "date"
    }, {
      "title": "Bruce Banner",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData2,
      "categoryField": "date"
    }, {
      "title": "Tony Stark",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData3,
      "categoryField": "date"
    }, {
      "title": "Captain America",
      "fieldMappings": [ {
        "fromField": "value",
        "toField": "value"
      }, {
        "fromField": "volume",
        "toField": "volume"
      } ],
      "dataProvider": chartData4,
      "categoryField": "date"
    }
  ],

  "panels": [ {
    "showCategoryAxis": false,
    "title": "Value",
    "percentHeight": 70,
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "comparable": true,
      "compareField": "value",
      "balloonText": "[[title]]:<b>[[value]]</b>",
      "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>"
    } ],
    "stockLegend": {
      "periodValueTextComparing": "[[percents.value.close]]%",
      "periodValueTextRegular": "[[value.close]]"
    }
  }, {
    "title": "Volume",
    "percentHeight": 30,
    "stockGraphs": [ {
      "valueField": "volume",
      "type": "column",
      "showBalloon": false,
      "fillAlphas": 1
    } ],
    "stockLegend": {
      "periodValueTextRegular": "[[value.close]]"
    }
  } ],

  "chartScrollbarSettings": {
    "graph": "g1"
  },

  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "valueLineAlpha": 0.5
  },

  "periodSelector": {
    "position": "left",
    "periods": [ {
      "period": "MM",
      "selected": true,
      "count": 1,
      "label": "1 month"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 year"
    }, {
      "period": "YTD",
      "label": "YTD"
    }, {
      "period": "MAX",
      "label": "MAX"
    } ]
  },

  "dataSetSelector": {
    "position": "left"
  },

  "export": {
    "enabled": true
  }
} );
