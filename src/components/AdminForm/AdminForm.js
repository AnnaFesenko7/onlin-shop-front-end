import { useState } from 'react';
import { Formik, Form } from 'formik';
import { FormikControl } from './FormikControl';

import * as Yup from 'yup';


import { Button } from 'components/StyledButton/StyledButton ';



const initialValues = {
  productName: '',
  brand: '',
  image: '',
  description: '',
  category: '',
  subcategory: '',
  createdFor: [],
  price: '',
  tags: [''],
};

const validationSchema = Yup.object({
  productName: Yup.string().required('Required'),
  brand: Yup.string().required('Required'),
  image: Yup.mixed().nullable(),
  description: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  subcategory: Yup.string().required('Required'),
  createdFor: Yup.array().required('Required'),
  price: Yup.number().required('Required'),
});

const dropDownOptions = [
  { key: 'Select a category', value: '' },
  {
    key: 'Макіяж',
    value: 'make-up',
    subcategory: [
      { key: 'Select a category', value: '' },
      { key: 'Очі', value: 'eyes' },
      { key: 'Брови', value: 'eyebrows' },
      { key: 'Губи', value: 'lips' },
      { key: 'Обличчя', value: 'face' },
    ],
  },
  {
    key: 'Волосся',
    value: 'hairy',
    subcategory: [
      { key: 'Select a subcategory', value: '' },
      { key: 'Бальзами', value: 'balms' },
      { key: 'Кондиціонери', value: 'hair conditioners' },
      { key: 'Шампуні', value: 'shampoos' },
      { key: 'Олія', value: 'oil' },
      { key: 'Гребінці, щітки', value: 'brushes' },
    ],
  },
  {
    key: 'Тіло & Ванна',
    value: 'body',
    subcategory: [
      { key: 'Select a subcategory', value: '' },
      { key: 'Масла та олії', value: 'oils for body' },
      { key: 'Засмага & SPF', value: 'suntan & SPF' },
      { key: 'Косметика для тіла', value: 'body cosmetics' },
      {
        key: 'Дезодоранти & Антиперспіранти',
        value: 'deodorants & antiperspirants',
      },
      { key: 'Гоління & Епіляція', value: 'shaving & epilation' },
      { key: 'Гігієна', value: 'hygiene' },
      { key: 'Ванна & Душ', value: 'bath & shower' },
    ],
  },
  {
    key: 'Парфумерія',
    value: 'perfumery',
    subcategory: [
      { key: 'Select a subcategory', value: '' },
      { key: 'Одеколони', value: 'colognes' },
      { key: 'Аромати для дому', value: 'aromas for the home' },
      { key: 'Парфумована вода', value: 'perfumed water' },
    ],
  },
  {
    key: 'Подарунки',
    value: 'gifts',
    subcategory: [
      { key: 'Select a subcategory', value: '' },
      { key: 'Сертифікат', value: 'certificate' },
      { key: 'Набори', value: 'gift sets' },
    ],
  },
  {
    key: "Здоров'я & Турбота",
    value: 'health',
    subcategory: [
      { key: 'Select a subcategory', value: '' },
      { key: 'Дерматокосметика', value: 'dermatocosmetics' },
      { key: 'Інтимні товари', value: 'intimate goods' },
      { key: 'Зуби', value: 'teeth' },
    ],
  },
];

const checkboxOptions = [
  { key: 'male', value: 'male' },
  { key: 'female', value: 'female' },
];
export const AdminForm = ({ data }) => {

  const [files, setFiles] = useState([]);

  const onSubmit = (
    {
      productName,
      category,
      subcategory,
      createdFor,
      description,
      brand,
      price,
      tags,
    },
    submitProps
  ) => {
    const data = new FormData();
    data.append(`image`, files[0]);
    data.append(`productName`, productName);
    data.append(`category`, category);
    data.append(`brand`, brand);
    data.append(`description`, description);
    data.append(`createdFor`, createdFor);
    data.append(`price`, price);
    data.append(`subcategory`, subcategory);
    data.append(`tags`, tags);
    // data.forEach((value, name) => {
    //   console.log('name', name);
    //   console.log('value', value);
    // });
  };

  return (
    <Formik
      initialValues={(data) ? data : initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {formik => {
        return (
          <Form encType="multipart/form-data">
            <FormikControl
              control="input"
              label="Product"
              name="productName"
              type="text"
            />
            <FormikControl
              control="input"
              label="Brand"
              name="brand"
              type="text"
            />
            <FormikControl
              control="inputFile"
              label="Image"
              name="image"
              type="file"
              setFiles={setFiles}
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              type="text"
            />
            <FormikControl
              control="select"
              label="Select a category"
              name="category"
              options={dropDownOptions}
            />
            <FormikControl
              control="select"
              label="Select a subcategory"
              name="subcategory"
              options={
                dropDownOptions.find(
                  option => option.value === formik.values.category
                )?.subcategory
              }
              disabled={formik.values.category === ''}
            />
            <FormikControl
              control="checkbox"
              label="Product created for"
              name="createdFor"
              options={checkboxOptions}
            />
            <FormikControl
              control="input"
              label="Price"
              name="price"
              type="number"
            />
            <FormikControl
              control="inputList"
              label="List of tags"
              name="tags"
              type="text"
            />
            <Button type="submit" textContent={(data) ? "Save" : "Submit"} size={400} />
          </Form>
        );
      }}
    </Formik>
  );
};
