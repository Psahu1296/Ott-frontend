import channel from "../assets/interactive.png";
import language from "../assets/language.png";
import genre from "../assets/play.png";

export const MENU_LIST = ["Home", "Shows", "Movies", "Comedy", "News"];

export const SIDEBAR_LIST = [
  { label: "Channels", img: channel },
  { label: "Languages", img: language },
  { label: "Genres", img: genre },
];

export const TV_SHOW_LIST = [
  "https://c4.wallpaperflare.com/wallpaper/880/964/1000/fringe-tv-series-tv-tv-series-anna-torv-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/37/1008/892/the-vampire-diaries-tv-series-2009-2017-poster-fantasy-all-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/640/10/564/the-boys-series-homelander-antony-starr-tv-series-amazon-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/210/388/16/lost-tv-series-widescreen-lost-poster-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/476/464/993/blood-house-forest-monster-wallpaper-preview.jpg",
];

export interface ITVList {
  label: string;
  imageUrl: string;
  description: string;
}

export const TV_SHOW_LIST_DETAILS = [
  {
    label: "Fringe",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/880/964/1000/fringe-tv-series-tv-tv-series-anna-torv-wallpaper-preview.jpg",
    description: `Fringe follows the casework of the Fringe Division, a Joint Federal Task Force supported primarily by the Federal Bureau of Investigation, which includes Agent Olivia Dunham; Dr. Walter Bishop, the archetypal mad scientist; and Peter Bishop, Walter's estranged son and jack-of-all-trades. They are supported by Phillip Broyles (Lance Reddick), the force's director, and Agent Astrid Farnsworth (Jasika Nicole), who assists Walter in laboratory research. The Fringe Division investigates cases relating to fringe science, ranging from transhumanist experiments gone wrong to the prospect of a destructive technological singularity to a possible collision of two parallel universes. The Fringe Division's work often intersects with advanced biotechnology developed by a company called Massive Dynamic, founded by Walter's former partner, Dr. William Bell (Leonard Nimoy), and run by their common friend, Nina Sharp (Blair Brown). The team is also watched silently by a group of bald, pale men who are called "Observers".`,
  },
  {
    label: "The Vampire Diries",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/37/1008/892/the-vampire-diaries-tv-series-2009-2017-poster-fantasy-all-wallpaper-preview.jpg",
    description: `Vampire brothers, Stefan and Damon Salvatore, battle for the affection of selfless teenager, Elena Gilbert. Stefan is the good and kind-hearted brother that feeds on animal blood to keep from killing anybody, and Damon is the selfish and dangerous older brother that feeds on human blood carelessly. Elena is brought into the supernatural world that she was hidden from as a girl and surrounds herself with a circle of human AND supernatrual friends, ready to fight the hunters and enemies that wait for them in the shadows.`,
  },
  {
    label: "The Boys",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/640/10/564/the-boys-series-homelander-antony-starr-tv-series-amazon-hd-wallpaper-preview.jpg",
    description: `The Boys is set in a universe where super-powered individuals are recognized as heroes by the general public and work for a powerful corporation known as Vought International, which markets and monetizes them. Outside of their heroic personas, most are arrogant, selfish, and corrupt. The series primarily focuses on two groups: the Seven, Vought's premier superhero team, and the Boys, vigilantes looking to bring down Vought and its fake superheroes.`,
  },
  {
    label: "Lost",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/210/388/16/lost-tv-series-widescreen-lost-poster-wallpaper-preview.jpg",
    description: `The past, present, and future lives of surviving Oceanic Flight 815 passengers are dramatically intertwined as a fight for survival ensues in a quest for answers after crashlanding on a mysterious island. Each discovery prompts yet more secrets, as the hastily-formed colony search for a way off the island, or is this their home?`,
  },
  {
    label: "Grimm",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/476/464/993/blood-house-forest-monster-wallpaper-preview.jpg",
    description: `Set in present-day Portland, Oregon, the series puts a new twist on the stories of the Brothers Grimm in which a homicide detective learns that he is a descendent of a group of hunters known as "Grimms", who fight to keep humanity safe from the supernatural creatures of the world. Upon learning of his destiny and that he is the last of his kind, he has to protect every living soul from the sinister storybook characters that have infiltrated the real world.`,
  },
];

export const TV_SHOW_ADVENTURE_DETAILS = [
  {
    label: "Stranger-Things",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/115/344/877/stranger-things-netflix-tv-series-poster-hd-wallpaper-preview.jpg",
    description: `In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to a child's disappearance, which begins to tear at the fabric of an otherwise-peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that more is going on than meets the eye.`,
  },
  {
    label: "Game of Thrones",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/115/674/429/throne-game-of-thrones-sean-bean-eddard-ned-stark-tv-posters-george-r-r-martin-song-of-ice-and-f-nature-winter-hd-art-wallpaper-preview.jpg",
    description: `In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne. As Westeros becomes rife with political unrests, conflicts, treachery, murder and debauchery, an ancient enemy (Army of the dead) awakens and strike the sense of doom to the living folks of Westeros.`,
  },
  {
    label: "The Queens Gambit",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/488/104/44/anya-taylor-joy-women-actress-redhead-the-queen-s-gambit-hd-wallpaper-preview.jpg",
    description: `Nine year-old orphan Beth Harmon is quiet, sullen, and by all appearances unremarkable. That is, until she plays her first game of chess. Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the age of sixteen, she's competing for the U.S. Open championship. But as Beth hones her skills on the professional circuit, the stakes get higher, her isolation grows more frightening, and the thought of escape becomes all the more tempting. Based on the book by Walter Tevis.`,
  },
  {
    label: "The Witcher",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/713/48/9/the-witcher-the-witcher-tv-series-netflix-netflix-tv-series-poster-hd-wallpaper-preview.jpg",
    description: `The Witcher is a fantasy drama web television series created by Lauren Schmidt Hissrich for Netflix. It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.`,
  },
  {
    label: "Heroes",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/422/266/334/tv-show-heroes-cast-wallpaper-preview.jpg",
    description: `People all over the U.S and the world start to realize they have special abilities, like telekinesis, healing abilities, flying powers, time travel, invisibility, and the ability to absorb other's abilities. One man, known as Sylar, wants to gain all the power of these "heroes" so he can be the most powerful and evolved human of all, and stops at nothing to gruesomely kill these people. In order to protect themselves from him, these people must help one another before Sylar can destroy them all, while they each deal with problems of their own.`,
  },
];
