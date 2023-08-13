# How to use the Breakpoint Structure?

Your CSS code includes a `breakpoint structure` to apply different column widths and properties at different screen
widths `(breakpoints)`. Description of this build:

## Usage Method

To use the `.gls-container` class, you can follow the example below:

> `sm`: Defines column properties for screen widths of `576px` and above.<br>
> `md`: Defines column properties for screen widths of `768px `and above.<br>
> `lg`: Defines column properties for screen widths of `992px` and above.<br>
> `xl`:`xl`: Defines column properties for screen widths of `1200px` and above.<br>

These breakpoint values ​​determine how the columns behave when you reach certain screen widths.

### Column Dimensions

Your SCSS code uses the `flex-basis` and `max-width` properties to specify the widths of the columns within the flexbox
structure. It also applies `padding` values to the columns. Here are the details of these size specifications:
> - `flex-basis`: Specifies the starting width of a column in percent. For example, it is calculated with values such
    as `1/24, 2/24, ..., 24/24`.<br>
> - `max-width`: Specifies the maximum width of a column in percent. Limits the expansion of the element.<br>
> - `padding-right` and `padding-left`: Add inner space to the left and right edges of the column. This sets the spacing between columns.

## Live Example
Below is an example usage that shows how a particular column behaves at different screen widths:
```html
<div class="gls-container">
  <div class="gls-row">
    <div class="gls-col-12 gls-col-md-6 gls-col-lg-4">
        <!-- Content will go here -->
    </div>
  </div>
</div>
```

<iframe src="https://stackblitz.com/edit/web-platform-i4dldn?file=index.html" width="100%" height="450"></iframe>

In the example above, the .gls-col-12 class will have full width at any screen width, while the `.gls-col-md-6` and `.gls-col-lg-4 `classes will have specific widths at certain breakpoints.
