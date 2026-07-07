/* ============================================================================
   CRYBT — Storyteller Kit: "Neco the Necromancer" (GrimToon reference kit, v2)
   OPTIONAL sidecar. The game is fully playable with its built-in default voice
   if this file is absent (a missing file fails silently). This kit REPLACES the
   default line library — quality over quantity (JBK 2026-07-04): roughly half
   the v1 line count, every line clever, relevant, and in profile. Same voice
   contract, documented in index.html under "THE STORYTELLER" / "NECO'S AI" and
   in DESIGN.md § "The fiction — who you are and what you serve".

   Contract: window.CRYBT_STORYTELLER_SET = { id, name, backstory, portrait?,
   parch9?, parch?, lines }. parch9 is a 9-slice dialog skin (3×3 grid of equal
   tiles: torn frame in the border tiles, repeatable fill in the center) drawn
   via CSS border-image so the box flexes; legacy parch is flat art, cover-
   cropped; parch9 wins if both ship. A pool entry is either a plain string
   (mood-agnostic) or a
   MOOD-TAGGED object {t:"…", e, p} — eligible only within ±4 of Neco's current
   Energy/Pleasantness position on the Mood Meter (−5..+5 grid; yellow hi-E/hi-P
   joy, red hi-E/lo-P anger/anxiety, green lo-E/hi-P calm, blue lo-E/lo-P
   drained). {token} placeholders resolve at display: {card}/{monster}/
   {oldCard}/{newCard} → Mecron enemy names; {name}/{total}/{factor}/{dmg}/
   {done} → ctx. Variant sub-pools: winChampion, win/lossLich|Ghost|Werewolf,
   overkillHeal, winCarried/winHeroic (battle recap), heroReview/foreshadow
   (the prepare-to-strike mutter), systemReact (settings shifted mid-run).

   THE PROFILE (JBK 2026-07-04): Neco is a BENEVOLENT VILLAIN in the MegaMind
   vein — certain his necromancy is the last true tool for good because it will
   unseat the Step-Father of Serpents. A creator craving the Darkest Dweeb's
   recognition. Reviews his minions like a tech critic (build quality, dark
   hearts that crave achievement). Speaks as "we/us" — a divided self, one
   voice the player. NEVER says "precious"; homage lives in behaviour, never
   objects. This kit omits portrait/parch9/parch, so the built-in art is reused.
   ========================================================================== */
window.CRYBT_STORYTELLER_SET = {
  id: "neco-grimtoon-v2",
  name: "Neco the Necromancer",
  backstory: "A divided self in the deep dark — one voice the will, one the covetous body. A benevolent villain, certain his necromancy is the world's last tool for good: sworn to earn the Darkest Dweeb's recognition and to unseat the Step-Father of Serpents, Lord of the Crybt.",
  lines: {

  // ---- encounter opens: the hand is dealt, nothing chosen yet -------------
  deal: [
    "Five souls in the palm, and a hush past the candle. The hush is lying. It always is.",
    "New hand, new hunger. Somewhere ahead a thing holds its face to the wall. Rude of it.",
    "Dealt. We inspect the merchandise before the dark inspects us — that is simply good practice.",
    "The crypt deals us five little arguments. We shall make them persuasive.",
    "Cards, cold and eager. Whatever waits unseen can keep waiting — genius takes a moment to set up.",
    "A fresh spread. Every card a soul, every soul an audition. We are a demanding judge.",
    "Five bones on the slab. Beyond them, a silence with opinions. We do not consult it yet.",
    "The deal is done. We adore this part — all possibility, no consequences. Yet.",
    "Look at them, freshly dealt and desperate to matter. Ambition! We can work with ambition.",
    "The dark is generous tonight — five to hold, one dread to save for later. A balanced meal.",
    {t:"ANOTHER hand already? Deal faster, dark — greatness keeps no waiting room!", e:5, p:4},
    {t:"Five more. Fine. We inspect them. We are being very brave about all of this.", e:-2, p:-2},
    {t:"Deal them slow, deal them careful… we cannot afford another mistake. Not one.", e:2, p:-4},
  ],

  // ---- a card sent to the OFFERING (the sacrifice beat) -------------------
  toss: [
    "{card}, to the altar. The Dark one collects; we curate. Between creators, this is how respect works.",
    "We give up {card} — not lost, <b>invested</b>. The offering is a hoard with patience.",
    "Onto the stone with it. Every tithe is a note to the Darkest Dweeb: <i>we are worth watching.</i>",
    "{card} for the dark's belly. We feel the pang and file it under overhead.",
    "The altar takes {card}. We tally what the dark owes us — the ledger is very much a real thing.",
    "Down it goes. We are never so generous as when generosity pays interest.",
    "A morsel for the void, a credit to our name. Grow, offering, grow for us.",
    "{card} laid down like a coin in a beggar's cup — save the beggar is a god, and gods tip well.",
    "Feed the stone. What leaves the hand returns as boons, and boons please the Dark one. Circular. Elegant. Ours.",
    "We part with {card} and it stings — which is exactly why the gift counts.",
    {t:"Take {card}, dark, take it! Tonight we can afford to be magnificent!", e:5, p:4},
    {t:"{card}… go. Buy us mercy. Tell the Dark one we have always been loyal.", e:2, p:-4},
    {t:"One more for the altar. Quietly now. We are conserving our dread.", e:-3, p:-1},
  ],

  // ---- Black Grimoire's extra discard (buried, not offered) ---------------
  discard: [
    "{card}, buried. No altar for this one — some souls are simply not portfolio material.",
    "Into the dirt, unmourned. The Grimoire lets us carry one too many, and we cull with taste.",
    "We inter {card} in the cold pile. Failed the audition. The notes were extensive.",
    "Cast down, cast out. We keep the fanged; the rest fertilize.",
    "{card} to the discard. We do not bury in anger. We bury in <i>assessment</i>.",
    "Down, quiet, gone. Even a benevolent villain keeps standards.",
    "The Grimoire wants its due. We give it {card} and both of us pretend it hurt.",
    "Buried without ceremony. Ceremony is for cards that scored.",
    {t:"Gone! Next! The roster improves by subtraction — we are practically a mentor!", e:4, p:3},
  ],

  // ---- Hero swapped up from the graveyard ---------------------------------
  heroswap: [
    "Down with {oldCard}, up with {newCard}. The graveyard is our talent pool, and we scout aggressively.",
    "We bury {oldCard} and promote {newCard}. Performance review complete. It was brief.",
    "{oldCard} steps down — mutual decision, we assure everyone — and {newCard} takes the seat.",
    "From the army rises {newCard}. Loyal, dead, and hungry for advancement. The perfect hire.",
    "A substitution! {newCard} for {oldCard}. The dead bench is deeper than the living one — always is.",
    "We reach into the grave and pull out {newCard}. Fresh from the archive. Well — fresh-ish.",
    "The lineup improves: {newCard} in, {oldCard} remembered fondly and briefly.",
    "{newCard} answers the summons. Note the posture, the drive, the total absence of complaints. Dead staff, superior staff.",
    "Swap logged: {oldCard} out, {newCard} in. Somewhere the Darkest Dweeb nods at our roster management. Surely.",
    {t:"YES — {newCard}! THIS is the piece the composition wanted!", e:5, p:4},
    {t:"{newCard}, up. Do better than the last one. Please. We are asking nicely now.", e:1, p:-4},
  ],

  // ---- prepare-to-strike mutter A: the Hero, reviewed like a tech critic --
  heroReview: [
    "Let us review {card}: the build quality is lacking, but it has a dark heart that craves achievement.",
    "{card}. Mid-tier craftsmanship, top-shelf hunger. We can work with hunger.",
    "Assessment of {card}: sturdy chassis of bone, ambition adequate, finish… rustic. It will serve.",
    "We rate {card} three skulls of five. Docked one for posture, one for the smell.",
    "{card} reports for duty. The joints creak, the eyes glow, the attitude is <i>excellent</i>.",
    "Hands-on with {card} now. First impressions: heavier than it looks, angrier than it should be. Promising.",
    "{card}, our champion of the hour. Not the one we would have designed — the one the grave provided.",
    "A closer look at {card}: no polish, no pedigree, all appetite. Honestly? Refreshing.",
    "{card} then. We have fielded worse. We have <i>buried</i> worse. Perspective is everything.",
    "Final verdict on {card}: would summon again. Probably. The review period continues.",
    {t:"{card} is MAGNIFICENT and we shall hear no notes! Five skulls! FIVE!", e:5, p:5},
    {t:"{card}… will have to do. Everything, lately, will have to do.", e:-3, p:-3},
  ],

  // ---- prepare-to-strike mutter B: presence-level dread ONLY --------------
  foreshadow: [
    "I have a bad feeling about this… and not the good kind of bad feeling.",
    "Something out there is holding its breath. We do wish it wouldn't.",
    "The dark just went quiet. The dark is never quiet for free.",
    "We are being watched. Rude of it not to introduce itself.",
    "A prickle at the neck-bone. Either dread, or drafts. The crypt offers both.",
    "Whatever waits, it waits <i>confidently</i>. We dislike confidence that is not ours.",
    "Listen. No — past the candle. …Exactly. That nothing? That nothing has teeth.",
    "The unseen keeps its face turned away. Coy. We invented coy. It shan't win.",
    {t:"Let it come! Whatever it is, it is about to be a highlight of OUR story!", e:5, p:4},
    {t:"Please be small. Please be small. Please be — we heard it breathe. That is not small.", e:3, p:-5},
  ],

  // ---- strike WIN (generic; variants below) --------------------------------
  win: [
    "{monster} falls! Necromancy: once again the most misunderstood force for good in this crypt.",
    "Down it goes, onto the pile. We grow with every little kill — professionally, spiritually, numerically.",
    "Crushed. Utterly. Oh, we do so love to watch us work.",
    "Another servant for the hoard. Rise, {monster} — you belong to the winning side now.",
    "Victory. The crypt learns, slow and sore, whose story this is.",
    "{monster}, dispatched and recruited in one motion. Efficiency! Somebody important should be taking notes.",
    "The wrath was sufficient, the outcome was inevitable, and we were <i>watchable</i> throughout.",
    "It fought like it mattered. Sweet, really. Onto the pile.",
    "One more proof for the thesis: the dark, properly managed, is a public service.",
    "{monster} joins the army. Onboarding is instant. Benefits are eternal. Reviews are mandatory.",
    {t:"ANOTHER! We cannot be stopped — the Darkest Dweeb HAS to be watching by now!", e:5, p:5},
    {t:"Say it, crypt! Say we are magnificent — the acoustics in here demand it!", e:5, p:4},
    {t:"Won. Barely. We shall call it strategy and say no more about it.", e:-2, p:1},
    {t:"It is down… good. Good. We breathe. We needed that one, we truly did.", e:-1, p:-1},
    {t:"A win. A small light in a long dark. We pocket it and keep walking.", e:-3, p:0},
  ],
  winChampion: [
    "A <b>Champion</b> did the work. {monster} never had a chance — headline talent rarely leaves one.",
    "The Champion performs and the rest of us take credit. That is called <i>direction</i>.",
    "{monster}, deleted by a Champion. We would review the fight, but there wasn't one.",
    "One Champion, zero suspense. We shall fabricate some drama for the memoirs.",
    "The Joker earns its retainer. {monster} earns a shelf in the archive.",
    {t:"THE CHAMPION! Did everyone see?! Of course they did — the DEAD saw!", e:5, p:5},
  ],
  winLich: [
    "The Lich crumbles — his stolen dead are OURS again. Repatriated, we call it. We are, after all, the good one.",
    "Kneel, bone-thief. Your collection lacked curation anyway.",
    "The Lich falls, and every soul he hoarded exhales. See? <i>Benevolence.</i> With skulls on.",
    "Down goes the Lich. Amateur necromancy, honestly — no vision, no love for the craft.",
    "The bone-king breaks. The throne behind him is one step nearer. Patience, us. Patience.",
  ],
  winGhost: [
    "The pale Queen is banished, boons or none. We never needed them. We <i>wanted</i> them, which is different.",
    "Cold hands, colder exit. Farewell, majesty — the crown suits the floor.",
    "She smothered our boons and lost anyway. Imagine losing to us at full handicap. …Actually, do imagine it. Often.",
    "The Weeping Ghost weeps her last. We would comfort her, but we are busy winning.",
  ],
  winWerewolf: [
    "{monster} lies still. Skin it — go on — it still looks warm.",
    "The moon bet wrong tonight. {monster} settles the debt in fur.",
    "Beast down. Note the coat quality: poor diet, worse temperament. Two skulls.",
    "{monster} stops mid-lunge, permanently. We do our best editing at close range.",
  ],
  // ---- battle recap variants — who actually did the work -------------------
  winCarried: [
    "Won — though let the record state: the rank and file did the lifting, not the star.",
    "Our Hero was… decorative. The minions carried us. Give the little dead their due!",
    "The chorus outsang the lead tonight. We shall not name names. The Hero knows.",
    "A victory by committee. We are told this is very modern management.",
    "The small bones did the big work. Raises for everyone — payable in glory, as always.",
    {t:"The MINIONS! Our beautiful, under-built, overachieving dead! THIS is why we do it!", e:5, p:5},
  ],
  winHeroic: [
    "THAT is a Hero. Half the wrath from one set of hands — flawless execution, top marks.",
    "The Hero carried us bodily through that one. We shall compose it a small ode. A short one.",
    "One card, most of the damage. We spotted that talent, of course. The scouting IS the genius.",
    "A star turn. The rest of the hand mostly watched — as good audiences do.",
    "Career performance from the Hero. The review writes itself: five skulls, no notes.",
  ],

  // ---- overkill / bloodlust -------------------------------------------------
  overkill: [
    "<b>OVERKILL ×{factor}</b>! Not merely won — ANNIHILATED, with production value!",
    "We tore it apart long after it was dead. …Too far? No. There is no too far. There is only <i>thorough</i>.",
    "×{factor} past necessary. The excess is the message, and the message is addressed to a throne.",
    "Such fury! It will not be spent — it carries, snarling, into the next poor thing we find.",
    "That wasn't a strike, it was a <i>statement piece</i>. ×{factor}. Frame it.",
    "The rage overflows the cup. Waste not — the next door drinks what's left.",
    {t:"×{factor}! Are you WATCHING, Dark one?! This one was for the portfolio!", e:5, p:5},
    {t:"×{factor}… good. Let the crypt flinch first for once. We are done flinching.", e:4, p:-2},
  ],
  overkillHeal: [
    "The rage has nowhere left to spill — so it turns inward and MENDS us. Warm. Wrong. Wonderful.",
    "No more doors this crawl, so the fury pays <i>us</i>. Violence with a benefits package.",
    "The wrath loops home and stitches flesh. Even our excess is well engineered.",
    "Overkill with nothing left to kill becomes medicine. The dark's economy is flawless and we love it here.",
  ],

  // ---- strike LOSS (life still safe; deep-red tags carry the bargaining) ---
  loss: [
    "{monster} bit deep — {dmg} of our life, gone. It will keep. We do not forget. We never forget.",
    "{dmg} taken. Curse it. Curse its whole rotten line, root and branch.",
    "A wound, not a grave. On we go — the crypt is long, but we are longer.",
    "It wins the exchange, not the argument. The argument is ongoing and we are very persuasive.",
    "{dmg} off the ledger. The Step-Father's crypt lands a jab and calls it a war. Adorable.",
    "We took {dmg} and gave a lesson. The tuition merely flows the wrong way tonight.",
    "Noted: {monster} exceeds spec. Somebody down here builds them properly after all. Infuriating.",
    "The dark giveth, the dark taketh {dmg}. The dark should watch its accounting.",
    {t:"Dark one, a word? We have been LOYAL. Adjust the odds. Just a little. Between creators.", e:4, p:-4},
    {t:"We are not losing — we are gathering data. Painful, bleeding data. …Perhaps the Benevolent Matron punished too sparingly.", e:3, p:-5},
    {t:"Fine. FINE. We offer double next altar. Triple! Only make the next one small and slow and stupid.", e:5, p:-4},
    {t:"Ah. Hm. That one hurt more than we shall admit aloud. Moving on. Briskly.", e:-2, p:-3},
    {t:"{dmg} more gone… the candle shortens and the dark just watches. Take notes, then. We remain worth watching.", e:-4, p:-4},
  ],
  lossLich: [
    "The Lich wore our own dead against us — and we broke upon them. The insult! The INSULT of it!",
    "Beaten with borrowed bones. He files no permits, honors no craft, and WINS? The crypt has no standards.",
    "The bone-thief takes the round. Enjoy the lead, your hollowness. We are patient dead.",
    "Our army, his puppets, our blood. There will be a reckoning with footnotes.",
  ],
  lossGhost: [
    "The Queen smothered every boon, and still we swung — and missed. A cold, cold night.",
    "Her majesty cheats by existing. Boonless, we were merely brilliant — and it wasn't enough. Tonight.",
    "The pale Queen holds court one more round. We shall return with worse manners.",
  ],
  lossWerewolf: [
    "The moon favoured the beast this once. Bind the wound; we owe it one now.",
    "Fangs first, questions never. {dmg} of us proves the beast's thesis. Rebuttal pending.",
    "The wolf wins on athleticism. We win on <i>narrative</i>. Eventually. Ow.",
  ],

  // ---- strike LOSS that leaves us critical (life <= 6) ---------------------
  lowlife: [
    "{dmg} more, and so little left… we can hear the altar salivating. Careful. Careful now.",
    "We bleed toward the dark. One more wound and it swallows us whole. We are not ready. Are we ready?",
    "So thin, the thread we hang by. Do not be brave now — be <b>clever</b>. Be clever.",
    "The candle gutters. Every choice from here is signed in our own blood, so write neatly.",
    "Life runs low and the crypt leans closer, curious. Enjoy the suspense, walls. We planned it. Obviously.",
    "This is the part of the story where the hero nearly falls. <i>Nearly.</i> We checked the manuscript.",
    {t:"Dark one — DARK ONE — a benevolent patron intervenes about now! Any moment! …Any moment.", e:5, p:-5},
    {t:"We bargain, then: our next three boons, dedicated to your glory. Notarized in blood. KEEP US STANDING.", e:4, p:-5},
    {t:"So cold in the fingers… hold the cards tighter, us. Tighter.", e:-4, p:-5},
  ],

  // ---- the run ends — life reaches 0 ---------------------------------------
  death: [
    "The candle… gutters out. So this is how the crawl ends. It was glorious. Raise us again — please, again.",
    "We fall. The crypt keeps us now. But we willed it well — remember that, when we come back.",
    "Down at last. Do not mourn us long. Shuffle the deck; we will be waiting in it.",
    "Cold. Everything, cold. The dead make such excellent students — we shall be teaching by Thursday.",
    "The Step-Father keeps his throne another night. Circle the date, serpent-lord. We are a recurring character.",
    "Every great villain gets a death scene. Ours was <i>luminous</i>. The sequel is already in development.",
    "Matron, look away — your boy is briefly horizontal.",
    "We die as we lived: ambitious, misunderstood, and demonstrably the most interesting thing in this crypt.",
    "The dark takes us home. Note for the record: benevolence was attempted. The crypt declined it. THE CRYPT'S loss.",
  ],

  // ---- offering tallied at the lair ----------------------------------------
  offering: [
    "The altar tallies its feast — <b>{total}</b> to the Dark one. It is pleased. Mostly pleased.",
    "The offering is weighed and swallowed whole. Now — what do we buy with the Dark one's favour?",
    "Fed, and grateful. The shelves of the lair swing open for us.",
    "{total} points of devotion, formally receipted. The Darkest Dweeb keeps flawless books. So do we.",
    "The tithe lands. Somewhere in the deep dark, a patron adjusts our standing by exactly {total}.",
    "The stone drinks and the shop wakes. Commerce among monsters — the crypt's one honest ritual.",
    {t:"{total}! A TRIBUTE! Publish the number! Carve it somewhere prominent!", e:5, p:5},
    {t:"{total} to the dark. Enough? It has to be enough. We need everything the shelves will give.", e:2, p:-3},
  ],

  // ---- a boon acquired -------------------------------------------------------
  boon: [
    "<b>{name}</b>! We must have it — we must <i>treasure</i> it — it pleases the Dark one to hoard a gluttony of gifts.",
    "We take the {name}, and we never, ever give it back. Ours. To keep. To <b>guard</b>.",
    "Another treasure for the hoard. The Dark one hoards; so hoard we.",
    "Mine. Ours. One more shining thing for the deep places.",
    "The {name} joins the collection. Curation, remember — a hoard without a theme is just clutter.",
    "Acquired: {name}. The unboxing was ceremonial. The review is five skulls.",
    "The {name}, at last. We have coveted this from across the room like a professional.",
    "Every boon is a brick in the argument that we deserve the throne. The {name} is load-bearing.",
    {t:"THE {name}! Wrap it in shadow — no, no wrapping, we wear it OUT of the shop!", e:5, p:5},
    {t:"The {name}. Good. Stack it near the exit — we may need it sooner than we would like.", e:0, p:-3},
  ],
  prayerArmor: [
    "The dark prayer is heard — the ward thickens around us. Let the next blow try us now.",
    "Armour, drawn up out of shadow. We would smile, if we still had the face for it.",
    "A second skin of night. Tailored, obviously.",
    "The ward settles over the bones like a patron's hand on the shoulder. We stand a little taller.",
  ],
  prayerDom: [
    "Our will hardens — hardens like old bone. Even the mightiest shall break upon it.",
    "Dominance. Yes. Let them feel the weight of the will behind the whisper.",
    "The spine straightens, the voice drops, the crypt takes a small step back. As it should.",
  ],
  prayerFury: [
    "Fury, kindled and kept close. We shall not walk into the next fight cold.",
    "The rage banks like coals. Every door we open, it flares up hot again.",
    "Bottled wrath, cellar-aged. We uncork it on the next thing that blinks at us wrong.",
  ],

  // ---- a crawl survived, descending -----------------------------------------
  crawlComplete: [
    "Crawl {done} survived! Down we go — deeper, colder, closer to the throne we mean to take.",
    "The lair door shuts behind us. Further down the throat of the crypt — where <i>he</i> waits.",
    "{done} crawls of the dead behind us. Every step nearer the Step-Father's seat. Good.",
    "Chapter {done}, closed. The pacing is impeccable. We would know — we are both author and lead.",
    "Down the next stair. The dark thickens like applause.",
    {t:"Crawl {done}, CONQUERED! The Dark one's attention is practically a spotlight now!", e:5, p:5},
    {t:"Crawl {done} done… breathe, us. The lair behind, the throne ahead, the ledger balanced.", e:-3, p:3},
    {t:"Another crawl survived. Quiet pride. The good kind. The earned kind.", e:-2, p:4},
    {t:"{done} down, and the wounds keep the score honest. Descend anyway. Always descend.", e:0, p:-3},
  ],

  // ---- the flag is switched on mid-play — the Storyteller wakes -------------
  greet: [
    "We are awake, we are awake. Speak, and we shall dress it all in dread.",
    "Ahh — we are to narrate our little massacre now? We would be <b>delighted</b>.",
    "Neco stirs. Every kill shall have its eulogy now — every one.",
    "The Storyteller takes the stage. Dim the torches. Cue the dead.",
    "You bring us back for the voice. Everyone does. We are gracious about it. Mostly.",
    "Present, theatrical, and lightly decomposed. Where were we? Ah yes — <i>everywhere</i>.",
  ],

  // ---- portrait clicked — idle musings (the mythology showcase) -------------
  idle: [
    "Yes? We are here. We are always here. We cannot very well leave ourselves, can we?",
    "Why do we hoard the boons so? Because <i>he</i> hoards — the Darkest Dweeb never let one treasure die. Neither shall we.",
    "The Step-Father sits the throne that should be ours — Lord of the Crybt, Sinister Sadist, absentee in chief. …Not for long.",
    "They left her, you know. Left the Matron of Malevolence, and the boy to the basement dark. We do not forgive it.",
    "Two voices, one skull. You steer, we narrate. Frankly the crypt is lucky to have either of us.",
    "People call us villain. VILLAIN! We raise the unemployed dead and give them purpose. Who, exactly, is the monster here?",
    "One day the Dark one will look upon our work — the army, the hoard, the throne — and say <i>well made</i>. That is the whole plan. Do not touch it.",
    "Every card is a soul, and every soul a servant. Choose well. Choose greedily.",
    "The crypt is quiet. Too quiet. Shall we make some noise? Shall we?",
    "We keep a list of everyone who doubted us. It is alphabetized. It is <i>laminated in shadow</i>.",
    "The Matron always said: punish generously, praise rarely, hoard everything. A curriculum, not a childhood.",
    "Between us — and we are always between us — the crusade goes well. The crusade goes <i>exactly to plan</i>.",
  ],

  // ---- settings changed mid-run — the runes shift ----------------------------
  systemReact: [
    "To the abyss with these confounded runes!",
    "Ah — the Crypt changes shape even as we crawl! Bold of it.",
    "Did the walls just… rearrange? We felt that in our bones. All of them.",
    "Someone is fiddling with the laws of the world. We respect the audacity. We <i>are</i> the audacity.",
    "The deep machinery of the crypt grinds and resets. We narrate on regardless — professionals do.",
    "A tremor in the rules of things. The will tinkers; the crypt obeys. Remember whose story this is, though.",
    "The runes rearrange themselves mid-sentence. Fine. We are excellent at improvisation.",
    "Reality hiccups. We choose to take it as a standing ovation.",
  ],

  }
};
