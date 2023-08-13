# How to use the Align?

This feature allows you to create a set of classes containing different alignment properties. These classes can be used
to align and organize HTML elements.

## Features

Below is a list of classes containing alignment properties created with this `SCSS` snippet:

> `text-align:` (left, center, right, justify) <br>
> `vertical-align:` (baseline, top, middle, bottom) <br>
> `align-self:` (flex-start, flex-end, center, baseline, stretch) <br>
> `justify-content`: (flex-start, flex-end, center, space-between, space-around, space-evenly) <br>

## Usage Method

Below are examples of how to use the generated `classes`:

### `text-align`  Classes

These classes are used to control text alignment. Example:

```html
<p class="text-align-left">This text is left aligned.</p>
<p class="text-align-center">This text is centered.</p>
<p class="text-align-right">This text is right aligned.</p>
<p class="text-align-justify">This text is extended aligned.</p>
````

### `vertical-align` Classes

These classes are used to control `vertical alignment`. Example:

```html
<span class="vertical-align-baseline">This text is at baseline.</span>
<span class="vertical-align-top">This text is at the top.</span>
<span class="vertical-align-middle">This text is in the middle.</span>
<span class="vertical-align-bottom">This text is at the bottom.</span>
```

### `align-self` Classes

These classes are used to control the `alignment of items` relative to the container they contain. Example:

```html

<div class="align-self-flex-start">This content is aligned to the beginning.</div>
<div class="align-self-flex-end">This content is left aligned.</div>
<div class="align-self-center">This content is centered.</div>
<div class="align-self-baseline">This content is at baseline.</div>
<div class="align-self-stretch">This content has been stretched.</div>
```

### `justify-content` Classes

These classes are used to control how you align elements on the horizontal plane. Example:

```html

<div class="justify-content-flex-start">Elements are aligned to the beginning.</div>
<div class="justify-content-flex-end">Elements are aligned towards the end.</div>
<div class="justify-content-center">Elements are aligned centered.</div>
<div class="justify-content-space-between">Aligns with spaces between elements.</div>
<div class="justify-content-space-around">Elements are aligned with space around them.</div>
<div class="justify-content-space-evenly">Elements are evenly aligned.</div>
```

## Live Example

<iframe src="https://stackblitz.com/edit/web-platform-qhdy1b?file=index.html" width="100%" height="450"></iframe>

