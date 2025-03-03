"use client"

import React, { useEffect, useState, FormEvent } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Image from 'next/image';

import {useLenis} from "../hooks/useLenis";

type Props = {}

const categories = [
    'Branding',
    'UX/UI Design',
    'App Development',
    'Web Development',
    'Digital Transformation',
];

const budgetOptions = ['$400', '$500', '$750', '$1000', '$1500', '$2000', '$3000+'];

const ContactsPage = (props: Props) => {
  // Плавний скрол
  useLenis();
  
  // PhoneInput

  const [value, setValue] = useState<string | undefined>();

  // Category

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Дії при відправленні форми, наприклад, відправлення даних на сервер
    console.log('Selected category:', selectedCategory);
  };

  //  Budget options
  
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [customBudget, setCustomBudget] = useState<string>('');

  const handleBudgetClick = (budget: string) => {
    setSelectedBudget(budget);
    setCustomBudget(''); // Очистити поле, якщо обрана опція
  };

  const handleCustomBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBudget(null); // Зняти вибір опцій при введенні власного значення
    setCustomBudget(event.target.value);
  };

  // Form validation

  const [email, setEmail] = useState('');
  const [emptyName, setEmptyName] = useState('');
  const [emptyCompany, setEmptyCompany] = useState('');
  const [emptyLocation, setEmptyLocation] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [emptyNameDirty, setEmptyNameDirty] = useState(false);
  const [emptyCompanyDirty, setEmptyCompanyDirty] = useState(false);
  const [emptyLocationDirty, setEmptyLocationDirty] = useState(false);

  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [emptyNameError, setEmptyNameError] = useState('The field cannot be empty');
  const [emptyCompanyError, setEmptyCompanyError] = useState('The field cannot be empty');
  const [emptyLocationError, setEmptyLocationError] = useState('The field cannot be empty');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || emptyNameError || emptyCompanyError || emptyLocationError) {
        setFormValid(false);
    } else {
        setFormValid(true);
    }
  }, [emailError, emptyNameError, emptyCompanyError, emptyLocationError]);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Incorrect email!');
        setEmailDirty(true);
    } else {
        setEmailError('');
        setEmailDirty(false);
    }
  }

  const emptyNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyName(e.target.value)
    if (!e.target.value) {
        setEmptyNameError('The field cannot be empty');
        setEmptyNameDirty(true);
    } else {
        setEmptyNameError('');
        setEmptyNameDirty(false);
    }
  }

  const emptyCompanyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyCompany(e.target.value)
    if (!e.target.value) {
        setEmptyCompanyError('The field cannot be empty');
        setEmptyCompanyDirty(true);
    } else {
        setEmptyCompanyError('');
        setEmptyCompanyDirty(false)
    }
  }

  const emptyLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyLocation(e.target.value)
    if (!e.target.value) {
        setEmptyLocationError('The field cannot be empty');
        setEmptyLocationDirty(true);
    } else {
        setEmptyLocationError('');
        setEmptyLocationDirty(false)
    }
 }

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
          setEmailDirty(true)
          break
      case 'name':
          setEmptyNameDirty(true)
          break
      case 'company':
          setEmptyCompanyDirty(true)
            break
      case 'location':
          setEmptyLocationDirty(true)
            break
    }
  }

  return (
    <div className='main'>
        <section className="get-in-touch">
            <div className="container">
                <div className="get-in-touch__inner">
                    <div className="get-in-touch__left">
                     <h3 className="tag">Get in touch</h3>
                     <h1 className="title ellipse">Ready to take your digital presence to the next level?</h1>
                     <p className="get-in-touch__text">Whether you have questions, want to discuss your project, or simply want to say hello, we&apos;d love to hear from you. Contact our team of experts today, and let&apos;s start crafting your digital success story.</p>
                    </div>
                    <div className="get-in-touch__right">
                        <div className="get-in-touch__img--wrapper">
                         <Image width={501} height={416} className="get-in-touch__img" src="/img/section-get-in-touch/section-get-in-touch-img.png" alt="" />
                        </div>
                        <ul className="get-in-touch__contacts-list">
                            <li className="get-in-touch__contacts-item">
                                <h4 className="get-in-touch__contacts-item-title">JAKARTA, id</h4>
                                <p className="get-in-touch__contacts-item-text">Jl.Jend Soedirman</p>
                                <p className="get-in-touch__contacts-item-text">blok 1 kav 2. 11220</p>
                            </li>
                            <li className="get-in-touch__contacts-item">
                                <h4 className="get-in-touch__contacts-item-title">Contact information</h4>
                                <p className="get-in-touch__contacts-item-text">INFO@PIXELMAGNET.COM</p>
                                <p className="get-in-touch__contacts-item-text">011-123-456</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
        <section className="contacts">
            <div className="container-form">
                <div className="contacts__inner">
                    <form action="#!" id="form" className="form" onSubmit={handleSubmit}>
                        <div className="form__top">
                            <div className="form__top--row">
                                <label className="form__label" htmlFor="formName">Name*</label>
                                <input onChange={e => emptyNameHandler(e)} value={emptyName} onBlur={e => blurHandler(e)} className={(emptyNameDirty && emptyNameError) ? "form__input form__input--error" : "form__input"} id="formName" type="text" name="name" placeholder="Your name" />

                                <label className="form__label" htmlFor="formPhone">Phone number</label>
                                <PhoneInput value={value} onChange={(phone: string | undefined) => setValue(phone)} className="form__input" id="formPhone" type="text" name="phone"/>

                                <label className="form__label" htmlFor="formEmail">Email*</label>
                                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className={(emailDirty && emailError) ? "form__input form__input--error" : "form__input"} id="formEmail" type="text" name="email" placeholder="Your email" />

                                <label className="form__label" htmlFor="formCompany">Company*</label>
                                <input onChange={e => emptyCompanyHandler(e)} value={emptyCompany} onBlur={e => blurHandler(e)} className={(emptyCompanyDirty && emptyCompanyError) ? "form__input form__input--error" : "form__input"} id="formCompany" type="text" name="company" placeholder="Company name" />

                                <label className="form__label" htmlFor="formWebsite">Website</label>
                                <input className="form__input" id="formWebsite" type="text" name="website" placeholder="Company location" />
                            </div>
                            <div className="form__top--row">
                                <label className="form__label" htmlFor="formCategory">Category*</label>
                                <div className="form__select--wrapper">
                                    <select
                                        className={selectedCategory ? "form__select form__select-active" : "form__select"}
                                        id="formCategory"
                                        value={selectedCategory}
                                        onChange={handleCategoryChange}
                                        required
                                        >
                                        <option value="" >
                                            Select below
                                        </option>
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                            {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <label className="form__label" htmlFor="formLocation">Location*</label>
                                <input onChange={e => emptyLocationHandler(e)} value={emptyLocation} onBlur={e => blurHandler(e)} className={(emptyLocationDirty && emptyLocationError) ? "form__input form__input--error" : "form__input"} id="formLocation" type="text" name="location" placeholder="Company location" />

                                <label className="form__label" htmlFor="formBudget">Budget</label>
                                
                                <div className="form__budget" id="formBudget">
                                        {budgetOptions.map((budget) => (
                                        <button
                                            key={budget}
                                            className={selectedBudget === budget ? "budget-button budget-button-active" : "budget-button"}
                                            type="button"
                                            onClick={() => handleBudgetClick(budget)}
                                            style={{
                                            }}
                                        >
                                            {budget}
                                        </button>
                                        ))}
                                </div>
                                <input
                                    id="formAmount"
                                    type="text"
                                    name="amount"
                                    placeholder="Or type the amount"
                                    value={customBudget}
                                    onChange={handleCustomBudgetChange}
                                    className="form__input"
                                />
                            </div>
                        </div>
                        <div className="form__middle">
                            <label className="form__label" htmlFor="formTextarea">Summary</label>
                            <textarea className="form__textarea" id="formTextarea" name="message" placeholder="Briefly tell us about your projects"></textarea>
                            <p className="agree-text">By clicking the submit button you agree to our <a className="agree-link" href="#">Privacy Policy</a>  terms.</p>
                        </div>
                        <div className="form__bottom">
                            <button disabled={!formValid} className="form__btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactsPage;