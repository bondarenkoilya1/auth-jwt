export const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "maxleiter@yandex.com"
  },
  {
    name: "password",
    type: "password",
    placeholder: "********",
    description: "must_be_at_least_8_chars"
  }
];

export const registerFields = [
  {
    name: "username",
    type: "text",
    placeholder: "maxleiter"
  },
  ...JSON.parse(JSON.stringify(loginFields))
];
