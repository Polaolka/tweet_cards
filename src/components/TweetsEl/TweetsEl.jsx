import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  TweetsBox,
  ImgStyled,
  FollowBtnStyled,
  RectStyled,
  AvaThumbStyled,
  LogoThumbStyled,
  NameStyled,
  InfoStyled,
  CircleStyled,
  ItemStyled,
  LinkStyled,
  TweetsWrapper,
} from './TweetsEl.styled';

import { TweetItem } from 'components/TweetItem/TweetItem';
import { selectFavUsers, selectuserById } from 'redux/user/selectors';
import { updateUserById } from 'redux/user/operations';
import { addToFavArr, removeFromFavArr, takeEmptyUser } from 'redux/user/slice';

export const TweetsEl = (location) => {
  const user = useSelector(selectuserById);
  const { id, name, avatar, tweets, followers} = user;
  const favUsers = useSelector(selectFavUsers);
  const check = favUsers.includes(id);
  const [followersValue, setFollowersValue] = useState(followers);
  const [isFollow, setIsFollow] = useState(check);
  const dispatch = useDispatch();

  const backLinkLocationRef = useRef(location?.state?.from ?? '/');
 const handleBackClick = () => {
  dispatch(takeEmptyUser());
  
 }
  const addToFavorite = () => {
    const user = {
      id,
      name,
      avatar,
      followers,
      tweets,
    };
    user.followers += 1;
    setFollowersValue(pr => (pr += 1));
    dispatch(updateUserById(user));
    dispatch(addToFavArr(id));
    setIsFollow(true);
  };
  const removeFromFavorite = () => {
    const user = {
      id,
      name,
      avatar,
      followers,
      tweets,
    };
    setFollowersValue(pr => (pr -= 1));
    user.followers -= 1;
    dispatch(updateUserById(user));
    dispatch(removeFromFavArr(id));
    setIsFollow(false);
  };

  const handleImageError = (e) => {
    e.target.src = "https://res.cloudinary.com/dj5smkin6/image/upload/v1689277252/Screenshot_15_rfh3yi.jpg";
  };

  return (
    <TweetsBox>
      <LinkStyled to={backLinkLocationRef.current} onClick={handleBackClick}>&#8592; Go back</LinkStyled>
      <ItemStyled>
      <RectStyled></RectStyled>
      <LogoThumbStyled />
      <AvaThumbStyled>
        <ImgStyled src={avatar} alt={name} onError={handleImageError}/>
        <CircleStyled />
      </AvaThumbStyled>
      <NameStyled>{name}</NameStyled>

        <InfoStyled >{tweets?.length} tweets</InfoStyled>

      <InfoStyled>{followersValue} followers</InfoStyled>
      <FollowBtnStyled
        className={isFollow ? 'green' : ''}
        onClick={isFollow ? removeFromFavorite : addToFavorite}
      >
        {isFollow ? 'Following' : 'Follow'}
      </FollowBtnStyled>
      </ItemStyled>
      <TweetsWrapper>
      {tweets?.map(({ text, date }) => (
        <TweetItem
          text={text}
          key={nanoid()}
          date={date}
        />
      ))}

      </TweetsWrapper>
    </TweetsBox>
  );
};
