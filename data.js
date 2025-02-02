const PTYPE = {
    Berry: 0,
    Ingredient: 1,
    Skill: 2
}
const Poke2Type = {
    'Bulbasaur': PTYPE.Ingredient, 'Ivysaur': PTYPE.Ingredient, 'Venusaur': PTYPE.Ingredient,
    'Charmander': PTYPE.Ingredient, 'Charmeleon': PTYPE.Ingredient, 'Charizard': PTYPE.Ingredient,
    'Squirtle': PTYPE.Ingredient, 'Wartortle': PTYPE.Ingredient, 'Blastoise': PTYPE.Ingredient,
    'Caterpie': PTYPE.Berry, 'Metapod': PTYPE.Berry, 'Butterfree': PTYPE.Berry,
    'Rattata': PTYPE.Berry, 'Raticate': PTYPE.Berry,
    'Ekans': PTYPE.Berry, 'Arbok': PTYPE.Berry,
    'Pikachu': PTYPE.Berry, 'Raichu': PTYPE.Berry,
    'Pikachu - Halloween': PTYPE.Berry,
    'Pikachu - Holiday': PTYPE.Skill,
    'Clefairy': PTYPE.Berry, 'Clefable': PTYPE.Berry,
    'Vulpix': PTYPE.Berry, 'Ninetales': PTYPE.Berry,
    'Jigglypuff': PTYPE.Skill, 'Wigglytuff': PTYPE.Skill,
    'Diglett': PTYPE.Ingredient, 'Dugtrio': PTYPE.Ingredient,
    'Meowth': PTYPE.Skill, 'Persian': PTYPE.Skill,
    'Psyduck': PTYPE.Skill, 'Golduck': PTYPE.Skill,
    'Mankey': PTYPE.Berry, 'Primeape': PTYPE.Berry,
    'Growlithe': PTYPE.Skill, 'Arcanine': PTYPE.Skill,
    'Bellsprout': PTYPE.Ingredient, 'Weepinbell': PTYPE.Ingredient, 'Victreebel': PTYPE.Ingredient,
    'Geodude': PTYPE.Ingredient, 'Graveler': PTYPE.Ingredient, 'Golem': PTYPE.Ingredient,
    'Slowpoke': PTYPE.Skill, 'Slowbro': PTYPE.Skill,
    'Magnemite': PTYPE.Skill, 'Magneton': PTYPE.Skill,
    'Doduo': PTYPE.Berry, 'Dodrio': PTYPE.Berry,
    'Gastly': PTYPE.Ingredient, 'Haunter': PTYPE.Ingredient, 'Gengar': PTYPE.Ingredient,
    'Onix': PTYPE.Berry,
    'Cubone': PTYPE.Berry, 'Marowak': PTYPE.Berry,
    'Kangaskhan': PTYPE.Ingredient,
    'Mr. Mime': PTYPE.Ingredient,
    'Pinsir': PTYPE.Ingredient,
    'Ditto': PTYPE.Ingredient,
    'Eevee': PTYPE.Skill, 'Vaporeon': PTYPE.Skill, 'Jolteon': PTYPE.Skill, 'Flareon': PTYPE.Skill,
    'Dratini': PTYPE.Ingredient, 'Dragonair': PTYPE.Ingredient, 'Dragonite': PTYPE.Ingredient,
    'Chikorita': PTYPE.Berry, 'Bayleef': PTYPE.Berry, 'Meganium': PTYPE.Berry,
    'Cyndaquil': PTYPE.Berry, 'Quilava': PTYPE.Berry, 'Typhlosion': PTYPE.Berry,
    'Totodile': PTYPE.Berry, 'Croconaw': PTYPE.Berry, 'Feraligatr': PTYPE.Berry,
    'Pichu': PTYPE.Berry,
    'Cleffa': PTYPE.Berry,
    'Igglybuff': PTYPE.Skill,
    'Togepi': PTYPE.Skill, 'Togetic': PTYPE.Skill,
    'Mareep': PTYPE.Skill, 'Flaaffy': PTYPE.Skill, 'Ampharos': PTYPE.Skill,
    'Sudowoodo': PTYPE.Skill,
    'Wooper': PTYPE.Ingredient, 'Quagsire': PTYPE.Ingredient,
    'Espeon': PTYPE.Skill, 'Umbreon': PTYPE.Skill,
    'Slowking': PTYPE.Skill,
    'Wobbuffet': PTYPE.Skill,
    'Steelix': PTYPE.Berry,
    'Heracross': PTYPE.Skill,
    'Delibird': PTYPE.Ingredient,
    'Houndour': PTYPE.Berry, 'Houndoom': PTYPE.Berry,
    'Raikou': PTYPE.Skill,
    'Entei': PTYPE.Skill,
    'Suicune': PTYPE.Skill,
    'Larvitar': PTYPE.Ingredient, 'Pupitar': PTYPE.Ingredient, 'Tyranitar': PTYPE.Ingredient,
    'Ralts': PTYPE.Skill, 'Kirlia': PTYPE.Skill, 'Gardevoir': PTYPE.Skill,
    'Slakoth': PTYPE.Berry, 'Vigoroth': PTYPE.Berry, 'Slaking': PTYPE.Berry,
    'Sableye': PTYPE.Skill,
    'Aron': PTYPE.Ingredient, 'Lairon': PTYPE.Ingredient, 'Aggron': PTYPE.Ingredient,
    'Gulpin': PTYPE.Skill, 'Swalot': PTYPE.Skill,
    'Swablu': PTYPE.Berry, 'Altaria': PTYPE.Berry,
    'Shuppet': PTYPE.Berry, 'Banette': PTYPE.Berry,
    'Absol': PTYPE.Ingredient,
    'Wynaut': PTYPE.Skill,
    'Spheal': PTYPE.Berry, 'Sealeo': PTYPE.Berry, 'Walrein': PTYPE.Berry,
    'Drifloon': PTYPE.Skill, 'Drifblim': PTYPE.Skill,
    'Shinx': PTYPE.Ingredient, 'Luxio': PTYPE.Ingredient, 'Luxray': PTYPE.Ingredient,
    'Bonsly': PTYPE.Skill,
    'Mime Jr.': PTYPE.Ingredient,
    'Riolu': PTYPE.Skill, 'Lucario': PTYPE.Skill,
    'Croagunk': PTYPE.Ingredient, 'Toxicroak': PTYPE.Ingredient,
    'Snover': PTYPE.Ingredient, 'Abomasnow': PTYPE.Ingredient,
    'Magnezone': PTYPE.Skill,
    'Togekiss': PTYPE.Skill,
    'Leafeon': PTYPE.Skill, 'Glaceon': PTYPE.Skill,
    'Gallade': PTYPE.Skill,
    'Sylveon': PTYPE.Skill,
    'Dedenne': PTYPE.Skill,
    'Grubbin': PTYPE.Ingredient, 'Charjabug': PTYPE.Ingredient, 'Vikavolt': PTYPE.Ingredient,
    'Stufful': PTYPE.Ingredient, 'Bewear': PTYPE.Ingredient,
    'Comfey': PTYPE.Ingredient,
    'Cramorant': PTYPE.Ingredient,
    'Sprigatito': PTYPE.Ingredient, 'Floragato': PTYPE.Ingredient, 'Meowscarada': PTYPE.Ingredient,
    'Fuecoco': PTYPE.Ingredient, 'Crocalor': PTYPE.Ingredient, 'Skeledirge': PTYPE.Ingredient,
    'Quaxly': PTYPE.Ingredient, 'Quaxwell': PTYPE.Ingredient, 'Quaquaval': PTYPE.Ingredient
}
const Nature2Score = {
    'Hardy': [1.00, 1.00, 1.00], 'Lonely': [1.00, 1.00, 0.67], 'Brave': [1.67, 1.67, 1.67],
    'Adamant': [3.00, -0.17, 0.67], 'Naughty': [1.83, 1.67, -0.17],
    'Bold': [-1.33, -1.33, -1.00], 'Docile': [1.00, 1.00, 1.00], 'Relaxed': [-0.67, -0.67, -0.33],
    'Impish': [1.50, -1.33, -0.17], 'Lax': [0.17, 0.17, -1.00],
    'Timid': [-1.00, -1.00, -1.00], 'Hasty': [0.33, 0.33, 0], 'Serious': [1.00, 1.00, 1.00],
    'Jolly': [2.17, -1.00, 0.17], 'Naive': [0.83, 0.58, -1.00],
    'Modest': [-1.67, 0.50, -0.33], 'Mild': [-1.00, 1.17, 0], 'Quiet': [-0.67, 2.00, 1.00],
    'Bashful': [1.00, 1.00, 1.00], 'Rash': [-0.50, 2.00, -0.67],
    'Calm': [-0.67, -0.67, 0.67], 'Gentle': [-0.33, 0.33, 1.33], 'Sassy': [0, 0.25, 1.67],
    'Careful': [1.50, -1.00, 1.33], 'Quirky': [1.00, 1.00, 1.00]
}
const Subskill2Score = {
    'Berry Finding S': [5, 4, 5], 'Dream Shard Bonus': [2, 2, 2],
    'Energy Recovery Bonus': [3, 3, 3], // 'Energy Recovery S': [1, 1, 1], 'Energy Recovery M': [2, 2, 2],
    'Helping Bonus': [5, 5, 5], 'Helping Speed S': [3, 3, 3], 'Helping Speed M': [4, 4, 4],
    'Ingredient Finder S': [1, 4, 3], 'Ingredient Finder M': [1, 5, 4],
    'Inventory Up S': [2, 3, 2], 'Inventory Up M': [3, 4, 3], 'Inventory Up L': [4, 5, 4],
    'Research EXP Bonus': [2, 2, 2],
    'Skill Level Up S': [3, 3, 4], 'Skill Level Up M': [4, 4, 5],
    'Skill Trigger S': [3, 3, 4], 'Skill Trigger M': [4, 4, 5],
    'Sleep EXP Bonus': [3, 3, 3]
}
const LevelScaling = [1.5, 1.25, 1, 0.75, 0.5]
// percentile calculation: see calculate_cache.py
const PercentileBerry = [ 9.58, 10.25, 10.67, 11.  , 11.25, 11.5 , 11.75, 11.83, 12.  ,
    12.25, 12.33, 12.5 , 12.58, 12.75, 12.83, 13.  , 13.08, 13.25,
    13.25, 13.42, 13.5 , 13.58, 13.75, 13.75, 13.83, 14.  , 14.  ,
    14.08, 14.25, 14.25, 14.33, 14.5 , 14.5 , 14.58, 14.67, 14.75,
    14.83, 14.92, 15.  , 15.  , 15.08, 15.25, 15.25, 15.33, 15.42,
    15.5 , 15.5 , 15.58, 15.75, 15.75, 15.83, 15.92, 16.  , 16.  ,
    16.08, 16.25, 16.25, 16.33, 16.42, 16.5 , 16.5 , 16.58, 16.75,
    16.75, 16.83, 16.92, 17.  , 17.  , 17.17, 17.25, 17.25, 17.42,
    17.5 , 17.5 , 17.67, 17.75, 17.75, 17.92, 18.  , 18.08, 18.25,
    18.25, 18.42, 18.5 , 18.58, 18.75, 18.83, 19.  , 19.08, 19.25,
    19.42, 19.58, 19.75, 20.  , 20.25, 20.5 , 20.75, 21.17, 21.75,
    25.75]
const PercentileIngredient = [13.42, 13.92, 14.25, 14.5 , 14.75, 14.92, 15.08, 15.25, 15.33,
    15.5 , 15.58, 15.75, 15.83, 15.92, 16.  , 16.08, 16.25, 16.25,
    16.33, 16.5 , 16.5 , 16.58, 16.67, 16.75, 16.83, 16.92, 17.  ,
    17.  , 17.08, 17.17, 17.25, 17.25, 17.33, 17.42, 17.5 , 17.5 ,
    17.58, 17.67, 17.75, 17.75, 17.83, 17.92, 17.92, 18.  , 18.  ,
    18.08, 18.17, 18.25, 18.25, 18.33, 18.42, 18.5 , 18.5 , 18.5 ,
    18.58, 18.67, 18.75, 18.75, 18.83, 18.92, 19.  , 19.  , 19.08,
    19.17, 19.25, 19.25, 19.25, 19.42, 19.5 , 19.5 , 19.58, 19.67,
    19.75, 19.75, 19.83, 19.92, 20.  , 20.  , 20.08, 20.25, 20.25,
    20.33, 20.5 , 20.5 , 20.67, 20.75, 20.75, 20.92, 21.  , 21.17,
    21.25, 21.42, 21.5 , 21.75, 21.92, 22.08, 22.25, 22.67, 23.17,
    25.75]
const PercentileSkill = [13.  , 13.5 , 13.92, 14.25, 14.42, 14.58, 14.75, 15.  , 15.08,
        15.25, 15.33, 15.5 , 15.58, 15.75, 15.75, 15.92, 16.  , 16.08,
        16.17, 16.25, 16.33, 16.42, 16.5 , 16.58, 16.67, 16.75, 16.75,
        16.92, 17.  , 17.  , 17.08, 17.17, 17.25, 17.25, 17.33, 17.42,
        17.5 , 17.5 , 17.58, 17.67, 17.75, 17.75, 17.92, 17.92, 18.  ,
        18.  , 18.08, 18.17, 18.25, 18.25, 18.33, 18.42, 18.5 , 18.5 ,
        18.58, 18.67, 18.75, 18.75, 18.83, 18.92, 19.  , 19.  , 19.08,
        19.17, 19.25, 19.25, 19.33, 19.42, 19.5 , 19.58, 19.67, 19.75,
        19.75, 19.83, 19.92, 20.  , 20.08, 20.17, 20.25, 20.25, 20.42,
        20.5 , 20.58, 20.67, 20.75, 20.92, 21.  , 21.08, 21.17, 21.33,
        21.42, 21.58, 21.75, 21.92, 22.08, 22.33, 22.58, 22.92, 23.42,
        26.17]
