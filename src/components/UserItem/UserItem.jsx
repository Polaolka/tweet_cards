import React, { useState } from 'react';
import {
  ImgStyled,
  ItemStyled,
  FollowBtnStyled,
  RectStyled,
  AvaThumbStyled,
  ImgThumbStyled,
  LogoThumbStyled,
  NameStyled,
  InfoStyled,
  CircleStyled,
  InfoStyledFollowers,
} from './UserItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavUsers } from '../../redux/user/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { getUserById, updateUserById } from 'redux/user/operations';
import { addToFavArr, removeFromFavArr } from 'redux/user/slice';
import { LinkStyled } from './UserItem.styled';

export const UserItem = ({
  id,
  name,
  avatar,
  tweetsNum,
  followers,
  tweets,
}) => {
  const favUsers = useSelector(selectFavUsers);
  const check = favUsers.includes(id);
  const [followersValue, setFollowersValue] = useState(followers);
  const [isFollow, setIsFollow] = useState(check);
  const dispatch = useDispatch();

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
const handleClick = () => {
  dispatch(getUserById(id))
}

const formatNumber = (number) => {
  return number.toLocaleString('en-US');
};

const handleImageError = (e) => {
  e.target.src = "https://res.cloudinary.com/dj5smkin6/image/upload/v1689277252/Screenshot_15_rfh3yi.jpg";
};

  return (
    <ItemStyled>
      <RectStyled></RectStyled>
      <LogoThumbStyled />
      <ImgThumbStyled />
      <AvaThumbStyled>
        <ImgStyled src={avatar} alt={name} onError={handleImageError} />
        <CircleStyled />
      </AvaThumbStyled>
      <NameStyled>{name}</NameStyled>
      <LinkStyled to="tweets" onClick={handleClick}>
        <InfoStyled >{formatNumber(tweetsNum)} tweets</InfoStyled>
      </LinkStyled>
      <InfoStyledFollowers>{formatNumber(followersValue)} followers</InfoStyledFollowers>
      <FollowBtnStyled
        className={isFollow ? 'green' : ''}
        onClick={isFollow ? removeFromFavorite : addToFavorite}
      >
        {isFollow ? 'Following' : 'Follow'}
      </FollowBtnStyled>
    </ItemStyled>
  );
};
