var constraints = {
  username: {
    presence: true,
    exclusion: {
      within: ["nicklas"],
      message: "'%{value}' is not allowed"
    }
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
};

validate({password: "bad"}, constraints);
// => {
//   "username": ["Username can't be blank"],
//   "password": ["Password must be at least 6 characters"]
// }

validate({username: "nick", password: "better"}, constraints);
// => undefined

validate({username: "nicklas", password: "better"}, constraints);
// => {"username": ["Username 'nicklas' is not allowed"]}

validate({password: "better"}, constraints, {fullMessages: false});
// => {"username": ["can't be blank"]}

validate({}, constraints, {format: "flat"});
// => ["Username can't be blank", "Password can't be blank"]

validate({username: "nicklas", password: "bad"}, constraints, {format: "detailed"});
// => [
//   {
//     "attribute": "username",
//     "value": "nicklas",
//     "validator": "exclusion",
//     "globalOptions": {
//       "format": "detailed"
//     },
//     "attributes": {
//       "username": "nicklas",
//       "password": "bad"
//     },
//     "options": {
//       "within": [
//         "nicklas"
//       ],
//       "message": "'%{value}' is not allowed"
//     },
//     "error": "Username 'nicklas' is not allowed"
//   },
//   {
//     "attribute": "password",
//     "value": "bad",
//     "validator": "length",
//     "globalOptions": {
//       "format": "detailed"
//     },
//     "attributes": {
//       "username": "nicklas",
//       "password": "bad"
//     },
//     "options": {
//       "minimum": 6,
//       "message": "must be at least 6 characters"
//     },
//     "error": "Password must be at least 6 characters"
//   }
// ]

validate({}, {username: {presence: {message: "^You must pick a username"}}});
// => {"username": ["You must pick a username"]}
