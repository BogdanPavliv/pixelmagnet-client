"use client";
import React, { useEffect, useState, FormEvent } from "react";
import styles from "../../../styles/contacts/index.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const categories = [
  "Branding",
  "UX/UI Design",
  "App Development",
  "Web Development",
  "Digital Transformation",
];

const budgetOptions = [
  "$400",
  "$500",
  "$750",
  "$1000",
  "$1500",
  "$2000",
  "$3000+",
];

const ContactsSection = () => {
  // PhoneInput
  const [value, setValue] = useState<string | undefined>();
  // Category
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Actions when submitting a form, for example, sending data to the server
    console.log("Selected category:", selectedCategory);
  };

  //  Budget options
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [customBudget, setCustomBudget] = useState<string>("");

  const handleBudgetClick = (budget: string) => {
    setSelectedBudget(budget);
    setCustomBudget(""); // Clear the field if the option is selected
  };

  const handleCustomBudgetChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedBudget(null); // Deselect options when entering your own value
    setCustomBudget(event.target.value);
  };

  // Form validation

  const [email, setEmail] = useState("");
  const [emptyName, setEmptyName] = useState("");
  const [emptyCompany, setEmptyCompany] = useState("");
  const [emptyLocation, setEmptyLocation] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [emptyNameDirty, setEmptyNameDirty] = useState(false);
  const [emptyCompanyDirty, setEmptyCompanyDirty] = useState(false);
  const [emptyLocationDirty, setEmptyLocationDirty] = useState(false);

  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [emptyNameError, setEmptyNameError] = useState(
    "The field cannot be empty"
  );
  const [emptyCompanyError, setEmptyCompanyError] = useState(
    "The field cannot be empty"
  );
  const [emptyLocationError, setEmptyLocationError] = useState(
    "The field cannot be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      emailError ||
      emptyNameError ||
      emptyCompanyError ||
      emptyLocationError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, emptyNameError, emptyCompanyError, emptyLocationError]);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email!");
      setEmailDirty(true);
    } else {
      setEmailError("");
      setEmailDirty(false);
    }
  };

  const emptyNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyName(e.target.value);
    if (!e.target.value) {
      setEmptyNameError("The field cannot be empty");
      setEmptyNameDirty(true);
    } else {
      setEmptyNameError("");
      setEmptyNameDirty(false);
    }
  };

  const emptyCompanyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyCompany(e.target.value);
    if (!e.target.value) {
      setEmptyCompanyError("The field cannot be empty");
      setEmptyCompanyDirty(true);
    } else {
      setEmptyCompanyError("");
      setEmptyCompanyDirty(false);
    }
  };

  const emptyLocationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyLocation(e.target.value);
    if (!e.target.value) {
      setEmptyLocationError("The field cannot be empty");
      setEmptyLocationDirty(true);
    } else {
      setEmptyLocationError("");
      setEmptyLocationDirty(false);
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setEmptyNameDirty(true);
        break;
      case "company":
        setEmptyCompanyDirty(true);
        break;
      case "location":
        setEmptyLocationDirty(true);
        break;
    }
  };
  return (
    <section className={styles.contacts}>
      <div className="container-form">
        <div className={styles.contacts__inner}>
          <form
            action="#!"
            id="form"
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.form__top}>
              <div className={styles.form__top__row}>
                <label className={styles.form__label} htmlFor="formName">
                  Name*
                </label>
                <input
                  onChange={(e) => emptyNameHandler(e)}
                  value={emptyName}
                  onBlur={(e) => blurHandler(e)}
                  className={
                    emptyNameDirty && emptyNameError
                      ? `${styles.form__input} ${styles.form__input__error}`
                      : `${styles.form__input}`
                  }
                  id="formName"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />

                <label className={styles.form__label} htmlFor="formPhone">
                  Phone number
                </label>
                <PhoneInput
                  value={value}
                  onChange={(phone: string | undefined) => setValue(phone)}
                  className={styles.form__input}
                  id="formPhone"
                  type="text"
                  name="phone"
                />

                <label className={styles.form__label} htmlFor="formEmail">
                  Email*
                </label>
                <input
                  onChange={(e) => emailHandler(e)}
                  value={email}
                  onBlur={(e) => blurHandler(e)}
                  className={
                    emailDirty && emailError
                      ? `${styles.form__input} ${styles.form__input__error}`
                      : `${styles.form__input}`
                  }
                  id="formEmail"
                  type="text"
                  name="email"
                  placeholder="Your email"
                />

                <label className={styles.form__label} htmlFor="formCompany">
                  Company*
                </label>
                <input
                  onChange={(e) => emptyCompanyHandler(e)}
                  value={emptyCompany}
                  onBlur={(e) => blurHandler(e)}
                  className={
                    emptyCompanyDirty && emptyCompanyError
                      ? `${styles.form__input} ${styles.form__input__error}`
                      : `${styles.form__input}`
                  }
                  id="formCompany"
                  type="text"
                  name="company"
                  placeholder="Company name"
                />

                <label className={styles.form__label} htmlFor="formWebsite">
                  Website
                </label>
                <input
                  className={styles.form__input}
                  id="formWebsite"
                  type="text"
                  name="website"
                  placeholder="Company location"
                />
              </div>
              <div className={styles.form__top__row}>
                <label className={styles.form__label} htmlFor="formCategory">
                  Category*
                </label>
                <div className={styles.form__select__wrapper}>
                  <select
                    className={
                      selectedCategory
                        ? `${styles.form__select} ${styles.form__select_active}`
                        : `${styles.form__select}`
                    }
                    id="formCategory"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="">Select below</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <label className={styles.form__label} htmlFor="formLocation">
                  Location*
                </label>
                <input
                  onChange={(e) => emptyLocationHandler(e)}
                  value={emptyLocation}
                  onBlur={(e) => blurHandler(e)}
                  className={
                    emptyLocationDirty && emptyLocationError
                      ? `${styles.form__input} ${styles.form__input__error}`
                      : `${styles.form__input}`
                  }
                  id="formLocation"
                  type="text"
                  name="location"
                  placeholder="Company location"
                />

                <label className={styles.form__label} htmlFor="formBudget">
                  Budget
                </label>

                <div className={styles.form__budget} id="formBudget">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      className={
                        selectedBudget === budget
                          ? `${styles.budget_button} ${styles.budget_button_active}`
                          : `${styles.budget_button}`
                      }
                      type="button"
                      onClick={() => handleBudgetClick(budget)}
                      style={{}}
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
                  className={styles.form__input}
                />
              </div>
            </div>
            <div className={styles.form__middle}>
              <label className={styles.form__label} htmlFor="formTextarea">
                Summary
              </label>
              <textarea
                className={styles.form__textarea}
                id="formTextarea"
                name="message"
                placeholder="Briefly tell us about your projects"
              ></textarea>
              <p className={styles.agree_text}>
                By clicking the submit button you agree to our{" "}
                <a className={styles.agree_link} href="#">
                  Privacy Policy
                </a>{" "}
                terms.
              </p>
            </div>
            <div className={styles.form__bottom}>
              <button
                disabled={!formValid}
                className={styles.form__btn}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
