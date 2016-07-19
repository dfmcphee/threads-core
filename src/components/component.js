import React from 'react';

export default class Component extends React.Component {
  variant(base, variant) {
    return `${base}--${variant}`;
  }

  getVariantClass(key) {
    let variantClass = false;
    if (Array.isArray(this.componentOptions.variants[key])) {
      if (this.componentOptions.variants[key].indexOf(this.props[key]) !== -1) {
        variantClass = this.variant(this.componentOptions.base, `${key}-${this.props[key]}`);
      }
    } else {
      variantClass = this.variant(this.componentOptions.base, key);
    }
    return variantClass;
  }

  variants() {
    const classes = [this.componentOptions.base];
    if (this.componentOptions.variants) {
      for (const key in this.props) {
        if (this.componentOptions.variants.hasOwnProperty(key)) {
          const variantClass = this.getVariantClass(key);
          if (variantClass) {
            classes.push(variantClass);
          }
        }
      }
    }
    return classes.join(' ');
  }

  classes() {
    return this.variants();
  }
}
