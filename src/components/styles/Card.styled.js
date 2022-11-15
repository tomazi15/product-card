import styled from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `}

  @media (min-width: 800px) {
    flex-direction: row;
    padding: 80px 30px;
  }
`;

export const CardImage = styled.div`
  ${tw`
    flex
    justify-center
    w-10/12
    overflow-hidden
    mt-20
    rounded-t-lg
  `}

  background-image: url("../../../images/image-product-mobile.jpg");
  min-height: 408px;
  max-width: 450px;

  @media (min-width: 800px) {
    display: flex;
    margin-top: 0px;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0rem;
    background-image: url("../../../images/image-product-desktop.jpg");
    min-height: 600px;
    max-width: 350px;
  }
`;

export const CardDescriptionContainer = styled.div`
  ${tw`
    w-10/12
    bg-white
    rounded-b-lg
    p-5
  `}

  max-width: 450px;

  @media (min-width: 800px) {
    margin-top: 0px;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0rem;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0rem;
    display: flex;
    flex-direction: column;
    min-height: 600px;
    max-width: 350px;
  }
`;

export const CardDescriptionProduct = styled.p`
  ${tw`
    uppercase
    font-montserrat
    tracking-[.3em]
    text-sm
    font-bold
  `}
`;

export const CardDescriptionTile = styled.h1`
  ${tw`
    font-fraunces
    font-bold
    text-xl
    pt-3.5
  `}
`;

export const CardDescription = styled.p`
  ${tw`
    font-montserrat
    font-bold
    font-medium
    pt-3.5
  `}
`;

export const CardDescriptionPrice = styled.h1`
  ${tw`
    font-fraunces
    text-3xl
    font-bold
    pt-5
    pb-5
    text-[#3c8067]
  `}
`;

export const CardDescriptionStrikethrough = styled.span`
  ${tw`
    flex
    flex-row
    items-center
    font-montserrat
    text-sm
    pt-1
    pl-7
    line-through
  `}
`;

export const CardDescriptionButton = styled.button`
  ${tw`
    flex
    flex-row
    justify-center
    items-center
    bg-[#3c8067]
    w-full
    rounded-lg
    h-11
    font-bold
    text-white
    hover:bg-[#0B6338]
  `}

  svg {
    margin-right: 20px;
  }
`;
