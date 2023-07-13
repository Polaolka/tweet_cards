import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { UserItem } from '../UserItem/UserItem';
import { BtnWrapper, FoodsListWrapper, LoadMoreBtn } from './Gallery.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/user/operations';

import {
  selectAllUsers,
  selectFavUsers,
  selectTweetsCategory,
  selectCurrentPage,
} from '../../redux/user/selectors';
import { nextPage } from 'redux/user/slice';

export const Gallery = () => {
  const dispatch = useDispatch();
  const favUsers = useSelector(selectFavUsers);

  const [totalPages, setTotalPages] = useState(0);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const currentPage = useSelector(selectCurrentPage);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1280 });
  const pageSize = isMobile ? 3 : isTablet ? 4 : 3;

  const users = useSelector(selectAllUsers);

  const selectedFilterValue = useSelector(selectTweetsCategory);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const userForDisplay = (selectedFilterValue, users) => {
      let filteredData;
      if (selectedFilterValue === '' || selectedFilterValue === 'show all') {
        filteredData = users;
      } else if (selectedFilterValue === 'follow') {
        filteredData = users.filter(obj => !favUsers.includes(obj.id));
      } else if (selectedFilterValue === 'followings') {
        filteredData = users.filter(obj => favUsers.includes(obj.id));
      }
      return filteredData;
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const dataBefore = userForDisplay(selectedFilterValue, users);

    setLoadedUsers(dataBefore.slice(0, endIndex));
    setTotalPages(Math.ceil(dataBefore.length / pageSize));
  }, [selectedFilterValue, users, favUsers, currentPage, pageSize]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage());
    }
  };

  return (
    <>
      <FoodsListWrapper>
        {loadedUsers?.map(({ id, name, avatar, tweets, followers }) => (
          <UserItem
            avatar={avatar}
            key={`${id}`}
            id={id}
            name={name}
            tweetsNum={tweets.length}
            tweets={tweets}
            followers={followers}
            target="_blank"
            rel="noreferrer noopener"
          />
        ))}
      </FoodsListWrapper>
      <BtnWrapper>
        {currentPage < totalPages && (
          <LoadMoreBtn className="green" onClick={handleLoadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </BtnWrapper>
    </>
  );
};
