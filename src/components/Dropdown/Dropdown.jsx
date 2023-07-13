import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetsCategory } from 'redux/user/selectors';
import { firstPage, selectCategory } from 'redux/user/slice';
import { ArrowStyled, DropBtn, DropContainer, LiItem, ListStyled } from './Dropdown.styled';

export const Dropdown = () => {
  const dispatch = useDispatch();
  const select = useSelector(selectTweetsCategory);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(select);

  const options = ['show all', 'follow', 'followings'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = option => {
    setSelectedOption(option);
    setIsOpen(false);
    dispatch(selectCategory(option));
    dispatch(firstPage())
  };

  return (
    <DropContainer className={isOpen ? "active" : ""}>
      <DropBtn className={isOpen ? "active" : ""} onClick={toggleDropdown}>
      {isOpen ? "" : selectedOption || "select options"}
        <ArrowStyled className={isOpen ? "active" : ""}/>
      </DropBtn >
      {isOpen && (
        <ListStyled className="dropdown-menu">
          {options.map(option => (
            <LiItem key={option} onClick={() => selectOption(option)}>
              {option}
            </LiItem>
          ))}
        </ListStyled>
      )}
    </DropContainer>
  );
};
