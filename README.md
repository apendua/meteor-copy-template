# meteor-copy-template

This package allows you to copy your templates.

## Installation

To use this package, run

    mrt add copy-template

## Usage

Supposing you've defined

```html
<template name="myTemplate">
   ...
</template>
```

you can copy it using:

```javascript
Template.__copy__("copyOfMyTemplate", "myTemplate");
```

This should be equivalent to defining template named `copyOfMyTemplate`
with the same code as `myTemplate`. Note, that only rendering code
is the same, both templates have their own `events` and `helpers`.
