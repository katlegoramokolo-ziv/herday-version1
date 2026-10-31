/**
 * Central photography manifest. Every temporary stock photograph used by the site
 * is referenced here by key. To swap in approved HerDay imagery, change the
 * `id` (Pexels photo id) or replace `photoUrl` / `srcSetFor` with your own CDN paths.
 */
export const photos = {
  heroCoast: {
    id: 39580233,
    alt: 'A woman in a swimsuit seated on rocks by the ocean at sunset',
    position: 'center 40%',
  },
  shopHero: {
    id: 5215706,
    alt: 'A woman enjoying a sunny day on a rocky beach with coastal cliffs',
    position: 'center 35%',
  },
  aboutHero: {
    id: 32796780,
    alt: 'A woman posing on a tropical beach beside palm trees and clear water',
    position: 'center 30%',
  },
  girlsHero: {
    id: 8759780,
    alt: 'A group of women in swimwear enjoying a sunny day at the beach',
    position: 'center 30%',
  },
  girlsFeature: {
    id: 6540118,
    alt: 'Three women seen from behind embracing beside a seaside railing',
    position: 'center 40%',
  },
  campaign: {
    id: 7470122,
    alt: 'A woman in a bikini relaxing on sunlit sand dunes',
    position: 'center 45%',
  },
  brandIntro: {
    id: 14019647,
    alt: 'A woman in a white swimsuit leaning against rocks by the sea',
    position: 'center 30%',
  },
  categorySwim: {
    id: 14019720,
    alt: 'A woman in a white swimsuit posing against a rugged rock formation',
    position: 'center 40%',
  },
  categoryResort: {
    id: 37166935,
    alt: 'A woman in a white linen shirt on a tropical beach resort',
    position: 'center 30%',
  },
  categoryLifestyle: {
    id: 15818594,
    alt: 'A woman relaxing in a rocking chair on a tropical balcony',
    position: 'center 50%',
  },
  productOnePieceOne: {
    id: 14019729,
    alt: 'A woman in a white swimsuit standing against a large rock on a sandy beach',
    position: 'center 35%',
  },
  productOnePieceOneAlt: {
    id: 14019657,
    alt: 'A woman in a white swimsuit beside rocky seaside with crashing waves',
    position: 'center 40%',
  },
  productOnePieceTwo: {
    id: 8370562,
    alt: 'A woman in a green one-piece swimsuit against a clear blue sky',
    position: 'center 30%',
  },
  productTwoPieceThree: {
    id: 15491949,
    alt: 'A woman in a black swimsuit posing on a sandy beach',
    position: 'center 35%',
  },
  productTwoPieceFour: {
    id: 21796420,
    alt: 'A woman in a blue swimsuit holding a mirror on a rocky coast',
    position: 'center 35%',
  },
  productTwoPieceFive: {
    id: 8158625,
    alt: 'A woman relaxing by the pool in a bikini on a sunny day',
    position: 'center 40%',
  },
  productOnePieceSix: {
    id: 14389758,
    alt: 'A black and white photograph of a woman in a swimsuit against a natural backdrop',
    position: 'center 30%',
  },
  productBlackPoolside: {
    id: 35674073,
    alt: 'A woman in a black swimsuit posing beside a poolside in the sunlight',
    position: 'center 35%',
  },
  momentWallBikini: {
    id: 12182135,
    alt: 'A woman in a bikini posing beside a weathered beach fence',
    position: 'center 40%',
  },
  momentGrassMono: {
    id: 5978920,
    alt: 'A black and white photograph of a woman in a swimsuit walking through tall grass',
    position: 'center 50%',
  },
  momentGoldenHour: {
    id: 40617636,
    alt: 'A woman bathed in golden sunset light on a coastal terrace',
    position: 'center 30%',
  },
  momentPoolWhite: {
    id: 37565108,
    alt: 'A woman enjoying a quiet moment by a resort pool in white clothing',
    position: 'center 40%',
  },
  momentPoolSide: {
    id: 5269798,
    alt: 'A woman in sunglasses and swimwear resting at the edge of a tropical pool',
    position: 'center 40%',
  },
  girlsGalleryRocks: {
    id: 11110868,
    alt: 'Four women enjoying a summer day by the rocky coastline',
    position: 'center 40%',
  },
  girlsGalleryFriends: {
    id: 9353606,
    alt: 'A diverse group of friends sitting on rocks by the beach',
    position: 'center 40%',
  },
  girlsGalleryStylish: {
    id: 16013079,
    alt: 'Three stylish young women posing at a seaside location',
    position: 'center 35%',
  },
  girlsGalleryBeachDay: {
    id: 12916350,
    alt: 'A group of women enjoying a day at the beach by the shore',
    position: 'center 40%',
  },
  girlsStory: {
    id: 14036399,
    alt: 'Three women posing on rocks at a sunny tropical beach',
    position: 'center 40%',
  },
} as const;

export type PhotoKey = keyof typeof photos;

const PEXELS_BASE = 'https://images.pexels.com/photos';

export function photoUrl(key: PhotoKey, width = 1280): string {
  const { id } = photos[key];
  return `${PEXELS_BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export function photoSrcSet(key: PhotoKey, widths: number[] = [640, 960, 1280, 1920]): string {
  return widths.map((w) => `${photoUrl(key, w)} ${w}w`).join(', ');
}
