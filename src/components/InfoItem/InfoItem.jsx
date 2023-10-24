import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './InfoItem.module.scss';
import sprite from '../../images/svg/sprite.svg';

export const InfoItem = ({ name, value, variant }) => {
  let addClass = '';

  switch (variant) {
    case '2':
      addClass = css.secondVariant;
      break;
    case '3':
      addClass = css.thirdVariant;
      break;
    case '4':
      addClass = css.fourthVariant;
      break;
    default:
      addClass = css.firstVariant;
  }

  let addSvg = '';

  switch (name) {
    case 'Daily calorie intake':
      addSvg = '#fluent_food_icon';
      break;
    case 'Daily norm of sports':
      addSvg = '#dumbbell_icon';
      break;
    case 'Calories consumed':
      addSvg = '#fluent_food_apple_icon';
      break;
    case 'Calories burned':
      addSvg = '#fire_icon';
      break;
    case 'The rest of the calories':
      addSvg = '#bubble_icon';
      break;
    case 'The rest of sports':
      addSvg = '#running_stick_figure_icon';
      break;
    default:
      addSvg = '#fluent_food_icon';
  }

  return (
    <li key={name} className={clsx(css.infoItemContainer, addClass)}>
      <div className={css.wrap}>
        <svg className={css.icon}>
          <use href={sprite + addSvg}></use>
        </svg>
        <p className={css.itemName}>{name}</p>
      </div>
      <h2 className={css.itemValue}> {value}</h2>
    </li>
  );
};

InfoItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
