# thug-validations [![Build Status](https://travis-ci.org/twilson63/thug-validations.png?branch=master)](https://travis-ci.org/twilson63/thug-validations)

Thug is a functional model system for nodejs, this module is an add-on module of common validations that any model may use.

## What is thug?

[https://github.com/sintaxi/thug](https://github.com/sintaxi/thug)

> Thug was created to minimize the complexity of validating and altering an object before writing it to a data store or performing an operation. Thug is not an ORM but is ment to be a replacment for one. Thug is very small and works on both the server or in a browser.

## Install

```
npm install thug-validations --save
```

## Implementation

Thug Model

```
var Thug = require('thug');
var validations = require('thug-validations');

module.exports = function(config) {
  var post = new Thug({
    "validations": {
      "title"         : [validations.present],
      "author"      : [validations.present, validations.email]
    }
  });
  return post;
}
```

## Validations API

### `present`

`field` should be present when validated.

### `email`

`field` should use validator to confirm field formats as an email address.

### `confirmation`

`doc` should contain an additional confirmation field and validate equality. 

## LICENSE

MIT

## Contributing

pull requests are welcome!  

## Roadmap

More validations coming, these are just to get the ball rolling.

## Thanks to the contributors and maintainers of the following projects

* [https://github.com/sintaxi/thug](https://github.com/sintaxi/thug)
* [https://github.com/chriso/node-validator](https://github.com/chriso/node-validator)

