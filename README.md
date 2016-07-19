# Threads foundation
Foundational styles for the threads design system.

[![Build Status](https://travis-ci.org/dfmcphee/threads-foundation.svg?branch=master)](https://travis-ci.org/dfmcphee/threads-foundation)

## Getting started
`npm install --save-dev threads-foundation`

And to use the foundation in your Sass file

`@import 'threads-foundation'` using [node-sass-import](https://www.npmjs.com/package/node-sass-import)

or 

`@import '~threads-foundation/foundation'` using [sass-loader](https://www.npmjs.com/package/sass-loader)

## Usage

### Animations

#### @function animation-duration(variant)
Returns the animation duration for a given variant

`@param {String} $variant The key for the variant. Defaults to base.`

`@return {Number} The animation duration for the variant`

Example:
```scss
.default-component {
  animation-duration: animation-duration();
}

.slow-component {
  animation-duration: animation-duration(slow);
}

.fast-component {
  animation-duration: animation-duration(fast);
}
```

#### @function animation-timing(variant)
Returns the animation timing function for a given variant

`@param {String} $variant The key for the variant. Defaults to base.`

`@return {String} The spacing for the variant`

Example:
```scss
.default-component {
  animation-timing-function: animation-timinig();
}
```

### Border radius

#### @function border-radius()
Returns the default border radius value

`@return {Number} The default border radius`

Example:
```scss
.default-component {
  border-radius: border-radius();
}
```

### Borders

#### @function border(variant)
Returns the default border radius value

`@param {String} $variant The key for the border variant`

`@return {List} The border value.`

Example:
```scss
.default-component {
  border: border();
}

.another-component {
  border: border(thick);
}
```

### Colors

#### @function color(name)
Returns the color value for a given color name

`@param {String} $name The name of the color`

`@return {Number} The color value`

Example:
```scss
.some-basic-text {
  color: color(ink);
}

.some-error-text {
  color: color(error);
}
```

### Forms

#### @mixin label
Include the default label styles

Example:
```scss
.label {
  @include label;
}
```

#### @mixin focus
Include the default focus styles

Example:
```scss
:focus {
  @include focus;
}
```

### Layout

#### @mixin max-width
Include the default max-width for layouts

Example:
```scss
.component {
  @include max-width;
}
```

### Spacing

#### @function spacing(style)
Returns the spacing value for a given variant

`@param {String} $variant The key for the style. Defaults to base.`

`@return {Number} The spacing for the variant`

Example:
```scss
.some-component {
  padding: spacing();
}

.some-other-component {
  padding: spacing(tight);
}
```

### Utilities

#### @function rem(value)
Returns the value in rem for a given pixel value.

`@param {Number} $value - The pixel value to be converted.`

`@return {Number} The converted value in rem.`

Example:
```scss
.some-component {
  height: rem(10px);
}
```

#### @function px(value)
Returns the value in pixels for a given rem value.

`@param {Number} $value - The rem value to be converted.`

`@return {Number} The converted value in pixels.`

Example:
```scss
.some-component {
  height: px(1rem);
}
```

## Testing
`npm test`
