import * as Yup from "yup";

const timeSchema = Yup.object().shape({
  active: Yup.boolean(),
  start: Yup.string().when("active", {
    is: true,
    then: (schema) => schema.required("Start time is required"),
    otherwise: (schema) => schema.nullable(),
  }),
  end: Yup.string().when("active", {
    is: true,
    then: (schema) => schema.required("End time is required"),
    otherwise: (schema) => schema.nullable(),
  }),
});

export const branchValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be numeric"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  lat: Yup.number().required("Latitude is required"),
  lng: Yup.number().required("Longitude is required"),
  // address: Yup.string().required("Address is required"),
  timings: Yup.object()
    .shape({
      monday: timeSchema,
      tuesday: timeSchema,
      wednesday: timeSchema,
      thursday: timeSchema,
      friday: timeSchema,
      saturday: timeSchema,
      sunday: timeSchema,
    })
    .test("atLeastOneDay", "At least one day must be selected", (value) => {
      return Object.values(value).some((day) => day.active);
    }),
});

export const branchEditValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be numeric"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  timings: Yup.object()
    .shape({
      monday: timeSchema,
      tuesday: timeSchema,
      wednesday: timeSchema,
      thursday: timeSchema,
      friday: timeSchema,
      saturday: timeSchema,
      sunday: timeSchema,
    })
    .test("atLeastOneDay", "At least one day must be selected", (value) => {
      return Object.values(value).some((day) => day.active);
    }),
});

export const loyaltyValidation = Yup.object().shape({
  reward: Yup.string().required("Reward is required"),
  limit: Yup.number()
    .required("Limit is required")
    .positive("Limit must be a positive number"),
  number_of_orders: Yup.number()
    .required("No of Orders are required")
    .positive("No of Orders must be a positive number"),
  discount: Yup.number()
    .required("Discount is required")
    .positive("Discount must be a positive number"),
  validity: Yup.number()
    .required("Validity is required")
    .positive("Validity must be a positive number"),
});

export const forgotEmail = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const forgotCode = Yup.object().shape({
  code: Yup.string()
    .required("Verification code is required")
    .matches(/^\d{4}$/, "Verification code must be 4 digits"),
});

export const forgotPassword = Yup.object().shape({
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters')
    .required("Password is required"),
  password_confirmation: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password must match Password.")
    .label("Confirm Password"),
});

export const changePassword = Yup.object().shape({
  current_password: Yup.string().required("Current Password is required"),
  password: Yup.string().required("New Password is required"),
  password_confirmation: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password must match Password.")
    .label("Confirm Password"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters')
    .required("Password is required"),
});

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Query is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number()
    .required("Phone Number is required")
    .min(0, "Phone Number must be a positive number"),
});

export const registerValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters')
    .required("Password is required"),
  password_confirmation: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password must match Password.")
    .label("Confirm Password"),
});

export const registerValidation = Yup.object().shape({
  name: Yup.string().required("First Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number()
    .required("Phone Number is required")
    .min(0, "Phone Number must be a positive number"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password must match Password.")
    .label("Confirm Password"),
});

export const promoCodeValidation = Yup.object().shape({
  code_name: Yup.string().required("Code Name is required"),
  code: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Code must be alphanumeric")
    .required("Code is required"),
  discount: Yup.number().required("Discount is required"),
  min_amount: Yup.number().required("Min Amount is required"),
  start_date: Yup.date().required("Start Date is required"),
  end_date: Yup.date()
    .min(Yup.ref("start_date"), "End Date must be after Start Date")
    .required("End Date is required"),
  branches: Yup.array().min(1, "Please select at least one branch"),
});

export const productValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be a positive number"),
  description: Yup.string().required("Description is required"),
  availability: Yup.array().min(1, "Select at least one availability"),
  image: Yup.mixed().required("Image is required"),
  category: Yup.string().required("Category is required"), // Add this line
});

export const paymentValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for Card Holder Name")
    .label("Card Holder Name"),
  cvc: Yup.string()
    .required("CVV Number is required")
    .max(3, "CVV Number must be exactly 3 digits")
    .min(3, "CVV Number must be exactly 3 digits")
    .label("CVV Number"),
  month: Yup.string()
    .test(
      "is-valid-expiration",
      "Expiration date must be greater than current date",
      function (value) {
        if (!value) return false; // if empty, return false
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // months are zero-based
        const [inputYear, inputMonth] = value.split("-").map(Number);
        return (
          inputYear > currentYear ||
          (inputYear === currentYear && inputMonth > currentMonth)
        );
      }
    )
    .required()
    .label("Expiration Date"),
  number: Yup.string()
    .required()
    .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, "Invalid card number format")
    .label("Card Number"),
});

export const bankValidationSchema = Yup.object().shape({
  account_holder_name: Yup.string()
    .required("Account Holder Name is required")
    .matches(
      /^[aA-zZ\s]+$/,
      "Only alphabets are allowed for Account Holder Name"
    ),
  account_type: Yup.string()
    .required("Account Type is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for Account Type"),
  bank_name: Yup.string()
    .required("Bank Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for Bank Name"),
  routing_number: Yup.number().required("Routing Number is required"),
  account_number: Yup.number().required("Account Number is required"),
  confirm_account_number: Yup.number()
    .required("Confirm Account Number is required")
    .oneOf(
      [Yup.ref("account_number"), null],
      "Confirm Account Number must match Account Number."
    )
    .label("Confirm Account Number"),
});

export const profileValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
});

export const adminProfileValidation = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  phone: Yup.number()
    .required("Phone Number is required")
    .min(0, "Phone Number must be a positive number"),
});

export const restaurantProfileValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  phone: Yup.number()
    .required("Phone Number is required")
    .min(0, "Phone Number must be a positive number"),
  account_holder_name: Yup.string().required("Account Holder Name is required"),
  // account_number: Yup.number().required("Account Number is required"),
  account_number: Yup.string()
    .matches(/^\d+$/, "Account Number must be only digits")
    .required("Account Number is required"),
});

export const branchProfileValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.number()
    .required("Phone Number is required")
    .min(0, "Phone Number must be a positive number"),
});

export const payoutValidation = (prevRate) =>
  Yup.object().shape({
    day: Yup.number()
      .typeError("Day must be a number")
      .required("Day is Required")
      .min(0, "Day must be a positive number")
      .test(
        "is-different",
        "The days have already been taken.",
        function (value) {
          return value !== prevRate;
        }
      ),
  });

export const commissionValidation = (prevRate) =>
  Yup.object().shape({
    rate: Yup.number()
      .typeError("Rate must be a number")
      .required("Rate is Required")
      .min(0, "Rate must be a positive number")
      .test(
        "is-different",
        "The Rate have already been taken.",
        function (value) {
          return value !== prevRate;
        }
      ),
  });

  export const clubValidationSchema = Yup.object().shape({
    club_name: Yup.string().required("Club Name is required"),
    email: Yup.string().required("Email is required"),
    first_name: Yup.string().required("Coach First Name is required"),
    last_name: Yup.string().required("Coach Last Name is required"),
  });
