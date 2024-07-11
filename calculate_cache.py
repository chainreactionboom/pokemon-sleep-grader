#!/usr/bin/env python
import itertools
import numpy as np


class PTYPE:
    Berry = 0
    Ingredient = 1
    Skill = 2


Poke2Type = {
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
    'Espeon': PTYPE.Skill, 'Umbreon': PTYPE.Skill,
    'Slowking': PTYPE.Skill,
    'Wobbuffet': PTYPE.Skill,
    'Steelix': PTYPE.Berry,
    'Heracross': PTYPE.Skill,
    'Delibird': PTYPE.Ingredient,
    'Houndour': PTYPE.Berry, 'Houndoom': PTYPE.Berry,
    'Raikou': PTYPE.Skill,
    'Entei': PTYPE.Skill,
    'Larvitar': PTYPE.Ingredient, 'Pupitar': PTYPE.Ingredient, 'Tyranitar': PTYPE.Ingredient,
    'Ralts': PTYPE.Skill, 'Kirlia': PTYPE.Skill, 'Gardevoir': PTYPE.Skill,
    'Slakoth': PTYPE.Berry, 'Vigoroth': PTYPE.Berry, 'Slaking': PTYPE.Berry,
    'Sableye': PTYPE.Skill,
    'Gulpin': PTYPE.Skill, 'Swalot': PTYPE.Skill,
    'Swablu': PTYPE.Berry, 'Altaria': PTYPE.Berry,
    'Shuppet': PTYPE.Berry, 'Banette': PTYPE.Berry,
    'Absol': PTYPE.Ingredient,
    'Wynaut': PTYPE.Skill,
    'Spheal': PTYPE.Berry, 'Sealeo': PTYPE.Berry, 'Walrein': PTYPE.Berry,
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
    'Stufful': PTYPE.Ingredient, 'Bewear': PTYPE.Ingredient,
    'Comfey': PTYPE.Ingredient,
    'Cramorant': PTYPE.Ingredient,
    'Sprigatito': PTYPE.Ingredient, 'Floragato': PTYPE.Ingredient, 'Meowscarada': PTYPE.Ingredient,
    'Fuecoco': PTYPE.Ingredient, 'Crocalor': PTYPE.Ingredient, 'Skeledirge': PTYPE.Ingredient,
    'Quaxly': PTYPE.Ingredient, 'Quaxwell': PTYPE.Ingredient, 'Quaquaval': PTYPE.Ingredient
}

Nature2Score = {
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

Subskill2Score = {
    'Berry Finding S': [5, 4, 5], 'Dream Shard Bonus': [2, 2, 2],
    'Energy Recovery Bonus': [3, 3, 3],
    'Helping Bonus': [5, 5, 5], 'Helping Speed S': [3, 3, 3], 'Helping Speed M': [4, 4, 4],
    'Ingredient Finder S': [1, 4, 3], 'Ingredient Finder M': [1, 5, 4],
    'Inventory Up S': [2, 3, 2], 'Inventory Up M': [3, 4, 3], 'Inventory Up L': [4, 5, 4],
    'Research EXP Bonus': [2, 2, 2],
    'Skill Level Up S': [3, 3, 4], 'Skill Level Up M': [4, 4, 5],
    'Skill Trigger S': [3, 3, 4], 'Skill Trigger M': [4, 4, 5],
    'Sleep EXP Bonus': [3, 3, 3]
}

LevelScaling = [1.5, 1.25, 1, 0.75, 0.5]

for idx in range(3):
    all_scores = []
    for nn in Nature2Score:
        for ss in itertools.permutations(Subskill2Score, r=5):
            score = Nature2Score[nn][idx]
            score += sum(Subskill2Score[si][idx] * LevelScaling[ii]
                         for (ii, si) in enumerate(ss))
            all_scores.append(score)
    all_scores = np.array(all_scores)
    print(np.percentile(all_scores, range(1, 101, 1)))
