import React from 'react';
import {
  TweetBox, TweetData, TweetText,
} from './TweetItem.styled';

export const TweetItem = ({ text, date }) => {
 
  return (
    <TweetBox>
      <TweetText>{text}</TweetText>
      <TweetData>{date}</TweetData>
    </TweetBox>
  );
};
