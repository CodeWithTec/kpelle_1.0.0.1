// Define the Variable of the Translator 

let demoInput = document.getElementById("input_line");
let timeTranslate = document.getElementById("trans");

// The obj of the translator 
// Considering the function and Trocker 

function translate_1(){
    const obj = {
       "":"You didn't enter a Word",
       "leaf":"Láa",
       "chicken":"Tέԑ",
       "orange":"Gamέnԑ",
       "tread":"Yèe",
        "mother inlaw":"Yûara",
        "father inlaw":"Nâŋ ŋɔnâŋ",
        "amen":"É kέ tí",
        "thank god": "ɣâla sԑɣêi",
        "thanks":"sԑɣêi",
        "god":"ɣâla",
        "table":"Tê ƃele",
        "fine":"lέlԑԑ",
        "food":"Mii-sԑŋ",
        "house":"Pέrԑi",
        "going": "Liî",
        "cassava":"Manaŋ",
        "school":"kɔlɔ-pԑrԑ mu",
        "this one":"Nyíŋe",
        "okey": "Ôoei",
        "load":"Kpîri",
        "i am":"ήgaa",
        "mind":"ήgili",
        "understanding":"mԑni ŋáa",
        "life":"Fúlu-laa",
        "read":"Lôno",
        "city":"Taa-lee",
        "Room":"lôŋpoi",
        "cry":"Wɔlɔ",
        "happiness":"Lii nԑԑ",
        "good":"pɔni",
        "frame":"Kpâlaŋ",
        "jerusalem":"zerusâlԑŋ",
        "hunger":"Puru",
        "woman":"Nԑni",
        "girl child":"Nԑni-lo",
        "song":"Wule",
        "day":"ɣelei",
        "rest":"vii-tɔɔ",
        "boy child":"surɔŋ-lo",
        "small":"Kúŋ",
        "gift":"Sama sԑŋ",
        "sun":"Fólo",
        "stringer":"ŋɔya",
        "My people":"Nûai",
        "people":"Núu-kpune",
        "soup":"ńawôi",
        "crab":"Geêŋ",
        "sacrifice": "Sâla",
        "paper":"Kɔlɔ-lâa",
        "come":"Pá",
        "lesson":"kɔlɔ-woo",
        "book":"Kɔlɔ",
        "funnel":"Sóo",
        "pan":"Pâne",
        "beans":"Tɔɔ/tɔɔŋ",
        "broom":"Wawa",
        "hoe":"Kâli",
        "soup":"Lâo",
        "sand": "ŋáya",
        "bed":"Gbìŋ",
        "comb":"Va",
        "cup":"kɔpu",
        "drink":"kpele",
        "hours":"soo",
        "Plantain":"Gôi",
        "rep":"kpɔɔi",
        "telephone":"Tóli-ƃó-kɔli",
        "goat":"Ƃoli",
        "law":"tɔŋ",
        "spoon":"Mina",
        "forest":"Wolaa",
        "duck":"Kwíi-tԑԑ",
        "umbrella":"Fólo-kpanâŋ",
        "teacher":"kaamɔ̑ɔ/tiisԑԑ",
        "pot":"leɣi",
        "trouser":"бԑlԑ",
        "porcupine":"Pii",
        "bread":"Kpólo",
        "lizard":"Korô",
        "crocodile":"Zûu",
        "bird":"ŋɔni",
        "elephant":"séle",
        "good evening":"ɣele wurii",
        "good night":"ɣele wurii",
        "friend":"Naoi",
        "pineapple":"Kwíi-tou",
        "rice":"Mɔlɔŋ",
        "here":"Ƃé",
        "sick":"kɔlԑi",
        "good morning":"Ya ŋuŋ/ƃa ŋuŋ",
        "good afternoon":"Ka tua",
        "rat":"Ŋína",
        "cat":"Nyàle",
        "cutlas":"Gbêɣa",
        "ladder":"Déle",
        "worm":"Kpeli",
        "you":"Yâ",
        "on":"Káa",
        "christmas":"kélemɔsi",
        "snake":"Kàli",
        "meat":"Sua",
        "bird":"ŋɔni",
        "sheep":"Ƃála",
        "town":"Taa",
        "toothpaste":"La waa kpolo",
        "soap":"Kpolo",
        "fire":"ŋɔŋ",
        "trap":"Ƃáre",
        "shirt":"Yԑkԑ",
        "hammock":"Làli",
        "monkey":"Kwala",
        "potatoes":"Kúyeŋ",
        "rock":"kɔni",
        "stone": "kɔni",
        "father in-law":"ƃɔlɔ",
        "drum":"fԑli",
        "fish":"nyԑԑ",
        "grand-nuts":"telâŋ",
        "peanut":"telâŋ",
        "mushroom":"féna",
        "banana":"Gôi",
        "butterfly":"Gwéi – gono",
        "fly":"Gono",
        "men":"zinâai",
        "chair":"See-seŋ",
        "bottle":"Sane",
        "airplain":"Koôŋ-keleŋ",
        "tree":"Wúru",
        "mat":"Gara",
        "dog":"ɣîla",
        "toothbrush":"Lawâ",
        "neuroma":"Féna",
        "lazard":"Korô",
        "ant":"Zaza",
        "aix":"Yuĉ",
        "no":"kpa",
        "cloth":"Sȇγe",
        "mouth":"La",
        "lip": "La",
        "it":"La",
        "road":"Pere",
        "charcoal":"Tiγi",
        "man":"surɔ̑ŋ",
        "cooked rice":"бa",
        "oil":"wulɔ",
        "batterball":"kwԑnԑ֮ԑ",
        "salt":"kpolo (mii-kpolo)",
        "onion":"Yaбa",
        "okra":"Kpԑ֮ԑŋ",
        "corn":"Gbaai",
        "water":"Ya",
        "palmnut":"tuo-kao",
        "wine":"nɔɔi",
        "palm wine":"kȇlȇ lɔɔ",
        "greens":"Tuma-laa",
        "eddoe":"gblɔбele",
        "mango":"pulȏŋ",
        "plum":"pulȏŋ",
        "timato":"timeto",
        "yam":"бele",
        "pronoun":"sԑŋ pɔɔ-tɔɔ woo-ŋa",
        "i":"ŋa",
        "we":"kwa",
        "he":"E",
        "she":"E",
        "them":"Dia",
        "your":"ka",
        "you":"ya",
        "verb":"Kԑ-woo-ŋa",
        "coming":"paȋ",
        "go":"Li",
        "speak":"Lono",
        "talk":"lono",
        "write":"pɔyԑ",
        "lay":"laa",
        "eat":"Mii",
        "cook":"ɤiri",
        "beat":"lokwa",
        "see":"kaa",
        "wash":"waa",
        "walk":"sia",
        "fix":"kpԑtԑ",
        "sleep":"nyii",
        "buy":"ya",
        "enter":"lɔ",
        "kill":"paa",
        "sell":"kɔlԑ",
        "laugh":"ɤԑlԑ",
        "make":"sȋɤe",
        "garmet":"kire-sȋɤe",
        "die":"si",
        "lie":"lἐԑ",
        "know":"kɔlɔŋ",
        "able":"pɔri",
        "give":"fe֜",
        "this":"Ŋi",
        "want":"wԑlȋi",
        "tomorrow":"tinaa",
        "sibling":"saaбɔlɔ",
        "knife":"бoa",
        "pot":"leɤi",
        "bucket":"bɔki",
        "plate":"pleti",
        "time":"tỉa-tỉa",
        "lips":"La-kpɔ",
        "voice":"wỏo",
        "sky":"ɤele",
        "god":"ɤȃla",
        "brest":"ɤiri",
        "tie":"ɤiri",
        "lier":"lἐԑ-nuu",
        "alcohol":"lɔɔ",
        "town":"taa/daai",
        "chief":"kalȏŋ"
    }

    document.getElementById("output").innerHTML = obj[demoInput.value.toLowerCase()] ?? "Your Search is Not Available.";
    document.getElementById("short").innerHTML = "<small><i>en/kpelle:codewithtec</i></small>";

    // this is the supported word lines code 
    if(demoInput.value.toLowerCase() == "leaf"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Leaf is a name given to a part fo the plant that allow it to take in oxygen.";
    }else if(demoInput.value.toLowerCase() == ""){
        document.getElementById("comment").innerHTML = "Please Enter a Word!";
    }else if(demoInput.value.toLowerCase() == "chicken"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Name of a Domestic Animal we fine in our surrounding and home.";
    }else if(demoInput.value.toLowerCase() == "orange"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Name of a Fruit we fine in our market places, surrounding and home.";
    }else if(demoInput.value.toLowerCase() == "tread"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A Tread is a material used in sewing cloth together. It is mostly found in the Tailor shop.";
    }else if(demoInput.value.toLowerCase() == "mother inlaw"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> One spouse's Mother.";
    }else if(demoInput.value.toLowerCase() == "father inlaw"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> One spouse's Father.";
    }else if(demoInput.value.toLowerCase() == "amen"){
        document.getElementById("comment").innerHTML = "<b><i>Adverb</i></b> <br> At the end of religious prayers: so be it (we agreed).";
    }else if(demoInput.value.toLowerCase() == "thank god"){
        document.getElementById("comment").innerHTML = "<b><i>Interjection</i></b> <br> Used to express gratitude or relief.";
    }else if(demoInput.value.toLowerCase() == "thanks"){
        document.getElementById("comment").innerHTML = "<b><i>Interjection</i></b> <br> Used to express appreciation or gratitude.";
    }else if(demoInput.value.toLowerCase() == "god"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A deity or Supreme being; a supernatural, typically immortal, being with superior powers, to which personhood is attributed <br> The most frequently used name for the islamic god is Allah.";
    }else if(demoInput.value.toLowerCase() == "table"){
        document.getElementById("comment").innerHTML = "<b><i>table</i></b> <br> An item of furniture with a flat top surface raised above the ground, usually on one or more legs..";
    }else if(demoInput.value.toLowerCase() == "fine"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> Senses referring to subjective quality. synonyms: Good, Excellent.";
    }else if(demoInput.value.toLowerCase() == "food"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any solid substance that can be consumed by living organisms, especially by eating, in order to sustain life.";
    }else if(demoInput.value.toLowerCase() == "house"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A structure built or serving as an abode of human beings <br> An apartment building within a public housing estate.";
    }else if(demoInput.value.toLowerCase() == "going"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> A departure. <br> THe suitability of ground for riding, walking etc..";
    }else if(demoInput.value.toLowerCase() == "cassava"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Manioc (Manihot esculenta), a tropical plant which is the source of tapioca.";
    }else if(demoInput.value.toLowerCase() == "school"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An institution dedicated to teaching and learning; an educational institution.";
    }else if(demoInput.value.toLowerCase() == "this one"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br> A specific Object, thing or person (especially one nearby or known).";
    }else if(demoInput.value.toLowerCase() == "okey"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> Endorsement; approval; acceptance; acquiescence.";
    }else if(demoInput.value.toLowerCase() == "load"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A burden; a weight to be carried.";
    }else if(demoInput.value.toLowerCase() == "i am"){
        document.getElementById("comment").innerHTML = "<b><i>Proper Noun</i></b> <br> Is a One for all, all for one.";
    }else if(demoInput.value.toLowerCase() == "mind"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The ability ot be aware of things.";
    }else if(demoInput.value.toLowerCase() == "understanding"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> the act of one that understands or comprehends; comprehension knowledge; discernment.";
    }else if(demoInput.value.toLowerCase() == "life"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The state of Organisms preceding their death, characterized by biological processes.";
    }else if(demoInput.value.toLowerCase() == "read"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To look at and interpret letters on other information that written.";
    }else if(demoInput.value.toLowerCase() == "city"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A large settlement, bigger than a town; sometimes with a specific legal definition, depending on the place.";
    }else if(demoInput.value.toLowerCase() == "room"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Space for something, or to carry out an activity <br> A particular portion of space.";
    }else if(demoInput.value.toLowerCase() == "cry"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> To utter loudly to call out; to declare publicly.";
    }else if(demoInput.value.toLowerCase() == "happiness"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The emotion of being happy; joy.";
    }else if(demoInput.value.toLowerCase() == "good"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> Acting in the interest of what is beneficial, ethical, or moral.";
    }else if(demoInput.value.toLowerCase() == "frame"){
    document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To fit, as for a specific end or purpose; mark suitable or comfortable; adapt; adjust.";
    }else if(demoInput.value.toLowerCase() == "jerusalem"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A city in the holy land.";
    }else if(demoInput.value.toLowerCase() == "hunger"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A need or compelling desire for food.";
    }else if(demoInput.value.toLowerCase() == "woman"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An adult female human. All female humans collectively; womankind.";
    }else if(demoInput.value.toLowerCase() == "girl child"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A young female human.";
    }else if(demoInput.value.toLowerCase() == "song"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A musical composition with lyrics for voice or voices, performed by singing.";
    }else if(demoInput.value.toLowerCase() == "day"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any period of 24 hours.";
    }else if(demoInput.value.toLowerCase() == "rest"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> uncountable, of a person or animal relief from work or activity by sleeping; sleep.";
    }else if(demoInput.value.toLowerCase() == "boy"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A young male human.";
    }else if(demoInput.value.toLowerCase() == "small"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> Not large or big; insignificant; few in number.";
    }else if(demoInput.value.toLowerCase() == "gift"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Something given to another voluntarily, without charge. <br> A talent or natural ability.";
    }else if(demoInput.value.toLowerCase() == "sun"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The star that the Earth revolves around and from which it receives light and warmth.";
    }else if(demoInput.value.toLowerCase() == "stringer"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A person who is newly seen around the environment.";
    }else if(demoInput.value.toLowerCase() == "my people"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The follower of a perticular person or a group of people who are in unity.";
    }else if(demoInput.value.toLowerCase() == "people"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Used as Plural of person; a body of human beings considered generally or collectively.";
    }else if(demoInput.value.toLowerCase() == "soup"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any of various dishes commonly made by combining liquids, such as water or stock with other ingredients.";
    }else if(demoInput.value.toLowerCase() == "crab"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A crustacean of the infraorder Brachyura, having five pars of legs, the foremost of which are in the form of claws and carapace.";
    }else if(demoInput.value.toLowerCase() == "sacrifice"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> To offer something or to give to a deity.";
    }else if(demoInput.value.toLowerCase() == "paper"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A sheet material typically used for writing on or printing on.";
    }else if(demoInput.value.toLowerCase() == "come"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To move from further away to nearer to.";
    }else if(demoInput.value.toLowerCase() == "lesson"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A section of learning or teaching into which a wider learning content.";
    }else if(demoInput.value.toLowerCase() == "book"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A collection of sheets or paper bound together to hinge at one edge, containing printed or writing.";
    }else if(demoInput.value.toLowerCase() == "funnel"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A utensil in the shape of an inverted hollow cone terminating in a narrow pipe for channeling liquids.";
    }else if(demoInput.value.toLowerCase() == "pan"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A wide, flat receptacle used around the home, especially for cooking.";
    }else if(demoInput.value.toLowerCase() == "beans"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> plural for a bean. A plant or fruit that contain more protein.";
    }else if(demoInput.value.toLowerCase() == "broom"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A domestic utensil with fibers bound together at the end of long handle, used for sweeping.";
    }else if(demoInput.value.toLowerCase() == "hoe"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An agricultural tool consisting of a long handle with a flat blade fixed perpendicular to it at the end, used for digging rows.";
    }else if(demoInput.value.toLowerCase() == "soap"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A metallic salt derived from a fatty acid, commonly used in cleaning products.";
    }else if(demoInput.value.toLowerCase() == "sand"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Rock that is ground more finely than gravel, but is not as fine as silt.";
    }else if(demoInput.value.toLowerCase() == "bed"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A peace of furniture, usually flat and soft, on which to rest or sleep.";
    }else if(demoInput.value.toLowerCase() == "comb"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A toothed implement for grooming the hair or (formerly) for keeping it in place.";
    }else if(demoInput.value.toLowerCase() == "cup"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A concave vessel for drinking from, usually made of opaque material (as opposed to a glass).";
    }else if(demoInput.value.toLowerCase() == "drink"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> To consume (a liquid) through the mouth.";
    }else if(demoInput.value.toLowerCase() == "hours"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The time period of sisty minutes; one twenty-fourth a day.";
    }else if(demoInput.value.toLowerCase() == "plantain"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A plant of the genus plantago with a rosette of sessile leaves about 10 cm(4inches) long with a narrow part.";
    }else if(demoInput.value.toLowerCase() == "rep"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> The full mentrol period of a fruit or a said crops.";
    }else if(demoInput.value.toLowerCase() == "telephone"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A telecommunition device (originally mechanical, and now electronic used for two-way talking with another peroson).";
    }else if(demoInput.value.toLowerCase() == "goat"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A mammal, capra aegagrus hircus and similar species of the genus capra.";
    }else if(demoInput.value.toLowerCase() == "law"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> (usually with 'the'). The body of binding rules and regulations, customs and standards estabished in a community by it legislative and judicial authorities.";
    }else if(demoInput.value.toLowerCase() == "spoon"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An implement for eating or serving.";
    }else if(demoInput.value.toLowerCase() == "forest"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A dense uncultivated tract of trees and undrgrowth, larger than woods.";
    }else if(demoInput.value.toLowerCase() == "duck"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A duck is a animal tha simaller to birds the lay eggs and has wings.";
    }else if(demoInput.value.toLowerCase() == "umbrella"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A cloth-covered frame used for protection against rain or sun.";
    }else if(demoInput.value.toLowerCase() == "teacher"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A person who teach, especially one employed in a school.";
    }else if(demoInput.value.toLowerCase() == "pot"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A flat-bottomed vessel (usually metal) used for cooking food.";
    }else if(demoInput.value.toLowerCase() == "trouser"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A trouser is a cloth design with two legs. This is commonly seen on male.";
    }else if(demoInput.value.toLowerCase() == "porcupine"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any of several rodents of either of the taxonomic families Hystricidae (Old World porcupines) or New world  porcupines, both form the infraoder Hystricognathi, noted for their sharp spines or quills, whic are raised when the animal is attacked or surprised.";
    }else if(demoInput.value.toLowerCase() == "bread"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A foodstuff made by baking dough made from cereals.";
    }else if(demoInput.value.toLowerCase() == "lizard"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any reptile of the order Squamata that is not a snake or an amphsbaenian usually having four legs.";
    }else if(demoInput.value.toLowerCase() == "crocodile"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any of the predatory amphibious reptiles of the family crocodylidae.";
    }else if(demoInput.value.toLowerCase() == "bird"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A member of the class of animal Aves in the phylum chordata characterized by being a warm-blooded.";
    }else if(demoInput.value.toLowerCase() == "elephant"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A mammal of the order proboscidea, having a trunk, and two large ivory tusks jutting from the upper jaw.";
    }else if(demoInput.value.toLowerCase() == "friend"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A person, typically someone other than a family member, spourse or lover, whose company one enjoys and towards whom one feels affection.";
    }else if(demoInput.value.toLowerCase() == "pineapple"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A tropical plant, Ananas comosus, native to South Ameria, having thirty or more long, spined and pointed leaves surrounding a thick stem.";
    }else if(demoInput.value.toLowerCase() == "rice"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> (uncountable) cereal plants, oryza sative of the grass family whose seeds are used as food.";
    }else if(demoInput.value.toLowerCase() == "here"){
        document.getElementById("comment").innerHTML = "<b><i>Adverb</i></b> <br> is on or at this place.";
    }else if(demoInput.value.toLowerCase() == "sick"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> THe act of been ill or poor in health.";
    }else if(demoInput.value.toLowerCase() == "good morning"){
        document.getElementById("comment").innerHTML = "<b><i>Interjection</i></b> <br> Used as a greeting when meeting someone for the first time in the morning.";
    }else if(demoInput.value.toLowerCase() == "good afternoon"){
        document.getElementById("comment").innerHTML = "<b><i>Interjection</i></b> <br> Used as a greeting when meeting someone for the first time in the afternoon.";
    }else if(demoInput.value.toLowerCase() == "rat"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A medium-sized rodent belonging to the genus Rattus.";
    }else if(demoInput.value.toLowerCase() == "cat"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A animal of the family felidae.";
    }else if(demoInput.value.toLowerCase() == "cutlas"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A sharp instrument used for cutting large object.";
    }else if(demoInput.value.toLowerCase() == "ladder"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An instrument made of wood or iron people usually used for elevation.";
    }else if(demoInput.value.toLowerCase() == "worm"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A generally tubular invertebrate of annelid phylum; an earthworm.";
    }else if(demoInput.value.toLowerCase() == "you"){
        document.getElementById("comment").innerHTML = "<b><i>peonoun</i></b> <br> The person spoken or written to.";
    }else if(demoInput.value.toLowerCase() == "on"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> In state of being active.";
    }else if(demoInput.value.toLowerCase() == "christmas"){
        document.getElementById("comment").innerHTML = "<b><i>Proper Noun</i></b> <br> The festival/holiday commemorating the birth of Jesus Christ.";
    }else if(demoInput.value.toLowerCase() == "snake"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A legless reptile of the suborder serpentes with a long, thin body and a fork-shaped tongue.";
    }else if(demoInput.value.toLowerCase() == "meat"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The flesh (muscle tissue) of an animal used as food.";
    }else if(demoInput.value.toLowerCase() == "sheep"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A woolly ruminant of the genus Ovis.";
    }else if(demoInput.value.toLowerCase() == "town"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A sittlement; an are with residential districts, shops and amenities, and its own local govermnent.";
    }else if(demoInput.value.toLowerCase() == "toothpaste"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A paste, normally used with a toothbrush, for cleaning the teeth.";
    }else if(demoInput.value.toLowerCase() == "fire"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Chemical reaction involving the bonding of oxygen with carbon or other fuel.";
    }else if(demoInput.value.toLowerCase() == "trap"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A machine or other device designed to catched or kill something.";
    }else if(demoInput.value.toLowerCase() == "shirt"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An article of clothing that is worn on the upper part of the body.";
    }else if(demoInput.value.toLowerCase() == "hammock"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A swining couch or bed, usually made of netting or canvas about six feet wide.";
    }else if(demoInput.value.toLowerCase() == "monkey"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A member of the clade simiiformes other than those in the clade Homionidea containing human and apes.";
    }else if(demoInput.value.toLowerCase() == "potatoes"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A plant that grown within the earthcrust.";
    }else if(demoInput.value.toLowerCase() == "rock"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The naturally occuring aggregate of solid mineral matter that constitutes a sifnificant part of the earth's crust.";
    }else if(demoInput.value.toLowerCase() == "stone"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The naturally occuring aggregate of solid mineral matter that constitutes a sifnificant part of the earth's crust.";
    }else if(demoInput.value.toLowerCase() == "father in-law"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The father of one spourse/lover.";
    }else if(demoInput.value.toLowerCase() == "drum"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An instrument used to make sound, usually the sound of is drum is enjoyable and amusicing.";
    }else if(demoInput.value.toLowerCase() == "fish"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A cold bloodly animal that live in water.";
    }else if(demoInput.value.toLowerCase() == "grand-nuts"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A legume resembling nut, the fruit of the plant Aravhis hypogaea.";
    }else if(demoInput.value.toLowerCase() == "peanut"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A legume resembling nut, the fruit of the plant Aravhis hypogaea.";
    }else if(demoInput.value.toLowerCase() == "mushroom"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any of the fleshy fruiting bodies of fungi typically produced above ground on soil or their food sourcesuch as decaying wood.";
    }else if(demoInput.value.toLowerCase() == "banana"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An elongated curved tropical fruit of a banan plant, which grow in bunches nad has a creamy flesh and a smooth skin.";
    }else if(demoInput.value.toLowerCase() == "butterfly"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A flying insect of the order Lepidoptera.";
    }else if(demoInput.value.toLowerCase() == "fly"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> To travel through the air.";
    }else if(demoInput.value.toLowerCase() == "men"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The plural form of the word 'Man'.";
    }else if(demoInput.value.toLowerCase() == "chair"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The item or furniture used to sit on or in.";
    }else if(demoInput.value.toLowerCase() == "bottle"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A container typically made of glass or plastic and having a tapered nick.";
    }else if(demoInput.value.toLowerCase() == "airplain"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Powered heavier-than-air aircraft with fixed wings.";
    }else if(demoInput.value.toLowerCase() == "tree"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A perennial woodly plant, not exactly defined, but differentated from a shrub by its larger size.";
    }else if(demoInput.value.toLowerCase() == "mat"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A flat peace of coarse material sed for wiping one's feet, or as a decorative or protective floor covering.";
    }else if(demoInput.value.toLowerCase() == "dog"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A mammal of the family Canidae.";
    }else if(demoInput.value.toLowerCase() == "toothbush"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A brush used with toothpaste for cleanning the teeth.";
    }else if(demoInput.value.toLowerCase() == "neuroma"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A tumour composed of nerve sells.";
    }else if(demoInput.value.toLowerCase() == "ant"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any of various insects in the family Formicidae.";
    }else if(demoInput.value.toLowerCase() == "aix"){
        document.getElementById("comment").innerHTML = "<b><i>Proper Noun</i></b> <br> A taxonomic genus with the.";
    }else if(demoInput.value.toLowerCase() == "no"){
        document.getElementById("comment").innerHTML = "<b><i>Adverb</i></b> <br> Used before different, before comparative with more and less and idiomatically before other comparatives.";
    }else if(demoInput.value.toLowerCase() == "cloth"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A fabric, or usually made of woven, knitted, or felted fibres.";
    }else if(demoInput.value.toLowerCase() == "mouth"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The opening of a creature through which food is ingested.";
    }else if(demoInput.value.toLowerCase() == "lip"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Either of the two fleshy protrusions around the opening of the mouth.";
    }else if(demoInput.value.toLowerCase() == "it"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br> The third person singular persional pronoun.";
    }else if(demoInput.value.toLowerCase() == "road"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A way used for traveling between places.";
    }else if(demoInput.value.toLowerCase() == "charcoal"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Impure carbon obtain by destructive distillation of wood.";
    }else if(demoInput.value.toLowerCase() == "man"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An adult male human.";
    }else if(demoInput.value.toLowerCase() == "cooked rice"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A rice that is ready for eating after a minutes on fire and water.";
    }else if(demoInput.value.toLowerCase() == "oil"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Petroleum based liquid used as fuel or lubricant.";
    }else if(demoInput.value.toLowerCase() == "batterball"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Is a plant that is used in the lo.";
    }else if(demoInput.value.toLowerCase() == "salt"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A common substance, chemically consisting mainly of sodium chloride.";
    }else if(demoInput.value.toLowerCase() == "onion"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A monocotyledonous plant (Allium cepa), allied to garlic, used as vegetable and spice.";
    }else if(demoInput.value.toLowerCase() == "okra"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The edible immature mucilaginous seed pod(porperly, capsule of the Abelmoschus esculentus. A flowering mallow plant Abelmoschus esculentus itself.).";
    }else if(demoInput.value.toLowerCase() == "corn"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Commonwealth, A grain or seed, especially of a cereal crop.";
    }else if(demoInput.value.toLowerCase() == "water"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The aforementioned liquid, considered one of the Classical elements or basic elements of alchemy. H<sub>2</sub>O is the molecular formula.  .";
    }else if(demoInput.value.toLowerCase() == "palmnut"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The edidle seed of Elaeis guineensis, the oil palm.";
    }else if(demoInput.value.toLowerCase() == "wine"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> An alcholic beverage made by fermenting grape juice with an ABV ranging from 5.5-16%.";
    }else if(demoInput.value.toLowerCase() == "palm"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any of verious evergreen tree from the family Plamae or Arecaceae, which are mainly found in the tropics.";
    }else if(demoInput.value.toLowerCase() == "greens"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Leaves and leaf-like parts of edible plants when eaten as vegetable or salads.";
    }else if(demoInput.value.toLowerCase() == "eddoe"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Plant (colocasia esculenta, but often identified as colocasia antiquorum).";
    }else if(demoInput.value.toLowerCase() == "mango"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A tropical Asian fruit tree, the fruit of a mango tree.";
    }else if(demoInput.value.toLowerCase() == "plum"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The fruit of a mango tree.";
    }else if(demoInput.value.toLowerCase() == "timato"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A wildly cultivated plant, solanum lycopersicum, having edible fruit.";
    }else if(demoInput.value.toLowerCase() == "yam"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Any climbing vine of the genus Discorea.";
    }else if(demoInput.value.toLowerCase() == "pronoun"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A word used in place of a noun or noun phrase, but which cannot ordinarly be preceded by a determiner and rerely takes an attributive adjective..";
    }else if(demoInput.value.toLowerCase() == "i"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br>  Refering to oneself in a particullay sentence.";
    }else if(demoInput.value.toLowerCase() == "we"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br> The speakers/writers and at least one other peron.";
    }else if(demoInput.value.toLowerCase() == "she"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br> A female person or animal.";
    }else if(demoInput.value.toLowerCase() == "he"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br> A male person or animal.";
    }else if(demoInput.value.toLowerCase() == "them"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br> Used as direct object of verb.";
    }else if(demoInput.value.toLowerCase() == "your"){
        document.getElementById("comment").innerHTML = "<b><i>Pronoun</i></b> <br> Belonging to you; of you related to you.";
    }else if(demoInput.value.toLowerCase() == "coming"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The act of retreving; an arrival.";
    }else if(demoInput.value.toLowerCase() == "go"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To move through space.";
    }else if(demoInput.value.toLowerCase() == "verb"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A word that indicate a action, event or state of being.";
    }else if(demoInput.value.toLowerCase() == "speak"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To communicate with one's voice to say a words out loud.";
    }else if(demoInput.value.toLowerCase() == "talk"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To communicate usually by means of speech.";
    }else if(demoInput.value.toLowerCase() == "write"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To form letters, words or symbols on a surface in order to communicate.";
    }else if(demoInput.value.toLowerCase() == "lay"){
        document.getElementById("comment").innerHTML = "<b><i>verb</i></b> <br> To place down in a position of rest, or horizontal position.";
    }else if(demoInput.value.toLowerCase() == "eat"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To consume a meal.";
    }else if(demoInput.value.toLowerCase() == "cook"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> The act of preparing a food.";
    }else if(demoInput.value.toLowerCase() == "beat"){
        document.getElementById("comment").innerHTML = "<b><i>verb</i></b> <br> The act of putting hand on another to cause pain for a particually reason.";
    }else if(demoInput.value.toLowerCase() == "see"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To perceive or detect someone or something with the eyes, or as if by sight.";
    }else if(demoInput.value.toLowerCase() == "wash"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> TO clean with water.";
    }else if(demoInput.value.toLowerCase() == "walk"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To move on the feet by alternately setting each foot or pair or group of feet, in the case of animal with four legs or more.";
    }else if(demoInput.value.toLowerCase() == "fix"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To attach; to hold in place or at a particular time.";
    }else if(demoInput.value.toLowerCase() == "sleep"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To rest in a state of reduced consciousness.";
    }else if(demoInput.value.toLowerCase() == "buy"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> To obtain something in exchange for money or goods.";
    }else if(demoInput.value.toLowerCase() == "enter"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To go or come into an enclosed or partially enclosed space.";
    }else if(demoInput.value.toLowerCase() == "kill"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To put ot death; to extinguish the life of.";
    }else if(demoInput.value.toLowerCase() == "sell"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To transfer goods or provide services in exchange for money.";
    }else if(demoInput.value.toLowerCase() == "laugh"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The expression of mirth particular to the human species.";
    }else if(demoInput.value.toLowerCase() == "make"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To create; to construct, produce or originate.";
    }else if(demoInput.value.toLowerCase() == "garmet"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The visible exteror in which a thing is invested or embodied.";
    }else if(demoInput.value.toLowerCase() == "die"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To stop living; to become dead.";
    }else if(demoInput.value.toLowerCase() == "lie"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> The act of not telling the very truth.";
    }else if(demoInput.value.toLowerCase() == "know"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To perceive the truth or factality of; to be certain of or that.";
    }else if(demoInput.value.toLowerCase() == "able"){
        document.getElementById("comment").innerHTML = "<b><i>Adjective</i></b> <br> To have a necessary powers or the needed resourses ro accomplish a task.";
    }else if(demoInput.value.toLowerCase() == "give"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> To move, shift, provide something abstract or concrete to someone or something or somewhere.";
    }else if(demoInput.value.toLowerCase() == "this"){
        document.getElementById("comment").innerHTML = "<b><i>Adverb</i></b> <br> To a setting degree or exent indicated.";
    }else if(demoInput.value.toLowerCase() == "want"){
        document.getElementById("comment").innerHTML = "<b><i>Verb</i></b> <br> To wish for a desire or something.";
    }else if(demoInput.value.toLowerCase() == "tomorrow"){
        document.getElementById("comment").innerHTML = "<b><i>Adverb</i></b> <br> The day after the present day.";
    }else if(demoInput.value.toLowerCase() == "sibling"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A person who share a parent; one brother or sister who one sahre a parent with.";
    }else if(demoInput.value.toLowerCase() == "knife"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A utensel or a tool designed for cutting consisting of a flat piece of hand material.";
    }else if(demoInput.value.toLowerCase() == "bucket"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A containue made of rigid material, often with a handle, used ot carry liquid or small items.";
    }else if(demoInput.value.toLowerCase() == "plate"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A slightly curved but almost flat dish for which food is served or eaten.";
    }else if(demoInput.value.toLowerCase() == "time"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The invitable progression into the future with the passing of present and past events.";
    }else if(demoInput.value.toLowerCase() == "lips"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Either of the two fleshy protusions around the opening of the mouth.";
    }else if(demoInput.value.toLowerCase() == "voice"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> Sound uttered by the mouth especially by human brings in speech or song.";
    }else if(demoInput.value.toLowerCase() == "sky"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A atmosphere above a given point, especially as visible from the surface of the Earth.";
    }else if(demoInput.value.toLowerCase() == "brest"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A part of a femail tha she used to give her baby a milk as food.";
    }else if(demoInput.value.toLowerCase() == "tie"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> The act of curving a roap or things to have it unseperated.";
    }else if(demoInput.value.toLowerCase() == "lier"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A person who dosen't say the truth for their own gain.";
    }else if(demoInput.value.toLowerCase() == "alcohol"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> (organic compound, countable) Any of a class of organic compounds such as ethanol containing a hydroxyl functional group (-OH).";
    }else if(demoInput.value.toLowerCase() == "chief"){
        document.getElementById("comment").innerHTML = "<b><i>Noun</i></b> <br> A leader or head of a group of people, organization etc..";
    }
    
    else{
        document.getElementById("comment").innerHTML ="";
    }
}

timeTranslate.addEventListener("click", translate_1);