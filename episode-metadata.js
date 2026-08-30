const episodeTitles = {
  "6NAiNp6YUQU": "Notre homme AchilleFPS nous dit TOUT sur son aventure à OD Chypre | La Gang #164",
  "-YmMGpobo6w": "On Fête Les 1 AN de La Gang avec Raph ! [La Gang #91]",
  "y-AJIjmiMY8": "Les BUCKBOYS vont EXPLOSER le Québec | La Gang #147",
  "s2hfsvMmTNU": "AchilleFPS revient sur son match Lewislefou VS Oli Primeau | La Gang #172",
  "1dePqOPCHg0": "Inoxtag Escalade le Mont Everest… ILS SONT FURIEUX 😡 [La Gang #98]",
  "2LYYFtMKBZU": "Après Legault.. qui prendra le contrôle du Québec? Avec JS | La Gang #171",
  "4H067trfeRI": "Coacher Tfue à OSRS, Polarisation politique & le futur des créateurs avec Dearlola1 | La Gang #154",
  "4k7xVsuX2Uw": "Et si le Canada devenait le 51e état Américain ? [La Gang #124]",
  "5kfPrkznKwQ": "Le métro de Montréal en grève, la Californie brûle, et l’IA menace ton emploi | La Gang #144",
  "8ojU0Nih2kE": "Comment se Lancer en Investissement : Les Bases avec un Planificateur Financier [La Gang #114]",
  "6gWymkYEQk8": "Élection 2024 : Comment Trump a Repris le Pouvoir, Avec JS [La Gang #110]",
  "ATEXA8RaJLk": "Mon papy revient sur ses 84 années de vie [La Gang #100]",
  "IPtSD5UuCkA": "Alex Boyer & Eric Leclair Dévoilent les Secrets de la Magie [La Gang #92]",
  "NWkNWwhnvXw": "Le $BTC va EXPLOSER ?! Ont-ils déjà mis les pieds sur la Lune ? Avec Medz [La Gang #105]",
  "KZnccDjskr8": "Le Génie Marketing derrière Qualinet, Retour sur la Phobie du Cannabis avec Tit-Carlos [La Gang #95]",
  "G8ibiORf994": "24 pays plus tard : les moments marquants d’un grand voyageur [La Gang #128]",
  "EHrL4F3ZGiI": "Mario Parent : Le GOAT du Québec. ACTION ESPRIT | La Gang #136",
  "OhX9mfgrJ1Y": "Max Truman (Ironik de L'Assemblée), DansLesCoulisses.com et couvrir le Sport en 2025 | La Gang #143",
  "BJ0OGsC-8HA": "Défi Courir 1000 KM, Préparation Ironman, SB Training (Part. 2) est toujours LOCKED IN [La Gang #96]",
  "EupitF1rGKg": "Taeho Favre : Le Roi Mondial du Fingerboard – YouTube en 2025, Crypto & Memecoins | La Gang #132",
  "Dcy2Lxr6qEY": "Wilkens Mathieu : Un monstre sur le ring à seulement 20 ans 🥊 | La Gang #135",
  "K0mYjzQlIgg": "Téléphones bannis à l’école : une bonne idée ? | La Gang #140",
  "BQwsA7qWv4A": "J’ai été ACQUITTÉ, Carney dans la Sauce et la construction est en grève | La Gang #142",
  "_IlUlJ_GkE0": "Des grosses décisions pour 2025 : on vous explique tout [La Gang #120]",
  "TZkTO4NfS5U": "De Baie-Comeau à Bali : comment Steven Ferlatte a bâti son empire [La Gang #127]",
  "XUqn0rghRIc": "Comment sauver le Québec du désastre? Avec JS | La Gang #155",
  "e1xzyIjeIeI": "Devine le Tag du Beatmaker avec High Klassified",
  "dXufQn96DE4": "60 Jours de Paradis à Bali… Retour Brutal à la Réalité | La Gang #133",
  "SLdPEg2RHxo": "Du Cirque du Soleil aux Jeux Olympiques : Jeffrey Whaley, master du BMX [La Gang #125]",
  "anQy3B-SCCM": "De la prison au Mexique aux tribus de Papouasie : l’incroyable parcours de Adrift.Vision | #168",
  "fHVsNAgzoIo": "Greenwoodz & CookDaBeatz : La recette magique du Rap Queb | La Gang #145",
  "frKPmqEfLg8": "Photographie VS Intelligence Artificielle : discussion avec un professionnel | La Gang #131",
  "V08AN0hCIDQ": "CLASH Entre le Québec et la Suisse [La Gang #86]",
  "aGVeX9GhjPc": "TRUMP VS BIDEN ! Dernière de la saison. [La Gang #80]",
  "WqAuRUnHES4": "Carte sur table : pourquoi tout est en train de changer | La Gang #170",
  "cS-Nanb6MXY": "Le rêve de la SQDC, RIP Johnny Gaudreau, Le Thermostat Fait des Flamèches [La Gang #93]",
  "x3BdVm7A9x8": "Skater Dans TOUS les Pays du Monde avec TheSkateNomad [La Gang #82]",
  "noCqZYzERW4": "Les Robots Prendront-ils le Pouvoir ?! 🤖 Avec Fred & Achille (en remote) [La Gang #116]",
  "uPGo2qK8-uA": "Le Skateboard sous tous ses angles avec Julien Gagnon [La Gang #99]",
  "t6KGJM-32Rw": "300 Radars Photo à Montréal, Le Royal Mount & Nikocado Avocado [La Gang #97]",
  "k_5-pItMFyQ": "Werenoi n’est plus, mais sa musique restera 🙏🏻 | La Gang #141",
  "oa_gX80mIJ4": "High Klassified, Producteur Lavalois : ses collabs avec The Weeknd, Future et Damso. [La Gang #126]",
  "lfuIq0PtC7c": "On jase de Radio avec Pierrick de Énergie 98,9 [La Gang #94]",
  "vBEIk3X4UFQ": "Érik Gravel : révolutionner le marché animalier avec sa fille Livia [La Gang #118]",
  "ijtbbl95r3Q": "L'industrie du RapQueb avec Lova [La Gang #102]",
  "hl-EdE1SBnk": "Dans les coulisses d’un contrôleur aérien aux ÉAU: attentats, crashs et défis du métier [Gang #129]",
  "meSYq4n4D5I": "La Terre est-elle PLATE ? Avec AchilleFPS [La Gang #87]",
  "opMoBwbktbM": "Fred Rondeau : Psychologie de l’argent, REER vs CELI et liberté financière | La Gang #148",
  "3azoSmnTTdI": "Le confort : ce piège qui t’empêche de passer à l’action, avec Émile [La Gang #119]",
  "7tRcQ3yaGOI": "Rosalie Lessard sans filtre sur son parcours atypique | La Gang #165",
  "2FI9REQkRDE": "Un développeur expert explique le fiasco de SAAQclic | La Gang #161",
  "wfGyS93Pggc": "Félix “Rouge Forêt” Bouchard ne digère PAS la défaite du Canada 🇨🇦 | La Gang #169",
  "9lwh21i7Dcc": "Retour Sur le Voyage d'Achille au Portugal, APPELEZ VOS GRANDS-PARENTS! [La Gang #101]",
  "B-hg2boxZbE": "Les années folles d’Hochelaga avec BJ et Brandon Labonté | La Gang #160 (Devant Public)",
  "4ScUKVjYsJw": "Des festivals électro à Copenhague… à l'empire immobilier à Bali | SHOW ANGLAIS | La Gang #130",
  "1Tue0WxpmrM": "Élections Américaines : Nos Prédictions et Analyse 🇺🇸 [La Gang #109]",
  "8jHfza36qj0": "20 ans d’amitié avec Laurie Doucet : OD, Justin Bieber et nos vies de bars | La Gang #158",
  "5jOfMSRfExg": "UpperDeck ZYNdustries avec Messier & Carl-André [La Gang #76]",
  "BPB-fco2Sjc": "Charles Page sur son ascension du mont Everest avec Inoxtag! [La Gang #106]",
  "zTdmBil__cI": "Jake Paul VS Mike Tyson : Le Combat Était-il Truqué ? [La Gang #113]",
  "F3QmONP9V_4": "Rymz : Le Prince du Rap Québécois [La Gang #123]",
  "EHM_N2nli3Y": "Tommy Morrisson : l’envers du MMA Pro et son ascension vers l’UFC 🥊 | La Gang #162 (Devant Public)",
  "EMOH1XQal1M": "Jeremy McKie : prodige du motocross québécois vers le sommet nord-américain 🏁 | La Gang #163",
  "Id5a4wxzx4A": "Jean-Charles Lajoie (JiC) Monument du Sport au Québec | La Gang #138",
  "Cp49DEbONJg": "Spidey: Mentalisme, Hypnose & Langage Corporel: Le pouvoir de te faire douter de la réalité | #150",
  "KMpn0we0o8g": "Crazy Best Of 2024-2025 | La Gang #146",
  "IF4zCr0q4z0": "Accidents, Turbulences et MAYDAY : Un Pilote d’Air Transat se Confie [La Gang #112]",
  "Om9e-eAQ0rc": "J'assiste à une Date entre Rosalie Lessard et Cook The Beatz [La Gang #75]",
  "Ktx-gL8SUOM": "Montréal est en État d'Alerte ! (innondations, geyser, aqueduc)",
  "J9g7j2GqKPM": "Planter 1,000,000 d'Arbres en 5 ans ! Avec Francis-Olivier Fortin [La Gang #88]",
  "SZy6VU3tB0I": "Kellerrr : De Gardien de Prison à Streamer [La Gang #103]",
  "O8NqJbzmrFg": "Les moments les plus marquants de La Gang en 2025 | #166",
  "UPKblWhTJkI": "Du chantier au #1 des radios : le parcours d’Arpin Lépine | La Gang #167",
  "dhRTKKmCRtE": "Qui tente rien n'a rien.. Avec Frederic-Carle Péladeau [La Gang #85]",
  "XU8eEXNcVFY": "C'est quoi le Bonheur ? Avec Alexane & Mich [La Gang #81]",
  "eMDlXNikBfA": "Vieillir et se Révéler en Toute Vulnérabilité, avec Fred [La Gang #111]",
  "bpfJChdzZ5c": "Discutons des vrais enjeux au Québec, avec JS | La Gang #157",
  "hJo43jiU8NA": "Élections canadiennes 2025 : votre guide électoral (Carney, Poilievre, Singh, etc) | La Gang #134",
  "huZ4rVeMIHY": "Oilers en 7 ! Imprimer 250,000,000 de Faux Billets US ! Avec JS [La Gang #78]",
  "fYunYPG8mr8": "Johnny Rock en Voyage, Parcourir le Monde Pour Provoquer [La Gang #77]",
  "YTmxNkPUUrs": "L’alcool au volant c’est criminel, avec Messier [La Gang #117]",
  "c_WojLcUqVw": "Le GRAND Retour de mes \"ChEvAls\" Fred & Rateau [La Gang #107]",
  "an7pULTSdnw": "PowerBall 1,8 MILLIARD 💰, Vol de BIXI & Fiasco SAAQclic Avec FredCL | La Gang #153",
  "WpuBwkuNdZ4": "Atteint de la Fibrose Kystique, Jordan Medeiros VIT À FOND ! avec Achillefps [La Gang #79]",
  "mZmJ3VEBNLA": "Achille est à OD ! FT. JS | La Gang #151",
  "wHLfWAcGLFU": "Transitionner de femme à homme à femme, avec Noah Average [La Gang #104]",
  "mw1wfPSF8_o": "Bitcoin : Nouveau Sommet HISTORIQUE, Marto poursuit sa collecte 📈 [La Gang #115]",
  "tQ6wnrJqPSc": "Anxiété, TDA et Gestion de l'Agressivité en Abitibi [La Gang #84]",
  "zcpirhs0cRY": "L'Abitibi est à Montréal. On escalade le pont Jacques-Cartier avec Jmax, Yan et Mat. [La Gang #108]",
  "j08L6_MoQ8o": "Des Questions Existentielles #1 avec Achille & Fred | La Gang #137",
  "ofM8aJYMl7E": "Se disloquer l'épaule en BIXI avec Médérick-Carle Langlois [La Gang #89]",
  "o7qT_qfxd6k": "Comment Platto Energy est devenue l’une des boissons les plus vendues au Québec | La Gang #156",
  "yDfDqoYG9gs": "Dearlola1 : 73 jours de live NON-STOP, Top 3 MONDIAL à OSRS et burnout brutal | La Gang #139",
  "v5q2iwLJw74": "VanLifeur, Cascadeur, Chanteur et Danseur, rien n'arrête Matt Tremblay [La Gang #90]",
  "_xLvXkqjOxg": "La culture et la Religion en Indonésie",
  "lTzjjxL8Cyg": "Apprendre une langue en 30 jours ? la méthode secrète d’Émile Cossette | La Gang #149"
};

const episodeViews = {
  "s2hfsvMmTNU": 6511,
  "4H067trfeRI": 505,
  "-YmMGpobo6w": 1164,
  "4k7xVsuX2Uw": 1285,
  "1dePqOPCHg0": 1169,
  "6NAiNp6YUQU": 28383,
  "2LYYFtMKBZU": 740,
  "y-AJIjmiMY8": 9122,
  "ATEXA8RaJLk": 817,
  "KZnccDjskr8": 842,
  "IPtSD5UuCkA": 491,
  "8ojU0Nih2kE": 1408,
  "5kfPrkznKwQ": 823,
  "NWkNWwhnvXw": 518,
  "G8ibiORf994": 1226,
  "6gWymkYEQk8": 1171,
  "BQwsA7qWv4A": 846,
  "OhX9mfgrJ1Y": 1866,
  "_IlUlJ_GkE0": 999,
  "EHrL4F3ZGiI": 1515,
  "BJ0OGsC-8HA": 377,
  "K0mYjzQlIgg": 1151,
  "EupitF1rGKg": 564,
  "Dcy2Lxr6qEY": 1708,
  "XUqn0rghRIc": 529,
  "SLdPEg2RHxo": 692,
  "dXufQn96DE4": 936,
  "TZkTO4NfS5U": 1183,
  "fHVsNAgzoIo": 2224,
  "frKPmqEfLg8": 516,
  "anQy3B-SCCM": 1373,
  "e1xzyIjeIeI": 189,
  "noCqZYzERW4": 352,
  "x3BdVm7A9x8": 1029,
  "cS-Nanb6MXY": 1313,
  "WqAuRUnHES4": 2348,
  "V08AN0hCIDQ": 1142,
  "aGVeX9GhjPc": 548,
  "uPGo2qK8-uA": 536,
  "t6KGJM-32Rw": 899,
  "vBEIk3X4UFQ": 988,
  "opMoBwbktbM": 3698,
  "ijtbbl95r3Q": 720,
  "lfuIq0PtC7c": 918,
  "hl-EdE1SBnk": 2092,
  "oa_gX80mIJ4": 893,
  "k_5-pItMFyQ": 723,
  "meSYq4n4D5I": 1492,
  "7tRcQ3yaGOI": 7590,
  "1Tue0WxpmrM": 1036,
  "3azoSmnTTdI": 538,
  "4ScUKVjYsJw": 482,
  "wfGyS93Pggc": 4604,
  "2FI9REQkRDE": 845,
  "9lwh21i7Dcc": 611,
  "B-hg2boxZbE": 2449,
  "F3QmONP9V_4": 4481,
  "zTdmBil__cI": 1892,
  "8jHfza36qj0": 20069,
  "BPB-fco2Sjc": 4330,
  "Id5a4wxzx4A": 1670,
  "5jOfMSRfExg": 611,
  "EMOH1XQal1M": 1903,
  "EHM_N2nli3Y": 821,
  "Om9e-eAQ0rc": 2127,
  "SZy6VU3tB0I": 970,
  "J9g7j2GqKPM": 558,
  "KMpn0we0o8g": 616,
  "O8NqJbzmrFg": 885,
  "IF4zCr0q4z0": 2998,
  "Cp49DEbONJg": 1324,
  "Ktx-gL8SUOM": 3663,
  "dhRTKKmCRtE": 596,
  "bpfJChdzZ5c": 524,
  "XU8eEXNcVFY": 1490,
  "huZ4rVeMIHY": 618,
  "UPKblWhTJkI": 4821,
  "eMDlXNikBfA": 494,
  "fYunYPG8mr8": 5444,
  "hJo43jiU8NA": 990,
  "mw1wfPSF8_o": 581,
  "an7pULTSdnw": 745,
  "tQ6wnrJqPSc": 728,
  "WpuBwkuNdZ4": 708,
  "mZmJ3VEBNLA": 2514,
  "YTmxNkPUUrs": 775,
  "wHLfWAcGLFU": 1048,
  "c_WojLcUqVw": 488,
  "j08L6_MoQ8o": 1861,
  "lTzjjxL8Cyg": 1921,
  "zcpirhs0cRY": 1107,
  "v5q2iwLJw74": 669,
  "yDfDqoYG9gs": 821,
  "_xLvXkqjOxg": 218,
  "o7qT_qfxd6k": 3514,
  "ofM8aJYMl7E": 704
};

function hydrateEpisodeCards() {
  document.querySelectorAll('.yt-embed[data-yt-id]').forEach((embed) => {
    const id = embed.dataset.ytId;
    const card = embed.closest('.h-card');
    const title = episodeTitles[id];

    if (!title) {
      card?.remove();
      return;
    }

    const name = card?.querySelector('.h-meta .name');
    if (name) name.textContent = title;

    const openVideo = () => window.open(
      'https://www.youtube.com/watch?v=' + id,
      '_blank',
      'noopener,noreferrer'
    );
    embed.setAttribute('role', 'link');
    embed.setAttribute('tabindex', '0');
    embed.setAttribute('aria-label', 'Watch on YouTube: ' + title);
    embed.addEventListener('click', openVideo);
    embed.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openVideo();
      }
    });

    let poster = embed.querySelector('.yt-poster');
    if (!poster) {
      poster = document.createElement('img');
      poster.className = 'yt-poster';
      poster.loading = 'lazy';
      embed.insertBefore(poster, embed.firstChild);
    }
    const fileId = id.replace(/^_/, '');
    poster.src = 'assets/thumbnails/' + fileId + '_maxres.jpg';
    poster.alt = title;
    poster.onerror = () => {
      poster.onerror = null;
      poster.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
    };
  });

  const carousel = document.querySelector('.embed-carousel-2row');
  const topRow = carousel?.querySelector('.ep-row-a');
  const bottomRow = carousel?.querySelector('.ep-row-b');
  if (topRow && bottomRow) {
    const seenIds = new Set();
    const cards = [...topRow.children, ...bottomRow.children]
      .filter((card) => {
        const id = card.querySelector('.yt-embed')?.dataset.ytId;
        if (!id || seenIds.has(id)) {
          card.remove();
          return false;
        }
        seenIds.add(id);
        return true;
      })
      .sort((a, b) => {
        const aId = a.querySelector('.yt-embed')?.dataset.ytId;
        const bId = b.querySelector('.yt-embed')?.dataset.ytId;
        return (episodeViews[bId] || 0) - (episodeViews[aId] || 0);
      });
    const splitAt = Math.ceil(cards.length / 2);
    topRow.replaceChildren(...cards.slice(0, splitAt));
    bottomRow.replaceChildren(...cards.slice(splitAt));
  }
}

document.addEventListener('DOMContentLoaded', hydrateEpisodeCards);
