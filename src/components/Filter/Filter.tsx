import { useProducts } from 'contexts/products-context';

import * as S from './style';
import {useTranslation} from "react-i18next";

export const availableSizes = ['Bedroom', 'Kitchen', 'Bathroom'];



const Filter = () => {
  const { filters, filterProducts } = useProducts();
  const {t, i18n} = useTranslation();
  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes) as [];

    filterProducts(filters);
  };

  const createCheckbox = (label: string) => (
    <S.Checkbox label={t(label)} handleOnChange={toggleCheckbox} key={label} />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);



  return (
    <S.Container>
      <S.Title>Rooms:</S.Title>
      {createCheckboxes()}
    </S.Container>
  );


};

export default Filter;
