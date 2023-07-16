import {
  LoaderContainer,
  LoaderStyled,
  StyledTriangle,
  DoneImg,
} from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderContainer>
        <StyledTriangle
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          visible={true}
        />

        <DoneImg/>
      </LoaderContainer>
    </LoaderStyled>
  );
};


