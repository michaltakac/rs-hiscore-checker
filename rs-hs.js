if (Meteor.isClient) {
  Template.fetchStats.events({
    'submit form': function(e) {
      console.log( 'Submitting form is disabled! Please, use button "Get stats!".' );
      event.preventDefault();
      event.stopPropagation();
      return false; 
    },
    'click .saveUsername': function(e) {
      var rsn = $("#username").val();
      var game = $("#game").val();
      Session.set('username', rsn);
      Session.set('game', game);
      console.log(rsn);

      Meteor.call('lookup', Session.get('username'), Session.get('game'), function(error, result) {
        var overall       = result.overall;
        var attack        = result.attack;
        var defence       = result.defence;
        var strength      = result.strength;
        var hitpoints     = result.hitpoints;
        var ranged        = result.ranged;
        var prayer        = result.prayer;
        var magic         = result.magic;
        var cooking       = result.cooking;
        var woodcutting   = result.woodcutting;
        var fletching     = result.fletching;
        var fishing       = result.fishing;
        var firemaking    = result.firemaking;
        var crafting      = result.crafting;
        var smithing      = result.smithing;
        var mining        = result.mining;
        var herblore      = result.herblore;
        var agility       = result.agility;
        var thieving      = result.thieving;
        var slayer        = result.slayer;
        var farming       = result.farming;
        var runecraft     = result.runecraft;
        var hunter        = result.hunter;
        var construction  = result.construction;
        var summoning     = result.summoning;
        var dungeoneering = result.dungeoneering;
        var divination    = result.divination;

        if (error) {
          console.error(error);
        }

        console.log(result);

        Session.set("overall-rank", numeral(overall.rank).format('0,0'));
        Session.set("overall-level", numeral(overall.level).format('0,0'));
        Session.set("overall-xp", numeral(overall.xp).format('0,0'));
        Session.set("attack-rank", numeral(attack.rank).format('0,0'));
        Session.set("attack-level", numeral(attack.level).format('0,0'));
        Session.set("attack-xp", numeral(attack.xp).format('0,0'));
        Session.set("defence-rank", numeral(defence.rank).format('0,0'));
        Session.set("defence-level", numeral(defence.level).format('0,0'));
        Session.set("defence-xp", numeral(defence.xp).format('0,0'));
        Session.set("strength-rank", numeral(strength.rank).format('0,0'));
        Session.set("strength-level", numeral(strength.level).format('0,0'));
        Session.set("strength-xp", numeral(strength.xp).format('0,0'));
        Session.set("hitpoints-rank", numeral(hitpoints.rank).format('0,0'));  
        Session.set("hitpoints-level", numeral(hitpoints.level).format('0,0'));
        Session.set("hitpoints-xp", numeral(hitpoints.xp).format('0,0'));
        Session.set("ranged-rank", numeral(ranged.rank).format('0,0'));
        Session.set("ranged-level", numeral(ranged.level).format('0,0'));
        Session.set("ranged-xp", numeral(ranged.xp).format('0,0'));
        Session.set("prayer-rank", numeral(prayer.rank).format('0,0'));
        Session.set("prayer-level", numeral(prayer.level).format('0,0'));
        Session.set("prayer-xp", numeral(prayer.xp).format('0,0'));
        Session.set("magic-rank", numeral(magic.rank).format('0,0'));
        Session.set("magic-level", numeral(magic.level).format('0,0'));
        Session.set("magic-xp", numeral(magic.xp).format('0,0'));
        Session.set("cooking-rank", numeral(cooking.rank).format('0,0'));
        Session.set("cooking-level", numeral(cooking.level).format('0,0'));
        Session.set("cooking-xp", numeral(cooking.xp).format('0,0'));
        Session.set("woodcutting-rank", numeral(woodcutting.rank).format('0,0'));
        Session.set("woodcutting-level", numeral(woodcutting.level).format('0,0'));
        Session.set("woodcutting-xp", numeral(woodcutting.xp).format('0,0'));
        Session.set("fletching-rank", numeral(fletching.rank).format('0,0'));
        Session.set("fletching-level", numeral(fletching.level).format('0,0'));
        Session.set("fletching-xp", numeral(fletching.xp).format('0,0'));
        Session.set("fishing-rank", numeral(fishing.rank).format('0,0'));
        Session.set("fishing-level", numeral(fishing.level).format('0,0'));
        Session.set("fishing-xp", numeral(fishing.xp).format('0,0'));
        Session.set("firemaking-rank", numeral(firemaking.rank).format('0,0'));
        Session.set("firemaking-level", numeral(firemaking.level).format('0,0'));
        Session.set("firemaking-xp", numeral(firemaking.xp).format('0,0'));
        Session.set("crafting-rank", numeral(crafting.rank).format('0,0'));
        Session.set("crafting-level", numeral(crafting.level).format('0,0'));
        Session.set("crafting-xp", numeral(crafting.xp).format('0,0'));
        Session.set("smithing-rank", numeral(smithing.rank).format('0,0'));
        Session.set("smithing-level", numeral(smithing.level).format('0,0'));
        Session.set("smithing-xp", numeral(smithing.xp).format('0,0'));
        Session.set("mining-rank", numeral(mining.rank).format('0,0'));
        Session.set("mining-level", numeral(mining.level).format('0,0'));
        Session.set("mining-xp", numeral(mining.xp).format('0,0'));
        Session.set("herblore-rank", numeral(herblore.rank).format('0,0'));
        Session.set("herblore-level", numeral(herblore.level).format('0,0'));
        Session.set("herblore-xp", numeral(herblore.xp).format('0,0'));
        Session.set("agility-rank", numeral(agility.rank).format('0,0'));
        Session.set("agility-level", numeral(agility.level).format('0,0'));
        Session.set("agility-xp", numeral(agility.xp).format('0,0'));
        Session.set("thieving-rank", numeral(thieving.rank).format('0,0'));
        Session.set("thieving-level", numeral(thieving.level).format('0,0'));
        Session.set("thieving-xp", numeral(thieving.xp).format('0,0'));
        Session.set("slayer-rank", numeral(slayer.rank).format('0,0'));
        Session.set("slayer-level", numeral(slayer.level).format('0,0'));
        Session.set("slayer-xp", numeral(slayer.xp).format('0,0'));
        Session.set("farming-rank", numeral(farming.rank).format('0,0'));
        Session.set("farming-level", numeral(farming.level).format('0,0'));
        Session.set("farming-xp", numeral(farming.xp).format('0,0'));
        Session.set("runecraft-rank", numeral(runecraft.rank).format('0,0'));
        Session.set("runecraft-level", numeral(runecraft.level).format('0,0'));
        Session.set("runecraft-xp", numeral(runecraft.xp).format('0,0'));
        Session.set("hunter-rank", numeral(hunter.rank).format('0,0'));
        Session.set("hunter-level", numeral(hunter.level).format('0,0'));
        Session.set("hunter-xp", numeral(hunter.xp).format('0,0'));
        Session.set("construction-rank", numeral(construction.rank).format('0,0'));
        Session.set("construction-level", numeral(construction.level).format('0,0'));
        Session.set("construction-xp", numeral(construction.xp).format('0,0'));
        Session.set("summoning-rank", numeral(summoning.rank).format('0,0'));
        Session.set("summoning-level", numeral(summoning.level).format('0,0'));
        Session.set("summoning-xp", numeral(summoning.xp).format('0,0'));
        Session.set("dungeoneering-rank", numeral(dungeoneering.rank).format('0,0'));
        Session.set("dungeoneering-level", numeral(dungeoneering.level).format('0,0'));
        Session.set("dungeoneering-xp", numeral(dungeoneering.xp).format('0,0'));
        Session.set("divination-rank", numeral(divination.rank).format('0,0'));
        Session.set("divination-level", numeral(divination.level).format('0,0'));
        Session.set("divination-xp", numeral(divination.xp).format('0,0'));

      });
    }
  });

  Template.stats.helpers({
    getStats: function() {
      var rsn = Session.get("username");
      if (rsn !== "") {
        return true;
      } 
    }
  });

  Template.hiscores.helpers({
    overallRank: function() {
      return Session.get("overall-rank");  
    },
    overallLevel: function() {
      return Session.get("overall-level");  
    },
    overallXp: function() {
      return Session.get("overall-xp");  
    },
    attackRank: function() {
      return Session.get("attack-rank");  
    },
    attackLevel: function() {
      return Session.get("attack-level");  
    },
    attackXp: function() {
      return Session.get("attack-xp");  
    },
    defenceRank: function() {
      return Session.get("defence-rank");  
    },
    defenceLevel: function() {
      return Session.get("defence-level");  
    },
    defenceXp: function() {
      return Session.get("defence-xp");  
    },
    strengthRank: function() {
      return Session.get("strength-rank");  
    },
    strengthLevel: function() {
      return Session.get("strength-level");  
    },
    strengthXp: function() {
      return Session.get("strength-xp");  
    },
    hitpointsRank: function() {
      return Session.get("hitpoints-rank");  
    },
    hitpointsLevel: function() {
      return Session.get("hitpoints-level");  
    },
    hitpointsXp: function() {
      return Session.get("hitpoints-xp");  
    },
    rangedRank: function() {
      return Session.get("ranged-rank");  
    },
    rangedLevel: function() {
      return Session.get("ranged-level");  
    },
    rangedXp: function() {
      return Session.get("ranged-xp");  
    },
    prayerRank: function() {
      return Session.get("prayer-rank");  
    },
    prayerLevel: function() {
      return Session.get("prayer-level");  
    },
    prayerXp: function() {
      return Session.get("prayer-xp");  
    },
    magicRank: function() {
      return Session.get("magic-rank");  
    },
    magicLevel: function() {
      return Session.get("magic-level");  
    },
    magicXp: function() {
      return Session.get("magic-xp");  
    },
    cookingRank: function() {
      return Session.get("cooking-rank");  
    },
    cookingLevel: function() {
      return Session.get("cooking-level");  
    },
    cookingXp: function() {
      return Session.get("cooking-xp");  
    },
    woodcuttingRank: function() {
      return Session.get("woodcutting-rank");  
    },
    woodcuttingLevel: function() {
      return Session.get("woodcutting-level");  
    },
    woodcuttingXp: function() {
      return Session.get("woodcutting-xp");  
    },
    fletchingRank: function() {
      return Session.get("fletching-rank");  
    },
    fletchingLevel: function() {
      return Session.get("fletching-level");  
    },
    fletchingXp: function() {
      return Session.get("fletching-xp");  
    },
    fishingRank: function() {
      return Session.get("fishing-rank");  
    },
    fishingLevel: function() {
      return Session.get("fishing-level");  
    },
    fishingXp: function() {
      return Session.get("fishing-xp");  
    },
    firemakingRank: function() {
      return Session.get("firemaking-rank");  
    },
    firemakingLevel: function() {
      return Session.get("firemaking-level");  
    },
    firemakingXp: function() {
      return Session.get("firemaking-xp");  
    },
    craftingRank: function() {
      return Session.get("crafting-rank");  
    },
    craftingLevel: function() {
      return Session.get("crafting-level");  
    },
    craftingXp: function() {
      return Session.get("crafting-xp");  
    },
    smithingRank: function() {
      return Session.get("smithing-rank");  
    },
    smithingLevel: function() {
      return Session.get("smithing-level");  
    },
    smithingXp: function() {
      return Session.get("smithing-xp");  
    },
    miningRank: function() {
      return Session.get("mining-rank");  
    },
    miningLevel: function() {
      return Session.get("mining-level");  
    },
    miningXp: function() {
      return Session.get("mining-xp");  
    },
    herbloreRank: function() {
      return Session.get("herblore-rank");  
    },
    herbloreLevel: function() {
      return Session.get("herblore-level");  
    },
    herbloreXp: function() {
      return Session.get("herblore-xp");  
    },
    agilityRank: function() {
      return Session.get("agility-rank");  
    },
    agilityLevel: function() {
      return Session.get("agility-level");  
    },
    agilityXp: function() {
      return Session.get("agility-xp");  
    },
    thievingRank: function() {
      return Session.get("thieving-rank");  
    },
    thievingLevel: function() {
      return Session.get("thieving-level");  
    },
    thievingXp: function() {
      return Session.get("thieving-xp");  
    },
    slayerRank: function() {
      return Session.get("slayer-rank");  
    },
    slayerLevel: function() {
      return Session.get("slayer-level");  
    },
    slayerXp: function() {
      return Session.get("slayer-xp");  
    },
    farmingRank: function() {
      return Session.get("farming-rank");  
    },
    farmingLevel: function() {
      return Session.get("farming-level");  
    },
    farmingXp: function() {
      return Session.get("farming-xp");  
    },
    runecraftRank: function() {
      return Session.get("runecraft-rank");  
    },
    runecraftLevel: function() {
      return Session.get("runecraft-level");  
    },
    runecraftXp: function() {
      return Session.get("runecraft-xp");  
    },
    hunterRank: function() {
      return Session.get("hunter-rank");  
    },
    hunterLevel: function() {
      return Session.get("hunter-level");  
    },
    hunterXp: function() {
      return Session.get("hunter-xp");  
    },
    constructionRank: function() {
      return Session.get("construction-rank");  
    },
    constructionLevel: function() {
      return Session.get("construction-level");  
    },
    constructionXp: function() {
      return Session.get("construction-xp");  
    }
  });
  Template.rs3skills.helpers({
    rs3skills: function() {
      var game = Session.get("game");
      if (game === "rs3") {
        return true;
      } 
    },
    summoningRank: function() {
      return Session.get("summoning-rank");  
    },
    summoningLevel: function() {
      return Session.get("summoning-level");  
    },
    summoningXp: function() {
      return Session.get("summoning-xp");  
    },
    dungeoneeringRank: function() {
      return Session.get("dungeoneering-rank");  
    },
    dungeoneeringLevel: function() {
      return Session.get("dungeoneering-level");  
    },
    dungeoneeringXp: function() {
      return Session.get("dungeoneering-xp");  
    },
    divinationRank: function() {
      return Session.get("divination-rank");  
    },
    divinationLevel: function() {
      return Session.get("divination-level");  
    },
    divinationXp: function() {
      return Session.get("divination-xp");  
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {


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