namespace Feliz.DaisyUI

open System
open Feliz
open Fable.Core

[<Erase>]
type alert =
    /// Alert with `info` color
    static member inline info = prop.className "alert-info"
    /// Alert with `success` color
    static member inline success = prop.className "alert-success"
    /// Alert with `warning` color
    static member inline warning = prop.className "alert-warning"
    /// Alert with `error` color
    static member inline error = prop.className "alert-error"
    /// Alert with `outline` style
    static member inline outline = prop.className "alert-outline"
    /// Alert with `dash` style
    static member inline dash = prop.className "alert-dash"
    /// Alert with `soft` style
    static member inline soft = prop.className "alert-soft"
    /// Alert with `horizontal` direction
    static member inline horizontal = prop.className "alert-horizontal"
    /// Alert with `vertical` direction
    static member inline vertical = prop.className "alert-vertical"

[<Erase>]
type avatar =
    /// shows a green dot as online indicator
    static member inline online = prop.className "avatar-online"
    /// shows a gray dot as online indicator
    static member inline offline = prop.className "avatar-offline"
    /// to show some letters as avatar placeholder
    static member inline placeholder = prop.className "avatar-placeholder"
    /// avatar class name usable for combination with other elements
    static member inline className = prop.className "avatar"

[<Erase>]
type badge =
    /// transparent badge with [colorful] border
    static member inline outline = prop.className "badge-outline"
    /// badge with `primary` color
    static member inline primary = prop.className "badge-primary"
    /// badge with `secondary` color
    static member inline secondary = prop.className "badge-secondary"
    /// badge with `accent` color
    static member inline accent = prop.className "badge-accent"
    /// badge with `ghost` color
    static member inline ghost = prop.className "badge-ghost"
    /// badge with `info` color
    static member inline info = prop.className "badge-info"
    /// badge with `success` color
    static member inline success = prop.className "badge-success"
    /// badge with `warning` color
    static member inline warning = prop.className "badge-warning"
    /// badge with `error` color
    static member inline error = prop.className "badge-error"
    /// badge with `neutral` color
    static member inline neutral = prop.className "badge-neutral"
    /// badge with extra large size
    static member inline xl = prop.className "badge-xl"
    /// badge with large size
    static member inline lg = prop.className "badge-lg"
    /// badge with medium size (default)
    static member inline md = prop.className "badge-md"
    /// badge with small size
    static member inline sm = prop.className "badge-sm"
    /// badge with extra small size
    static member inline xs = prop.className "badge-xs"
    /// badge with `dash` style
    static member inline dash = prop.className "badge-dash"
    /// badge with `soft` style
    static member inline soft = prop.className "badge-soft"

[<Erase>]
type button =
    /// Extra large button
    static member inline xl = prop.className "btn-xl"
    /// Large button
    static member inline lg = prop.className "btn-lg"
    /// Medium button (default)
    static member inline md = prop.className "btn-md"
    /// Small button
    static member inline sm = prop.className "btn-sm"
    /// Extra small button
    static member inline xs = prop.className "btn-xs"
    /// Wide button (more horizontal padding)
    static member inline wide = prop.className "btn-wide"
    /// Full width button
    static member inline block = prop.className "btn-block"
    /// Circle button with a 1:1 ratio
    static member inline circle = prop.className "btn-circle"
    /// Square button with a 1:1 ratio
    static member inline square = prop.className "btn-square"
    /// Button with `primary` color
    static member inline primary = prop.className "btn-primary"
    /// Button with `secondary` color
    static member inline secondary = prop.className "btn-secondary"
    /// Button with `accent` color
    static member inline accent = prop.className "btn-accent"
    /// Button with `info` color
    static member inline info = prop.className "btn-info"
    /// Button with `success` color
    static member inline success = prop.className "btn-success"
    /// Button with `warning` color
    static member inline warning = prop.className "btn-warning"
    /// Button with `error` color
    static member inline error = prop.className "btn-error"
    /// Button with `neutral` color
    static member inline neutral = prop.className "btn-neutral"
    /// Button with ghost style
    static member inline ghost = prop.className "btn-ghost"
    /// Button styled as a link
    static member inline link = prop.className "btn-link"
    /// Transparent Button with colored border
    static member inline outline = prop.className "btn-outline"
    /// Force button to show active state
    static member inline active = prop.className "btn-active"
    /// Force button to show disabled state
    static member inline disabled = prop.className "btn-disabled"
    /// Button with a glass effect
    static member inline glass = prop.className "glass"
    /// Disables click animation
    static member inline animation = prop.className "no-animation"
    /// Button with `dash` style
    static member inline dash = prop.className "btn-dash"
    /// Button with `soft` style
    static member inline soft = prop.className "btn-soft"

[<Erase>]
type card =
    /// Extra large card
    static member inline xl = prop.className "card-xl"
    /// Large card
    static member inline lg = prop.className "card-lg"
    /// Medium card (default)
    static member inline md = prop.className "card-md"
    /// Small card
    static member inline sm = prop.className "card-sm"
    /// Extra small card
    static member inline xs = prop.className "card-xs"
    /// The image in <figure> will be on to the side
    static member inline side = prop.className "card-side"
    /// The image in <figure> element will be the background
    static member inline full = prop.className "image-full"
    /// Button with `border` style
    static member inline border = prop.className "card-border"
    /// Button with `dash` style
    static member inline dash = prop.className "card-dash"

[<Erase>]
type carousel =
    /// Snap elements to center
    static member inline center = prop.className "carousel-center"
    /// Snap elements to end
    static member inline end' = prop.className "carousel-end"
    /// Vertical carousel
    static member inline vertical = prop.className "carousel-vertical"

[<Erase>]
type collapse =
    /// Adds arrow icon
    static member inline arrow = prop.className "collapse-arrow"
    /// Adds plus/minus icon
    static member inline plus = prop.className "collapse-plus"
    /// Force open
    static member inline open' = prop.className "collapse-open"
    /// Force close
    static member inline close = prop.className "collapse-close"

[<Erase>]
type divider =
    /// Divide elements on top of each other (default)
    static member inline vertical = prop.className "divider-vertical"
    /// Divide elements next to each other
    static member inline horizontal = prop.className "divider-horizontal"
    /// Pushes the divider text to the start
    static member inline start = prop.className "divider-start"
    /// Pushes the divider text to the end
    static member inline end' = prop.className "divider-end"
    /// Applies primary color to the divider line
    static member inline primary = prop.className "divider-primary"
    /// Applies secondary color to the divider line
    static member inline secondary = prop.className "divider-secondary"
    /// Applies accent color to the divider line
    static member inline accent = prop.className "divider-accent"
    /// Applies neutral color to the divider line
    static member inline neutral = prop.className "divider-neutral"
    /// Applies success color to the divider line
    static member inline success = prop.className "divider-success"
    /// Applies warning color to the divider line
    static member inline warning = prop.className "divider-warning"
    /// Applies info color to the divider line
    static member inline info = prop.className "divider-info"
    /// Applies error color to the divider line
    static member inline error = prop.className "divider-error"

[<Erase>]
type drawer =
    /// puts drawer to the right
    static member inline end' = prop.className "drawer-end"

[<Erase>]
type dropdown =
    /// Align horizontally to end
    static member inline end' = prop.className "dropdown-end"
    /// Align horizontally to start (Default)
    static member inline start = prop.className "dropdown-start"
    /// Align horizontally to center
    static member inline center = prop.className "dropdown-center"
    /// Open from top
    static member inline top = prop.className "dropdown-top"
    /// Open from left
    static member inline left = prop.className "dropdown-left"
    /// Open from right
    static member inline right = prop.className "dropdown-right"
    /// Opens on hover too
    static member inline hover = prop.className "dropdown-hover"
    /// Force open
    static member inline open' = prop.className "dropdown-open"

[<Erase>]
type footer =
    /// Aligns footer content to center
    static member inline center = prop.className "footer-center"
    /// Footer with `horizontal` direction
    static member inline horizontal = prop.className "footer-horizontal"
    /// Footer with `vertical` direction
    static member inline vertical = prop.className "footer-vertical"

[<Erase>]
type indicator =
    /// align horizontally to the left
    static member inline start = prop.className "indicator-start"
    /// align horizontally to the center
    static member inline center = prop.className "indicator-center"
    /// align horizontally to the right (default)
    static member inline end' = prop.className "indicator-end"
    /// align vertically to top (default)
    static member inline top = prop.className "indicator-top"
    /// align vertically to middle
    static member inline middle = prop.className "indicator-middle"
    /// align vertically to bottom
    static member inline bottom = prop.className "indicator-bottom"

[<Erase>]
type join =
    /// Item inside join. Can be a button, input, etc.
    static member inline item = prop.className "join-item"
    /// Show items vertically
    static member inline vertical = prop.className "join-vertical"
    /// Show items horizontally
    static member inline horizontal = prop.className "join-horizontal"

[<Erase>]
type kbd =
    /// Extra large size
    static member inline xl = prop.className "kbd-xl"
    /// Large size
    static member inline lg = prop.className "kbd-lg"
    /// Medium size (default)
    static member inline md = prop.className "kbd-md"
    /// Small size
    static member inline sm = prop.className "kbd-sm"
    /// Extra small size
    static member inline xs = prop.className "kbd-xs"

[<Erase>]
type link =
    /// Link with `primary` color
    static member inline primary = prop.className "link-primary"
    /// Link with `secondary` color
    static member inline secondary = prop.className "link-secondary"
    /// Link with `accent` color
    static member inline accent = prop.className "link-accent"
    /// Link with `neutral` color
    static member inline neutral = prop.className "link-neutral"
    /// Link with `success` color
    static member inline success = prop.className "link-success"
    /// Link with `info` color
    static member inline info = prop.className "link-info"
    /// Link with `warning` color
    static member inline warning = prop.className "link-warning"
    /// Link with `error` color
    static member inline error = prop.className "link-error"
    /// Only show underline on hover
    static member inline hover = prop.className "link-hover"

[<Erase>]
type loading =
    ///Shows the spinner animation
    static member inline spinner = prop.className "loading-spinner"
    ///Shows the dots animation
    static member inline dots = prop.className "loading-dots"
    ///Shows the ring animation
    static member inline ring = prop.className "loading-ring"
    ///Shows the ball animation
    static member inline ball = prop.className "loading-ball"
    ///Shows the bars animation
    static member inline bars = prop.className "loading-bars"
    ///Shows the infinity animation
    static member inline infinity = prop.className "loading-infinity"
    /// Extra large size
    static member inline xl = prop.className "loading-xl"
    /// Large size
    static member inline lg = prop.className "loading-lg"
    /// Medium size (default)
    static member inline md = prop.className "loading-md"
    /// Small size
    static member inline sm = prop.className "loading-sm"
    /// Extra small size
    static member inline xs = prop.className "loading-xs"

[<Erase>]
type mask =
    /// Applies `squircle` shape
    static member inline squircle = prop.className "mask mask-squircle"
    /// Applies `heart` shape
    static member inline heart = prop.className "mask mask-heart"
    /// Applies `hexagon` shape
    static member inline hexagon = prop.className "mask mask-hexagon"
    /// Applies `hexagon` alternative shape
    static member inline hexagon2 = prop.className "mask mask-hexagon-2"
    /// Applies `decagon` shape
    static member inline decagon = prop.className "mask mask-decagon"
    /// Applies `pentagon` shape
    static member inline pentagon = prop.className "mask mask-pentagon"
    /// Applies `diamond` shape
    static member inline diamond = prop.className "mask mask-diamond"
    /// Applies `square` shape
    static member inline square = prop.className "mask mask-square"
    /// Applies `circle` shape
    static member inline circle = prop.className "mask mask-circle"
    /// Applies `star` shape
    static member inline star = prop.className "mask mask-star"
    /// Applies `star` alternative shape
    static member inline star2 = prop.className "mask mask-star-2"
    /// Applies `triangle` shape
    static member inline triangle = prop.className "mask mask-triangle"
    /// Applies `triangle` alternative shape
    static member inline triangle2 = prop.className "mask mask-triangle-2"
    /// Applies `triangle` alternative shape
    static member inline triangle3 = prop.className "mask mask-triangle-3"
    /// Applies `triangle` alternative shape
    static member inline triangle4 = prop.className "mask mask-triangle-4"

[<Erase>]
type menu =
    /// Extra large size
    static member inline xl = prop.className "menu-xl"
    /// Large size
    static member inline lg = prop.className "menu-lg"
    /// Medium size (default)
    static member inline md = prop.className "menu-md"
    /// Small size
    static member inline sm = prop.className "menu-sm"
    /// Extra small size
    static member inline xs = prop.className "menu-xs"
    /// Menu with `vertical` direction
    static member inline vertical = prop.className "menu-vertical"
    /// Menu with `horizontal` direction
    static member inline horizontal = prop.className "menu-horizontal"
    /// Shows the `menu-dropdown-toggle` and `menu-dropdown` collapsible submenu using JS
    static member inline dropdownShow = prop.className "menu-dropdown-show"

[<Erase>]
type menuItem =
    /// Set menu item as active
    static member inline active = prop.className "menu-active"
    /// Applies focus style to the element inside <li>
    static member inline focus = prop.className "menu-focus"
    /// Sets <li> as disabled
    static member inline disabled = prop.className "menu-disabled"

[<Erase>]
type modal =
    /// Add/remove this class to open/close the modal using JS
    static member inline open' = prop.className "modal-open"
    /// Moves the modal to top
    static member inline top = prop.className "modal-top"
    /// Moves the modal to bottom
    static member inline bottom = prop.className "modal-bottom"
    /// Moves the modal to middle (default)
    static member inline middle = prop.className "modal-middle"
    /// Moves the modal to start horizontally
    static member inline start = prop.className "modal-start"
    /// Moves the modal to end horizontally
    static member inline end' = prop.className "modal-end"

[<Erase>]
type progress =
    /// Adds `primary` color
    static member inline primary = prop.className "progress-primary"
    /// Adds `secondary` color
    static member inline secondary = prop.className "progress-secondary"
    /// Adds `accent` color
    static member inline accent = prop.className "progress-accent"
    /// Adds `info` color
    static member inline info = prop.className "progress-info"
    /// Adds `success` color
    static member inline success = prop.className "progress-success"
    /// Adds `warning` color
    static member inline warning = prop.className "progress-warning"
    /// Adds `error` color
    static member inline error = prop.className "progress-error"

[<Erase>]
type stack =
    /// Aligns the children elements to the top
    static member inline top = prop.className "stack-top"
    /// Aligns the children elements to the bottom (default)
    static member inline bottom = prop.className "stack-bottom"
    /// Aligns the children elements to the start (horizontally)
    static member inline start = prop.className "stack-start"
    /// Aligns the children elements to the end (horizontally)
    static member inline end' = prop.className "stack-end"

[<Erase>]
type steps =
    /// makes `steps` vertical
    static member inline vertical = prop.className "steps-vertical"
    /// makes `steps` horizontal (default)
    static member inline horizontal = prop.className "steps-horizontal"

[<Erase>]
type step =
    /// Adds `primary` color to step
    static member inline primary = prop.className "step-primary"
    /// Adds `secondary` color to step
    static member inline secondary = prop.className "step-secondary"
    /// Adds `accent` color to step
    static member inline accent = prop.className "step-accent"
    /// Adds `info` color to step
    static member inline info = prop.className "step-info"
    /// Adds `success` color to step
    static member inline success = prop.className "step-success"
    /// Adds `warning` color to step
    static member inline warning = prop.className "step-warning"
    /// Adds `error` color to step
    static member inline error = prop.className "step-error"
    /// Adds `data-content` attribute to the step
    static member inline content value = prop.custom("data-content", value)

[<Erase>]
type tabs =
    /// Adds a box style to tabs container
    static member inline box = prop.className "tabs-box"
    /// Adds a border to tabs container
    static member inline border = prop.className "tabs-border"
    /// Adds a shadow to tabs container
    static member inline lift = prop.className "tabs-lift"
    /// Puts tab buttons on top of the tab-content (default)
    static member inline top = prop.className "tabs-top"
    /// Puts tabs under the tab-content
    static member inline bottom = prop.className "tabs-bottom"
    /// Shows tabs in extra small size
    static member inline xs = prop.className "tabs-xs"
    /// Shows tabs in small size
    static member inline sm = prop.className "tabs-sm"
    /// Shows tabs in medium (default) size
    static member inline md = prop.className "tabs-md"
    /// Shows tabs in large size
    static member inline lg = prop.className "tabs-lg"
    /// Shows tabs in extra large size
    static member inline xl = prop.className "tabs-xl"

[<Erase>]
type tab =
    /// Makes a single tab look active
    static member inline active = prop.className "tab-active"
    /// Makes a single tab look disabled
    static member inline disabled = prop.className "tab-disabled"

[<Erase>]
type table =
    /// For <table> to show zebra stripe rows
    static member inline zebra = prop.className "table-zebra"
    /// For <table> to make all the rows inside <thead> and <tfoot> sticky
    static member inline pinRows = prop.className "table-pin-rows"
    /// For <table> to make all the <th> columns sticky
    static member inline pinCols = prop.className "table-pin-cols"
    /// Shows table in extra small size
    static member inline xs = prop.className "table-xs"
    /// Shows table in small size
    static member inline sm = prop.className "table-sm"
    /// Shows table in medium (default) size
    static member inline md = prop.className "table-md"
    /// Shows table in large size
    static member inline lg = prop.className "table-lg"
    /// Shows table in extra large size
    static member inline xl = prop.className "table-xl"

[<Erase>]
type tooltip =
    /// Tooltip content
    static member inline text (t:string) = prop.custom("data-tip", t)
    /// Force open tooltip
    static member inline open' = prop.className "tooltip-open"
    /// Put tooltip on top (default)
    static member inline top = prop.className "tooltip-top"
    /// Put tooltip on bottom
    static member inline bottom = prop.className "tooltip-bottom"
    /// Put tooltip on left
    static member inline left = prop.className "tooltip-left"
    /// Put tooltip on right
    static member inline right = prop.className "tooltip-right"
    /// Adds `primary` color to tooltip
    static member inline primary = prop.className "tooltip-primary"
    /// Adds `secondary` color to tooltip
    static member inline secondary = prop.className "tooltip-secondary"
    /// Adds `accent` color to tooltip
    static member inline accent = prop.className "tooltip-accent"
    /// Adds `info` color to tooltip
    static member inline info = prop.className "tooltip-info"
    /// Adds `success` color to tooltip
    static member inline success = prop.className "tooltip-success"
    /// Adds `warning` color to tooltip
    static member inline warning = prop.className "tooltip-warning"
    /// Adds `error` color to tooltip
    static member inline error = prop.className "tooltip-error"
    /// Adds `neutral` color to tooltip
    static member inline neutral = prop.className "tooltip-neutral"

[<Erase>]
type checkbox =
    /// Checkbox with `primary` color 
    static member inline primary = prop.className "checkbox-primary"
    /// Checkbox with `secondary` color 
    static member inline secondary = prop.className "checkbox-secondary"
    /// Checkbox with `accent` color 
    static member inline accent = prop.className "checkbox-accent"
    /// Checkbox with `neutral` color 
    static member inline neutral = prop.className "checkbox-neutral"
    /// Checkbox with `success` color 
    static member inline success = prop.className "checkbox-success"
    /// Checkbox with `warning` color 
    static member inline warning = prop.className "checkbox-warning"
    /// Checkbox with `info` color 
    static member inline info = prop.className "checkbox-info"
    /// Checkbox with `accent` color 
    static member inline error = prop.className "checkbox-error"
    /// Extra large checkbox
    static member inline xl = prop.className "checkbox-xl"
    /// Large checkbox
    static member inline lg = prop.className "checkbox-lg"
    /// Medium checkbox (default)
    static member inline md = prop.className "checkbox-md"
    /// Small checkbox
    static member inline sm = prop.className "checkbox-sm"
    /// Extra small checkbox
    static member inline xs = prop.className "checkbox-xs"

[<Erase>]
type input =
    /// Adds ghost style to checkbox
    static member inline ghost = prop.className "input-ghost"
    /// Adds `primary` color to input
    static member inline primary = prop.className "input-primary"
    /// Adds `secondary` color to input
    static member inline secondary = prop.className "input-secondary"
    /// Adds `accent` color to input
    static member inline accent = prop.className "input-accent"
    /// Adds `info` color to input
    static member inline info = prop.className "input-info"
    /// Adds `success` color to input
    static member inline success = prop.className "input-success"
    /// Adds `warning` color to input
    static member inline warning = prop.className "input-warning"
    /// Adds `error` color to input
    static member inline error = prop.className "input-error"
    /// Extra large size for input
    static member inline xl = prop.className "input-xl"
    /// Large size for input
    static member inline lg = prop.className "input-lg"
    /// Medium (default) size for input
    static member inline md = prop.className "input-md"
    /// Small size for input
    static member inline sm = prop.className "input-sm"
    /// Extra small size for input
    static member inline xs = prop.className "input-xs"

[<Erase>]
type radio =
    /// Adds `primary` color to radio
    static member inline primary = prop.className "radio-primary"
    /// Adds `secondary` color to radio
    static member inline secondary = prop.className "radio-secondary"
    /// Adds `accent` color to radio
    static member inline accent = prop.className "radio-accent"
    /// Adds `success` color to radio
    static member inline success = prop.className "radio-success"
    /// Adds `warning` color to radio
    static member inline warning = prop.className "radio-warning"
    /// Adds `info` color to radio
    static member inline info = prop.className "radio-info"
    /// Adds `error` color to radio
    static member inline error = prop.className "radio-error"
    /// Extra large radio
    static member inline xl = prop.className "radio-xl"
    /// Large radio
    static member inline lg = prop.className "radio-lg"
    /// Medium radio (default)
    static member inline md = prop.className "radio-md"
    /// Small radio
    static member inline sm = prop.className "radio-sm"
    /// Extra small radio
    static member inline xs = prop.className "radio-xs"

[<Erase>]
type range =
    /// Adds `primary` color to range
    static member inline primary = prop.className "range-primary"
    /// Adds `secondary` color to range
    static member inline secondary = prop.className "range-secondary"
    /// Adds `accent` color to range
    static member inline accent = prop.className "range-accent"
    /// Adds `success` color to range
    static member inline success = prop.className "range-success"
    /// Adds `warning` color to range
    static member inline warning = prop.className "range-warning"
    /// Adds `info` color to range
    static member inline info = prop.className "range-info"
    /// Adds `error` color to range
    static member inline error = prop.className "range-error"
    /// Extra large range
    static member inline xl = prop.className "range-xl"
    /// Large range
    static member inline lg = prop.className "range-lg"
    /// Medium range (default)
    static member inline md = prop.className "range-md"
    /// Small range
    static member inline sm = prop.className "range-sm"
    /// Extra small range
    static member inline xs = prop.className "range-xs"

[<Erase>]
type select =
    /// Adds ghost style to checkbox
    static member inline ghost = prop.className "select-ghost"
    /// Adds `primary` color to select
    static member inline primary = prop.className "select-primary"
    /// Adds `secondary` color to select
    static member inline secondary = prop.className "select-secondary"
    /// Adds `accent` color to select
    static member inline accent = prop.className "select-accent"
    /// Adds `info` color to select
    static member inline info = prop.className "select-info"
    /// Adds `success` color to select
    static member inline success = prop.className "select-success"
    /// Adds `warning` color to select
    static member inline warning = prop.className "select-warning"
    /// Adds `error` color to select
    static member inline error = prop.className "select-error"
    /// Extra large size for select
    static member inline xl = prop.className "select-xl"
    /// Large size for select
    static member inline lg = prop.className "select-lg"
    /// Medium (default) size for select
    static member inline md = prop.className "select-md"
    /// Small size for select
    static member inline sm = prop.className "select-sm"
    /// Extra small size for select
    static member inline xs = prop.className "select-xs"

[<Erase>]
type textarea =
    /// Adds ghost style to checkbox
    static member inline ghost = prop.className "textarea-ghost"
    /// Adds `primary` color to textarea
    static member inline primary = prop.className "textarea-primary"
    /// Adds `secondary` color to textarea
    static member inline secondary = prop.className "textarea-secondary"
    /// Adds `accent` color to textarea
    static member inline accent = prop.className "textarea-accent"
    /// Adds `info` color to textarea
    static member inline info = prop.className "textarea-info"
    /// Adds `success` color to textarea
    static member inline success = prop.className "textarea-success"
    /// Adds `warning` color to textarea
    static member inline warning = prop.className "textarea-warning"
    /// Adds `error` color to textarea
    static member inline error = prop.className "textarea-error"
    /// Adds `neutral` color to textarea
    static member inline neutral = prop.className "textarea-neutral"
    /// Extra large size for textarea
    static member inline xl = prop.className "textarea-xl"
    /// Large size for textarea
    static member inline lg = prop.className "textarea-lg"
    /// Medium (default) size for textarea
    static member inline md = prop.className "textarea-md"
    /// Small size for textarea
    static member inline sm = prop.className "textarea-sm"
    /// Extra small size for textarea
    static member inline xs = prop.className "textarea-xs"

[<Erase>]
type mockupCode =
    /// Add prefix on a code line (used on PRE element level)
    static member inline prefix (prefix:string) = prop.custom("data-prefix", prefix)

[<Erase>]
type toggle =
    /// Adds `primary` color to toggle
    static member inline primary = prop.className "toggle-primary"
    /// Adds `secondary` color to toggle
    static member inline secondary = prop.className "toggle-secondary"
    /// Adds `accent` color to toggle
    static member inline accent = prop.className "toggle-accent"
    /// Adds `info` color to toggle
    static member inline info = prop.className "toggle-info"
    /// Adds `success` color to toggle
    static member inline success = prop.className "toggle-success"
    /// Adds `warning` color to toggle
    static member inline warning = prop.className "toggle-warning"
    /// Adds `error` color to toggle
    static member inline error = prop.className "toggle-error"
    /// Adds `neutral` color to toggle
    static member inline neutral = prop.className "toggle-neutral"
    /// Extra large toggle
    static member inline xl = prop.className "toggle-xl"
    /// Large toggle
    static member inline lg = prop.className "toggle-lg"
    /// Medium toggle (default)
    static member inline md = prop.className "toggle-md"
    /// Small toggle
    static member inline sm = prop.className "toggle-sm"
    /// Extra small toggle
    static member inline xs = prop.className "toggle-xs"

[<Erase>]
type rating =
    /// Large size for rating
    static member inline lg = prop.className "rating-lg"
    /// Medium (default) size for rating
    static member inline md = prop.className "rating-md"
    /// Small size for rating
    static member inline sm = prop.className "rating-sm"
    /// Extra small size for rating
    static member inline xs = prop.className "rating-xs"

[<Erase>]
type swap =
    /// Activates the swap (no need for checkbox)
    static member inline active = prop.className "swap-active"
    /// Adds rotate effect to swap
    static member inline rotate = prop.className "swap-rotate"
    /// Adds flip effect to swap
    static member inline flip = prop.className "swap-flip"

[<Erase>]
type stats =
    /// Shows items horizontally (default)
    static member inline horizontal = prop.className "stats-horizontal"
    /// Shows items vertically
    static member inline vertical = prop.className "stats-vertical"

[<Erase>]
type toast =
    /// Align horizontally to the left
    static member inline start = prop.className "toast-start"
    /// Align horizontally to the center
    static member inline center = prop.className "toast-center"
    /// Align horizontally to the right (default)
    static member inline end' = prop.className "toast-end"
    /// Align vertically to top
    static member inline top = prop.className "toast-top"
    /// Align vertically to middle
    static member inline middle = prop.className "toast-middle"
    /// Align vertically to bottom (default)
    static member inline bottom = prop.className "toast-bottom"

[<Erase>]
type file =
    /// Adds border to file-input
    static member inline bordered = prop.className "file-input-bordered"
    /// Adds ghost style to checkbox
    static member inline ghost = prop.className "file-input-ghost"
    /// Adds `primary` color to file-input
    static member inline primary = prop.className "file-input-primary"
    /// Adds `secondary` color to file-input
    static member inline secondary = prop.className "file-input-secondary"
    /// Adds `accent` color to file-input
    static member inline accent = prop.className "file-input-accent"
    /// Adds `info` color to file-input
    static member inline info = prop.className "file-input-info"
    /// Adds `success` color to file-input
    static member inline success = prop.className "file-input-success"
    /// Adds `warning` color to file-input
    static member inline warning = prop.className "file-input-warning"
    /// Adds `error` color to file-input
    static member inline error = prop.className "file-input-error"
    /// Extra large size for file-input
    static member inline xl = prop.className "file-input-xl"
    /// Large size for file-input
    static member inline lg = prop.className "file-input-lg"
    /// Medium (default) size for file-input
    static member inline md = prop.className "file-input-md"
    /// Small size for file-input
    static member inline sm = prop.className "file-input-sm"
    /// Extra small size for file-input
    static member inline xs = prop.className "file-input-xs"

[<Erase>]
type chat =
    /// Aligns `chat` to left (required)
    static member inline start = prop.className "chat-start"
    /// Aligns `chat` to end (required)
    static member inline end' = prop.className "chat-end"

[<Erase>]
type chatBubble =
    /// Adds `primary` color to the chat bubble
    static member inline primary = prop.className "chat-bubble-primary"
    /// Adds `secondary` color to the chat bubble
    static member inline secondary = prop.className "chat-bubble-secondary"
    /// Adds `accent` color to the chat bubble
    static member inline accent = prop.className "chat-bubble-accent"
    /// Adds `info` color to the chat bubble
    static member inline info = prop.className "chat-bubble-info"
    /// Adds `success` color to the chat bubble
    static member inline success = prop.className "chat-bubble-success"
    /// Adds `warning` color to the chat bubble
    static member inline warning = prop.className "chat-bubble-warning"
    /// Adds `error` color to the chat bubble
    static member inline error = prop.className "chat-bubble-error"
    /// Adds `neutral` color to the chat bubble
    static member inline neutral = prop.className "chat-bubble-neutral"

[<Erase>]
type timeline =
    /// Snaps the icon to the start instead of middle
    static member inline snapIcon = prop.className "timeline-snap-icon"
    /// Shows the timeline vertically
    static member inline vertical = prop.className "timeline-vertical"
    /// Shows the timeline horizontally
    static member inline horizontal = prop.className "timeline-horizontal"
    /// Applies a box style to timeline-start or timeline-end
    static member inline box = prop.className "timeline-box"
    /// Forces all items on one side
    static member inline compact = prop.className "timeline-compact"

[<Erase>]
type theme =
    /// Set 'light' theme
    static member inline light = prop.custom("data-theme", "light")
    /// Set 'dark' theme
    static member inline dark = prop.custom("data-theme", "dark")
    /// Set 'cupcake' theme
    static member inline cupcake = prop.custom("data-theme", "cupcake")
    /// Set 'bumblebee' theme
    static member inline bumblebee = prop.custom("data-theme", "bumblebee")
    /// Set 'emerald' theme
    static member inline emerald = prop.custom("data-theme", "emerald")
    /// Set 'corporate' theme
    static member inline corporate = prop.custom("data-theme", "corporate")
    /// Set 'synthwave' theme
    static member inline synthwave = prop.custom("data-theme", "synthwave")
    /// Set 'retro' theme
    static member inline retro = prop.custom("data-theme", "retro")
    /// Set 'cyberpunk' theme
    static member inline cyberpunk = prop.custom("data-theme", "cyberpunk")
    /// Set 'valentine' theme
    static member inline valentine = prop.custom("data-theme", "valentine")
    /// Set 'halloween' theme
    static member inline halloween = prop.custom("data-theme", "halloween")
    /// Set 'garden' theme
    static member inline garden = prop.custom("data-theme", "garden")
    /// Set 'forest' theme
    static member inline forest = prop.custom("data-theme", "forest")
    /// Set 'aqua' theme
    static member inline aqua = prop.custom("data-theme", "aqua")
    /// Set 'lofi' theme
    static member inline lofi = prop.custom("data-theme", "lofi")
    /// Set 'pastel' theme
    static member inline pastel = prop.custom("data-theme", "pastel")
    /// Set 'fantasy' theme
    static member inline fantasy = prop.custom("data-theme", "fantasy")
    /// Set 'wireframe' theme
    static member inline wireframe = prop.custom("data-theme", "wireframe")
    /// Set 'black' theme
    static member inline black = prop.custom("data-theme", "black")
    /// Set 'luxury' theme
    static member inline luxury = prop.custom("data-theme", "luxury")
    /// Set 'dracula' theme
    static member inline dracula = prop.custom("data-theme", "dracula")
    /// Set 'cmyk' theme
    static member inline cmyk = prop.custom("data-theme", "cmyk")
    /// Set 'autumn' theme
    static member inline autumn = prop.custom("data-theme", "autumn")
    /// Set 'business' theme
    static member inline business = prop.custom("data-theme", "business")
    /// Set 'acid' theme
    static member inline acid = prop.custom("data-theme", "acid")
    /// Set 'lemonade' theme
    static member inline lemonade = prop.custom("data-theme", "lemonade")
    /// Set 'night' theme
    static member inline night = prop.custom("data-theme", "night")
    /// Set 'coffee' theme
    static member inline coffee = prop.custom("data-theme", "coffee")
    /// Set 'winter' theme
    static member inline winter = prop.custom("data-theme", "winter")
    static member inline dim = prop.custom("data-theme", "dim")
    static member inline nord = prop.custom("data-theme", "nord")
    static member inline sunset = prop.custom("data-theme", "sunset")
    /// Set custom theme
    static member inline custom (t:string) = prop.custom("data-theme", t)
    static member inline controller = prop.className "theme-controller"

[<Erase>]
type status =
    /// Adds `primary` color to status
    static member inline primary = prop.className "status-primary"
    /// Adds `secondary` color to status
    static member inline secondary = prop.className "status-secondary"
    /// Adds `accent` color to status
    static member inline accent = prop.className "status-accent"
    /// Adds `info` color to status
    static member inline info = prop.className "status-info"
    /// Adds `success` color to status
    static member inline success = prop.className "status-success"
    /// Adds `warning` color to status
    static member inline warning = prop.className "status-warning"
    /// Adds `error` color to status
    static member inline error = prop.className "status-error"
    /// Adds `neutral` color to status
    static member inline neutral = prop.className "status-neutral"
    /// Extra large size for status
    static member inline xl = prop.className "status-xl"
    /// Large size for status
    static member inline lg = prop.className "status-lg"
    /// Medium (default) size for status
    static member inline md = prop.className "status-md"
    /// Small size for status
    static member inline sm = prop.className "status-sm"
    /// Extra small size for status
    static member inline xs = prop.className "status-xs"

[<Erase>]
type dock =
    /// Makes the Dock Item look active
    static member inline active = prop.className "dock-active"
    /// Extra large size for dock
    static member inline xl = prop.className "dock-xl"
    /// Large size for dock
    static member inline lg = prop.className "dock-lg"
    /// Medium (default) size for dock
    static member inline md = prop.className "dock-md"
    /// Small size for dock
    static member inline sm = prop.className "dock-sm"
    /// Extra small size for dock
    static member inline xs = prop.className "dock-xs"

[<Erase>]
type list =
    /// For one of direct children of list-row to push it to the next line
    static member inline colWrap = prop.className "list-col-wrap"
    /// For one of direct children of list-row to make it fill the remaining space. By default, the second child of the list-row will fill the remaining space.
    static member inline colGrow = prop.className "list-col-grow"

[<Erase>]
type color =
    static member inline bgPrimary = prop.className "bg-primary"
    static member inline bgPrimaryContent = prop.className "bg-primary-content"
    static member inline bgSecondary = prop.className "bg-secondary"
    static member inline bgSecondaryContent = prop.className "bg-secondary-content"
    static member inline bgAccent = prop.className "bg-accent"
    static member inline bgAccentContent = prop.className "bg-accent-content"
    static member inline bgNeutral = prop.className "bg-neutral"
    static member inline bgNeutralContent = prop.className "bg-neutral-content"
    static member inline bgBase100 = prop.className "bg-base-100"
    static member inline bgBase200 = prop.className "bg-base-200"
    static member inline bgBase300 = prop.className "bg-base-300"
    static member inline bgBaseContent = prop.className "bg-base-content"
    static member inline bgInfo = prop.className "bg-info"
    static member inline bgSuccess = prop.className "bg-success"
    static member inline bgWarning = prop.className "bg-warning"
    static member inline bgError = prop.className "bg-error"
    static member inline textPrimary = prop.className "text-primary"
    static member inline textPrimaryContent = prop.className "text-primary-content"
    static member inline textSecondary = prop.className "text-secondary"
    static member inline textSecondaryContent = prop.className "text-secondary-content"
    static member inline textAccent = prop.className "text-accent"
    static member inline textAccentContent = prop.className "text-accent-content"
    static member inline textNeutral = prop.className "text-neutral"
    static member inline textNeutralContent = prop.className "text-neutral-content"
    static member inline textBase100 = prop.className "text-base-100"
    static member inline textBase200 = prop.className "text-base-200"
    static member inline textBase300 = prop.className "text-base-300"
    static member inline textBaseContent = prop.className "text-base-content"
    static member inline textInfo = prop.className "text-info"
    static member inline textSuccess = prop.className "text-success"
    static member inline textWarning = prop.className "text-warning"
    static member inline textError = prop.className "text-error"
    static member inline borderPrimary = prop.className "border-primary"
    static member inline borderPrimaryContent = prop.className "border-primary-content"
    static member inline borderSecondary = prop.className "border-secondary"
    static member inline borderSecondaryContent = prop.className "border-secondary-content"
    static member inline borderAccent = prop.className "border-accent"
    static member inline borderAccentContent = prop.className "border-accent-content"
    static member inline borderNeutral = prop.className "border-neutral"
    static member inline borderNeutralContent = prop.className "border-neutral-content"
    static member inline borderBase100 = prop.className "border-base-100"
    static member inline borderBase200 = prop.className "border-base-200"
    static member inline borderBase300 = prop.className "border-base-300"
    static member inline borderBaseContent = prop.className "border-base-content"
    static member inline borderInfo = prop.className "border-info"
    static member inline borderSuccess = prop.className "border-success"
    static member inline borderWarning = prop.className "border-warning"
    static member inline borderError = prop.className "border-error"
    static member inline fromPrimary = prop.className "from-primary"
    static member inline fromPrimaryContent = prop.className "from-primary-content"
    static member inline fromSecondary = prop.className "from-secondary"
    static member inline fromSecondaryContent = prop.className "from-secondary-content"
    static member inline fromAccent = prop.className "from-accent"
    static member inline fromAccentContent = prop.className "from-accent-content"
    static member inline fromNeutral = prop.className "from-neutral"
    static member inline fromNeutralContent = prop.className "from-neutral-content"
    static member inline fromBase100 = prop.className "from-base-100"
    static member inline fromBase200 = prop.className "from-base-200"
    static member inline fromBase300 = prop.className "from-base-300"
    static member inline fromBaseContent = prop.className "from-base-content"
    static member inline fromInfo = prop.className "from-info"
    static member inline fromSuccess = prop.className "from-success"
    static member inline fromWarning = prop.className "from-warning"
    static member inline fromError = prop.className "from-error"
    static member inline viaPrimary = prop.className "via-primary"
    static member inline viaPrimaryContent = prop.className "via-primary-content"
    static member inline viaSecondary = prop.className "via-secondary"
    static member inline viaSecondaryContent = prop.className "via-secondary-content"
    static member inline viaAccent = prop.className "via-accent"
    static member inline viaAccentContent = prop.className "via-accent-content"
    static member inline viaNeutral = prop.className "via-neutral"
    static member inline viaNeutralContent = prop.className "via-neutral-content"
    static member inline viaBase100 = prop.className "via-base-100"
    static member inline viaBase200 = prop.className "via-base-200"
    static member inline viaBase300 = prop.className "via-base-300"
    static member inline viaBaseContent = prop.className "via-base-content"
    static member inline viaInfo = prop.className "via-info"
    static member inline viaSuccess = prop.className "via-success"
    static member inline viaWarning = prop.className "via-warning"
    static member inline viaError = prop.className "via-error"
    static member inline toPrimary = prop.className "to-primary"
    static member inline toPrimaryContent = prop.className "to-primary-content"
    static member inline toSecondary = prop.className "to-secondary"
    static member inline toSecondaryContent = prop.className "to-secondary-content"
    static member inline toAccent = prop.className "to-accent"
    static member inline toAccentContent = prop.className "to-accent-content"
    static member inline toNeutral = prop.className "to-neutral"
    static member inline toNeutralContent = prop.className "to-neutral-content"
    static member inline toBase100 = prop.className "to-base-100"
    static member inline toBase200 = prop.className "to-base-200"
    static member inline toBase300 = prop.className "to-base-300"
    static member inline toBaseContent = prop.className "to-base-content"
    static member inline toInfo = prop.className "to-info"
    static member inline toSuccess = prop.className "to-success"
    static member inline toWarning = prop.className "to-warning"
    static member inline toError = prop.className "to-error"
    static member inline placeholderPrimary = prop.className "placeholder-primary"
    static member inline placeholderPrimaryContent = prop.className "placeholder-primary-content"
    static member inline placeholderSecondary = prop.className "placeholder-secondary"
    static member inline placeholderSecondaryContent = prop.className "placeholder-secondary-content"
    static member inline placeholderAccent = prop.className "placeholder-accent"
    static member inline placeholderAccentContent = prop.className "placeholder-accent-content"
    static member inline placeholderNeutral = prop.className "placeholder-neutral"
    static member inline placeholderNeutralContent = prop.className "placeholder-neutral-content"
    static member inline placeholderBase100 = prop.className "placeholder-base-100"
    static member inline placeholderBase200 = prop.className "placeholder-base-200"
    static member inline placeholderBase300 = prop.className "placeholder-base-300"
    static member inline placeholderBaseContent = prop.className "placeholder-base-content"
    static member inline placeholderInfo = prop.className "placeholder-info"
    static member inline placeholderSuccess = prop.className "placeholder-success"
    static member inline placeholderWarning = prop.className "placeholder-warning"
    static member inline placeholderError = prop.className "placeholder-error"
    static member inline dividePrimary = prop.className "divide-primary"
    static member inline dividePrimaryContent = prop.className "divide-primary-content"
    static member inline divideSecondary = prop.className "divide-secondary"
    static member inline divideSecondaryContent = prop.className "divide-secondary-content"
    static member inline divideAccent = prop.className "divide-accent"
    static member inline divideAccentContent = prop.className "divide-accent-content"
    static member inline divideNeutral = prop.className "divide-neutral"
    static member inline divideNeutralContent = prop.className "divide-neutral-content"
    static member inline divideBase100 = prop.className "divide-base-100"
    static member inline divideBase200 = prop.className "divide-base-200"
    static member inline divideBase300 = prop.className "divide-base-300"
    static member inline divideBaseContent = prop.className "divide-base-content"
    static member inline divideInfo = prop.className "divide-info"
    static member inline divideSuccess = prop.className "divide-success"
    static member inline divideWarning = prop.className "divide-warning"
    static member inline divideError = prop.className "divide-error"
    static member inline ringPrimary = prop.className "ring-primary"
    static member inline ringPrimaryContent = prop.className "ring-primary-content"
    static member inline ringSecondary = prop.className "ring-secondary"
    static member inline ringSecondaryContent = prop.className "ring-secondary-content"
    static member inline ringAccent = prop.className "ring-accent"
    static member inline ringAccentContent = prop.className "ring-accent-content"
    static member inline ringNeutral = prop.className "ring-neutral"
    static member inline ringNeutralContent = prop.className "ring-neutral-content"
    static member inline ringBase100 = prop.className "ring-base-100"
    static member inline ringBase200 = prop.className "ring-base-200"
    static member inline ringBase300 = prop.className "ring-base-300"
    static member inline ringBaseContent = prop.className "ring-base-content"
    static member inline ringInfo = prop.className "ring-info"
    static member inline ringSuccess = prop.className "ring-success"
    static member inline ringWarning = prop.className "ring-warning"
    static member inline ringError = prop.className "ring-error"
    static member inline ringOffsetPrimary = prop.className "ring-offset-primary"
    static member inline ringOffsetPrimaryContent = prop.className "ring-offset-primary-content"
    static member inline ringOffsetSecondary = prop.className "ring-offset-secondary"
    static member inline ringOffsetSecondaryContent = prop.className "ring-offset-secondary-content"
    static member inline ringOffsetAccent = prop.className "ring-offset-accent"
    static member inline ringOffsetAccentContent = prop.className "ring-offset-accent-content"
    static member inline ringOffsetNeutral = prop.className "ring-offset-neutral"
    static member inline ringOffsetNeutralContent = prop.className "ring-offset-neutral-content"
    static member inline ringOffsetBase100 = prop.className "ring-offset-base-100"
    static member inline ringOffsetBase200 = prop.className "ring-offset-base-200"
    static member inline ringOffsetBase300 = prop.className "ring-offset-base-300"
    static member inline ringOffsetBaseContent = prop.className "ring-offset-base-content"
    static member inline ringOffsetInfo = prop.className "ring-offset-info"
    static member inline ringOffsetSuccess = prop.className "ring-offset-success"
    static member inline ringOffsetWarning = prop.className "ring-offset-warning"
    static member inline ringOffsetError = prop.className "ring-offset-error"
    static member inline infoContent = prop.className "info-content"
    static member inline successContent = prop.className "success-content"
    static member inline warningContent = prop.className "warning-content"
    static member inline errorContent = prop.className "error-content"
