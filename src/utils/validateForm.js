export default function validateForm(values) {
  const err = {};
  console.log(values);
  for (const prop in values) {
    if (prop.toLocaleLowerCase() === "username" && values[prop].length === 0) {
      err["Username"] = "Please type a username";
    }
    if (prop.toLocaleLowerCase() === "password" && values[prop].length === 0) {
      err["Password"] = "Please type a password";
    }
    if (prop.toLocaleLowerCase() === "password" && values[prop].length < 5) {
      err["Password"] = "Password too short";
    }
    if (
      prop.toLocaleLowerCase() === "confirm password" &&
      values[prop].length === 0
    ) {
      err["Confirm Password"] = "Please confirm password";
    }
    if (
      prop.toLocaleLowerCase() === "confirm password" &&
      values[prop] !== values["Password"]
    ) {
      err["Confirm Password"] = "Passwords must match";
    }
    if (prop.toLocaleLowerCase() === "email" && values[prop].length === 0) {
      err["Email"] = "Please type an email";
    }
    if (prop.toLocaleLowerCase() === "phone" && values[prop].length === 0) {
      err["Phone"] = "Please type a phone";
    }
  }

  return err;
}
