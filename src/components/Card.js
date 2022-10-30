import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cards from '../data/cards';
import TinderCard from 'react-tinder-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCards } from 'swiper';
import 'swiper/css/effect-cards';
import IconButton from '@mui/material/IconButton';
import Cancel from '@mui/icons-material/Cancel';
import Replay from '@mui/icons-material/Replay';
import Favorite from '@mui/icons-material/FavoriteTwoTone';

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(cards.length);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentENG, setCurrentEng] = useState('');
  const [currentSynopsis, setCurrentSynopsis] = useState('');
  const [currentSeasons, setCurrentSeasons] = useState(0);
  const [currentTotalEpisodes, setCurrentTotalEpisodes] = useState(0);
  const [currentMovies, setCurrentMovies] = useState(0);

  const currentIndexRef = useRef(currentIndex);

  const canUndo = currentIndex < cards.length - 1;

  const childRefs = useMemo(
    () =>
      Array(cards.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  useEffect(() => {
    //Change Info based on current index
    const displayInfo = async () => {
      setCurrentTitle(cards[currentIndex - 1].title);
      setCurrentEng(cards[currentIndex - 1].eng);
      setCurrentSynopsis(cards[currentIndex - 1].synopsis);
      setCurrentSeasons(cards[currentIndex - 1].seasons);
      setCurrentTotalEpisodes(cards[currentIndex - 1].totalepisodes);
      setCurrentMovies(cards[currentIndex - 1].movies);
    };
    displayInfo();

    //Don't keep last info after all cards are cleared
    const resetIndex = async () => {
      if (currentIndex === 0) {
        setCurrentTitle('Refresh the page for a new start');
        setCurrentEng('');
        setCurrentSynopsis('');
        setCurrentSeasons('');
        setCurrentTotalEpisodes();
        setCurrentMovies();
      }
    };
    resetIndex();
  });

  useEffect(() => {
    const updateCurrentIndexRef = async () => {
      currentIndexRef.current = currentIndex;
    };
    updateCurrentIndexRef();
  }, [currentIndex]);

  const Undo = async () => {
    if (canUndo) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      await childRefs[newIndex].current.restoreCard();
    }
  };

  /* <Swiper modules={[EffectCards]} effect={'cards'} grabCursor="true">
              {cards.map((card) => (
                <SwiperSlide key={card.id} className="h-full p-4">
                  {card.image}
                </SwiperSlide>
              ))}
            </Swiper>*/
  const iconStyle = {
    width: '50px',
    height: '50px',
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <TinderCard
          key={card.id}
          ref={childRefs[index + 1]}
          className="absolute right-[65%]"
          onSwipe={() => setCurrentIndex(index)}
          preventSwipe={['up', 'down']}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${card.imageURL})` }}
          ></div>
        </TinderCard>
      ))}
      <div className="absolute top-[153%] left-[40%]">
        <div className="text-3xl font-semibold">{currentTitle}</div>
        <div className="text-3xl">{currentENG}</div>
        <article className="max-w-lg text-lg py-8">{currentSynopsis}</article>
        {currentIndex !== 0 ? (
          <section className="text-xl">
            <div>Season(s): {currentSeasons}</div>
            <div>Total Episodes: {currentTotalEpisodes}</div>
            <div>Movies: {currentMovies}</div>
          </section>
        ) : (
          <div></div>
        )}
      </div>
      <div className="absolute bottom-[-118vh] left-[40vw] flex gap-10">
        {currentIndex !== 0 ? (
          <IconButton className="text-3xl">
            <Cancel
              fontSize="large"
              className="bg-squidred rounded-[50%]"
              htmlColor="white"
              sx={iconStyle}
            />
          </IconButton>
        ) : (
          <div></div>
        )}
        {canUndo ? (
          <IconButton onClick={() => Undo()}>
            <Replay
              fontSize="large"
              htmlColor="#2b1055"
              className="bg-white rounded-[50%] p-1"
              sx={iconStyle}
            />
          </IconButton>
        ) : (
          <div></div>
        )}
        {currentIndex !== 0 ? (
          <IconButton>
            <Favorite
              fontSize="large"
              htmlColor="white"
              color="red"
              className="bg-squidgreen p-1 rounded-[50%]"
              sx={iconStyle}
            />
          </IconButton>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
