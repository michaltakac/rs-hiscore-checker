var BASE_SKILLS = [ 
  'overall', 'attack', 'defence', 'strength', 'hitpoints', 'ranged',
  'prayer', 'magic', 'cooking', 'woodcutting', 'fletching', 'fishing',
  'firemaking', 'crafting', 'smithing', 'mining', 'herblore', 'agility', 
  'thieving', 'slayer', 'farming', 'runecraft', 'hunter', 'construction'
];
var skills = {
  'osrs': BASE_SKILLS,
  'rs3': BASE_SKILLS.concat('summoning', 'dungeoneering', 'divination')
};
var urls = {
  'osrs': 'http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=',
  'rs3': 'http://hiscore.runescape.com/index_lite.ws?player='
};
if (Meteor.isClient) {
  Template.fetchStats.events({
    'submit form': function(e) {
      event.preventDefault();
      event.stopPropagation();
      return false; 
    },
    'click .saveUsername': function(e) {
      var rsn = $("#username").val();
      var game = $("#game").val();
      Session.set('username', rsn);
      Session.set('game', game);

      Meteor.call('lookup', Session.get('username'), Session.get('game'), function(error, result) {
        if (error) {
          console.error(error);
        }
        Session.set('data', result);
      });
    }
  });

  Template.hiscores.helpers({
    getData: function() {
      var data = Session.get('data');
      var game = Session.get('game');
      var array = _.map( skills[game], function(skillName){
        var skill = data[skillName]
        return {
                 name: skillName.charAt(0).toUpperCase() + skillName.slice(1),
                 rank: numeral(skill.rank).format('0,0'),
                 level: skill.level,
                 xp: numeral(skill.xp).format('0,0')
               };
      });
      return array;   
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({  
      lookup: function(player, game) {
        if (!urls.hasOwnProperty(game)) {
          game = 'rs3';
        }
        var url = urls[game].concat(encodeURIComponent(player));
        result = Meteor.http.get(url);
        $ = cheerio.load(result.content);
        body = $.html();
        parsed = Meteor.call('parseStats', body, skills[game]);
        return parsed;
      },
      parseStats: function(raw, skillsList) {
        var stats = raw.split('\n').slice(0, skillsList.length);
        var statsObj = { };
        stats.forEach(function(stat, index) {
          var chunk = stat.split(',');
          statsObj[skillsList[index]] = {
            rank: +chunk[0],
            level: +chunk[1],
            xp: +chunk[2]
          };
        });
        return statsObj;
      }
    });
  });
}