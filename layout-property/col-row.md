# How to use the Col - Row?

explains how to use the grid system created using the `CSS-based flexbox structure`. Thanks to this structure, you can
organize the content flexibly and customize it for different screen sizes.

# How to use the Col

## Usage Method

The `col` attribute represents columns and allows you to organize your content within these columns. Below you can find
the usage and properties of the `col` attribute:

```html

<div class="gls-container">
    <div class="gls-row">
        <div class="gls-col-6">
            <!-- Content will go here -->
        </div>
        <div class="gls-col-6">
            <!-- Content will go here -->
        </div>
    </div>
</div>
````

In the above example, we are creating the public content box with `gls-container`. Next, we create two equal width
columns in `gls-row`. We organize our content by specifying the width of each column as `%`.

## Customize

you can use media queries to customize columns for different screen widths. `For example`:

````html

<div class="gls-container">
    <div class="gls-row">
        <div class="gls-col-12 gls-col-md-6">
            <!-- Content will go here -->
        </div>
        <div class="gls-col-12 gls-col-md-6">
            <!-- Content will go here -->
        </div>
    </div>
</div>
````

In the example above, columns are set to appear full width on small screens `(md size)`.

## Live Example

<iframe src="https://stackblitz.com/edit/web-platform-a4rweh?file=index.html" width="100%" height="450"></iframe>

# How to use the Row

## Usage Method

The row property represents a `row` and contains `columns`. Below you can find the usage and properties of the row
property:

```html

<div class="gls-container">
    <div class="gls-row">
        <div class="gls-col-4">
            <!-- Content will go here -->
        </div>
        <div class="gls-col-4">
            <!-- Content will go here -->
        </div>
        <div class="gls-col-4">
            <!-- Content will go here -->
        </div>
    </div>
</div>
````

You can also customize the rows for different screen widths. `For example`:

## Customize

you can use media queries to customize columns for different screen widths. `For example`:

````html

<div class="gls-container">
    <div class="gls-row">
        <div class="gls-col-12 gls-col-md-6">
            <!-- Content will go here -->
        </div>
        <div class="gls-col-12 gls-col-md-6">
            <!-- Content will go here -->
        </div>
    </div>
</div>
````

In the example above, columns are set to appear full width on small screens `(md size)`.

## Live Example

<iframe src="https://stackblitz.com/edit/web-platform-wtbwe1?file=index.html" width="100%" height="450"></iframe>

This document explains how to use the `col` and `row` properties created with the `SCSS-based flexbox structure`. These
features make it easier to edit content and customize it to suit different screen sizes.
