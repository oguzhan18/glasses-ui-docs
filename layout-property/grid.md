# How to use the Flex - Grid?

It will help you create amazing layouts using `flexbox structure and grid system`. Flex and grdi system that allows to
flexibly sort the contents and create layouts suitable for `different screen sizes`.

### Flexbox System

_The flex box is used to organize items flexibly. Here are a few classes to help you understand how to use it:_

#### `.d-flex`

Used to sort items in a flex box.

#### `.flex-direction-*`

The order of the elements determines the direction:

1. `.flex-direction-row` : Left To Right (Default)
2. `.flex-direction-row-reverse`: From Right To Left
3. `.flex-direction-column`: Top Down
4. `.flex-direction-column-reverse`: Bottom up

#### `.flex-wrap-*`

The order of the elements determines how:

1. `.justify-content-flex-start`: Left (default)
2. `.justify-content-flex-end`: Right
3. `.justify-content-center`: Center
4. `.justify-content-space-between`: Equal Space Between
5. `.justify-content-space-around`: Equal Space Around
6. `.justify-content-space-evenly`: With Equal Spacing

#### `.align-items-*`

Aligns elements vertically:

1. `.align-items-stretch`: Pulls Along Heights (Default)
2. `.align-items-flex-start`: Above
3. `.align-items-flex-end`: Below
4. `.align-items-center`: Center
5. `.align-items-baseline`: According to the baseline
6.

#### `.align-content-*`

Vertically aligns multiple lines:

1. `.align-content-stretch`:Pulls Along Heights (Default)
2. `.align-content-flex-start`: Above
3. `.align-content-flex-end`: Below
4. `.align-content-center`:Center
5. `.align-content-space-between`: Equal space Between
6. `.align-content-space-around`:Equal Space Around

### Grid System

The grid system is used to organize the contents and make them suitable for different screen sizes. Here are the base
classes of the `grid system`:

`.gls-container`
Generic box covering all contents. It sorts the contents flexibly.

`.gls-row`
Represents a `row`. Contains columns and provides sort order.

`.gls-col-*`,
Represents a specific column. Specifies the number of columns instead of `*`. You can also customize columns for specific `screen widths with media queries`.

```html
<div class="gls-container">
    <div class="gls-row">
        <div class="gls-col-12 gls-col-md-6 gls-col-lg-4">
            <!---  Content items can be located here --->
        </div>
        <div class="gls-col-12 gls-col-md-6 gls-col-lg-4">
            <!---  Content items can be located here --->
        </div>
        <div class="gls-col-12 gls-col-md-6 gls-col-lg-4">
            <!---  Content items can be located here --->
        </div>
    </div>
</div>
```` 
