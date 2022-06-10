import './detailDrink.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { RiHome7Fill } from 'react-icons/ri';

const DetailDrinks = () => {
  const { idDrink } = useParams();
  console.log(idDrink);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;

  const [details, setDetails] = useState({
    dCoctail: [],
  });

  useEffect(() => {
    Axios.get(url).then((res) => {
      setDetails({ dCoctail: res.data.drinks[0] });
    });
  });

  const item = details.dCoctail;
  console.log(item);

  let ingredients = [];
  if (item.strIngredient1) {
    ingredients.push(
      <li>
        {item.strIngredient1} {item.strMeasure1}
      </li>
    );
  }
  if (item.strIngredient2) {
    ingredients.push(
      <li>
        {item.strIngredient2} {item.strMeasure2}
      </li>
    );
  }
  if (item.strIngredient3) {
    ingredients.push(
      <li>
        {item.strIngredient3} {item.strMeasure3}
      </li>
    );
  }
  if (item.strIngredient4) {
    ingredients.push(
      <li>
        {item.strIngredient4} {item.strMeasure4}
      </li>
    );
  }
  if (item.strIngredient5) {
    ingredients.push(
      <li>
        {item.strIngredient5} {item.strMeasure5}
      </li>
    );
  }
  if (item.strIngredient6) {
    ingredients.push(
      <li>
        {item.strIngredient6} {item.strMeasure6}
      </li>
    );
  }
  if (item.strIngredient7) {
    ingredients.push(
      <li>
        {item.strIngredient7} {item.strMeasure7}
      </li>
    );
  }
  if (item.strIngredient8) {
    ingredients.push(
      <li>
        {item.strIngredient8} {item.strMeasure8}
      </li>
    );
  }
  if (item.strIngredient9) {
    ingredients.push(
      <li>
        {item.strIngredient9} {item.strMeasure9}
      </li>
    );
  }
  if (item.strIngredient10) {
    ingredients.push(
      <li>
        {item.strIngredient10} {item.strMeasure10}
      </li>
    );
  }
  if (item.strIngredient11) {
    ingredients.push(
      <li>
        {item.strIngredient11} {item.strMeasure11}
      </li>
    );
  }
  if (item.strIngredient12) {
    ingredients.push(
      <li>
        {item.strIngredient12} {item.strMeasure12}
      </li>
    );
  }
  if (item.strIngredient13) {
    ingredients.push(
      <li>
        {item.strIngredient13} {item.strMeasure13}
      </li>
    );
  }
  if (item.strIngredient14) {
    ingredients.push(
      <li>
        {item.strIngredient14} {item.strMeasure14}
      </li>
    );
  }
  if (item.strIngredient15) {
    ingredients.push(
      <li>
        {item.strIngredient15} {item.strMeasure15}
      </li>
    );
  }

  return (
    <div className="detailsku">
      <div className="bulat2"></div>

      <a href="/">
        <span>
          <RiHome7Fill />
        </span>
      </a>

      <div className="row detail align-items-center">
        <div className="g-cocktail col-sm-12  col-lg-5">
          <img src={item.strDrinkThumb} alt="..." />
        </div>
        <div class=" t-detail col-sm-12 col-lg-7">
          <h1>Detail Drink</h1>
          <p>Name : {item.strDrink}</p>
          <p>Category : {item.strCategory}</p>
          <p>Type of Glass : {item.strGlass}</p>
          <p>
            Ingredients : <ul>{ingredients}</ul>
          </p>
          <p>How to Make : {item.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailDrinks;
