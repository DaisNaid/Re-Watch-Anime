import ds from '../assets/images/DemonSlayer.jpg';
import aot from '../assets/images/aot.webp';
import bleach from '../assets/images/bleach.jpg';

const cards = [
  {
    id: '1',
    title: 'Kimetsu no Yaiba',
    eng: 'Demon Slayer',
    image: <img alt="DS" src={ds} />,
    imageURL: ds,

    synopsis:
      'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.',
    seasons: '2',
    totalepisodes: '48',
    movies: '1',
  },
  {
    id: '2',
    title: 'Shingeki no Kyojin',
    eng: 'Attack on Titan',
    image: <img alt="AOT" src={aot} />,
    imageURL: aot,
    synopsis:
      "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. During the carnage that follows, soldier Eren Jaeger sees one of the creatures devour his mother, which leads him to vow that he will kill every Titan. He enlists some friends who survived to help him, and that group is humanity's last hope for avoiding extinction at the hands of the monsters.",
    seasons: '4',
    totalepisodes: '96',
    movies: '0',
  },
  {
    id: '3',
    title: 'BLEACH',
    eng: 'Bleach',
    image: <img alt="Bleach" src={bleach} />,
    imageURL: bleach,
    synopsis:
      'Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace.',
    seasons: '2',
    totalepisodes: '48',
    movies: '1',
  },
];

export default cards;
