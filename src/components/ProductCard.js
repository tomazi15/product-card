import React from "react";
import {
  CardContainer,
  CardDescriptionProduct,
  CardDescriptionContainer,
  CardDescriptionTile,
  CardDescription,
  CardDescriptionButton,
  CardDescriptionPrice,
  CardDescriptionStrikethrough,
  CardImage,
} from "./styles/Card.styled";
import { ReactComponent as ShoppingCartIcon } from "../assets/images/icon-cart.svg";

export const ProductCard = () => {
  return (
    <CardContainer>
      <CardImage>{/* <Image /> */}</CardImage>
      <CardDescriptionContainer>
        <CardDescriptionProduct>Perfume</CardDescriptionProduct>
        <CardDescriptionTile>
          Gabrielle Essence Eau De Parfume
        </CardDescriptionTile>
        <CardDescription>
          A floral, solar and voluptuous interception composed by Oliver Polge,
          Perfumer-Creator for the House of CHANEL.
        </CardDescription>
        <div className="flex">
          <CardDescriptionPrice>$149.99</CardDescriptionPrice>
          <CardDescriptionStrikethrough>$169.99</CardDescriptionStrikethrough>
        </div>
        <div className="flex">
          <CardDescriptionButton>
            <ShoppingCartIcon />
            Add to Cart
          </CardDescriptionButton>
        </div>
      </CardDescriptionContainer>
    </CardContainer>
  );
};
