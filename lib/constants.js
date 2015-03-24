BASE_SKILLS = [ 
  'overall', 'attack', 'defence', 'strength', 'hitpoints', 'ranged',
  'prayer', 'magic', 'cooking', 'woodcutting', 'fletching', 'fishing',
  'firemaking', 'crafting', 'smithing', 'mining', 'herblore', 'agility', 
  'thieving', 'slayer', 'farming', 'runecraft', 'hunter', 'construction'
];

skills = {
  'osrs': BASE_SKILLS,
  'rs3': BASE_SKILLS.concat('summoning', 'dungeoneering', 'divination')
};

urls = {
  'osrs': 'http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=',
  'rs3': 'http://hiscore.runescape.com/index_lite.ws?player='
};