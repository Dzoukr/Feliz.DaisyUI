namespace Feliz.DaisyUI

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

[<Erase>]
type artboard =
    /// Adds shadow and radius. Puts items in center
    static member inline demo = prop.className "artboard-demo"
    /// Size 1
    static member inline phone1 = prop.className "phone-1"
    /// Size 2
    static member inline phone2 = prop.className "phone-2"
    /// Size 3
    static member inline phone3 = prop.className "phone-3"
    /// Size 4
    static member inline phone4 = prop.className "phone-4"
    /// Size 5
    static member inline phone5 = prop.className "phone-5"
    /// Size 6
    static member inline phone6 = prop.className "phone-6"
    /// Shows horizontal view
    static member inline horizontal = prop.className "horizontal"

[<Erase>]
type avatar =
    /// shows a green dot as online indicator
    static member inline online = prop.className "online"
    /// shows a gray dot as online indicator
    static member inline offline = prop.className "offline"
    /// to show some letters as avatar placeholder
    static member inline placeholder = prop.className "placeholder"
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
    /// badge with large size
    static member inline lg = prop.className "badge-lg"
    /// badge with medium size (default)
    static member inline md = prop.className "badge-md"
    /// badge with small size
    static member inline sm = prop.className "badge-sm"
    /// badge with extra small size
    static member inline xs = prop.className "badge-xs"

[<Erase>]
type button =
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
    /// Shows loading spinner
    static member inline loading = prop.className "loading"
    /// Disables click animation
    static member inline animation = prop.className "no-animation"

[<Erase>]
type card =
    /// Adds border
    static member inline bordered = prop.className "bordered"
    /// Less padding
    static member inline compact = prop.className "compact"
    /// The image in <figure> will be on to the side
    static member inline side = prop.className "card-side"
    /// The image in <figure> element will be the background
    static member inline full = prop.className "image-full"

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

[<Erase>]
type drawer =
    /// Makes drawer to open/close on mobile but will be always visible on desktop
    static member inline mobile = prop.className "drawer-mobile"
    /// puts drawer to the right
    static member inline end' = prop.className "drawer-end"

[<Erase>]
type dropdown =
    /// Aligns to end
    static member inline end' = prop.className "dropdown-end"
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
type kbd =
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
    /// Only show underline on hover
    static member inline hover = prop.className "link-hover"

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
    /// Applies `parallelogram` shape
    static member inline parallelogram = prop.className "mask mask-parallelogram"
    /// Applies `parallelogram` alternative shape
    static member inline parallelogram2 = prop.className "mask mask-parallelogram-2"
    /// Applies `parallelogram` alternative shape
    static member inline parallelogram3 = prop.className "mask mask-parallelogram-3"
    /// Applies `parallelogram` alternative shape
    static member inline parallelogram4 = prop.className "mask mask-parallelogram-4"
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
    /// Makes menu more compact
    static member inline compact = prop.className "menu-compact"
    /// Normal text size and normal spacing (default)
    static member inline normal = prop.className "menu-normal"
    /// Vertical menu (default)
    static member inline vertical = prop.className "menu-vertical"
    /// Horizontal menu
    static member inline horizontal = prop.className "menu-horizontal"

[<Erase>]
type menuItem =
    /// Set menu item as active
    static member inline active = prop.className "active"

[<Erase>]
type modal =
    /// Add/remove this class to open/close the modal using JS
    static member inline open' = prop.className "modal-open"

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
type steps =
    /// makes `steps` vertical
    static member inline vertical = prop.className "steps-vertical"

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
    static member inline boxed = prop.className "tabs-boxed"

[<Erase>]
type tab =
    /// For the active tab
    static member inline active = prop.className "tab-active"
    /// Adds bottom border to tab item
    static member inline bordered = prop.className "tab-bordered"
    /// Adds lifted style to tab item
    static member inline lifted = prop.className "tab-lifted"
    /// Shows tab in extra small size
    static member inline xs = prop.className "tab-xs"
    /// Shows tab in small size
    static member inline sm = prop.className "tab-sm"
    /// Shows tab in medium (default) size
    static member inline md = prop.className "tab-md"
    /// Shows tab in large size
    static member inline lg = prop.className "tab-lg"

[<Erase>]
type table =
    /// For the active tab
    static member inline zebra = prop.className "table-zebra"
    /// Make table more compact
    static member inline compact = prop.className "table-compact"
    /// For <tr> to highlight current row
    static member inline active = prop.className "active"
    /// For <tr> to highlight current row on hover
    static member inline hover = prop.className "hover"

[<Erase>]
type tooltip =
    /// Tooltip content
    static member inline text (t:string) = prop.custom("data-tip", t)
    /// Force open tooltip
    static member inline open' = prop.className "tooltip-open"
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

[<Erase>]
type checkbox =
    /// Adds `primary` to checkbox
    static member inline primary = prop.className "checkbox-primary"
    /// Adds `secondary` to checkbox
    static member inline secondary = prop.className "checkbox-secondary"
    /// Adds `accent` to checkbox
    static member inline accent = prop.className "checkbox-accent"
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
    /// Adds border to input
    static member inline bordered = prop.className "input-bordered"
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
    /// Large size for input
    static member inline lg = prop.className "input-lg"
    /// Medium (default) size for input
    static member inline md = prop.className "input-md"
    /// Small size for input
    static member inline sm = prop.className "input-sm"
    /// Extra small size for input
    static member inline xs = prop.className "input-xs"

[<Erase>]
type inputGroup =
    /// Large size for input-group wrapper
    static member inline lg = prop.className "input-group-lg"
    /// Medium (default) size for input-group wrapper
    static member inline md = prop.className "input-group-md"
    /// Small size for input-group wrapper
    static member inline sm = prop.className "input-group-sm"
    /// Extra small size for input-group wrapper
    static member inline xs = prop.className "input-group-xs"
    /// Vertical direction for input-group items
    static member inline vertical = prop.className "input-group-vertical"

[<Erase>]
type radio =
    /// Adds `primary` to radio
    static member inline primary = prop.className "radio-primary"
    /// Adds `secondary` to radio
    static member inline secondary = prop.className "radio-secondary"
    /// Adds `accent` to radio
    static member inline accent = prop.className "radio-accent"
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
    /// primary color
    static member inline primary = prop.className "range-primary"
    /// secondary color
    static member inline secondary = prop.className "range-secondary"
    /// accent color
    static member inline accent = prop.className "range-accent"
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
    /// Adds border to select
    static member inline bordered = prop.className "select-bordered"
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
    /// Adds border to textarea
    static member inline bordered = prop.className "textarea-bordered"
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

[<Erase>]
type mockupCode =
    /// Add prefix on a code line (used on PRE element level)
    static member inline prefix (prefix:string) = prop.custom("data-prefix", prefix)


[<Erase>]
type toggle =
    /// Adds `primary` to toggle
    static member inline primary = prop.className "toggle-primary"
    /// Adds `secondary` to toggle
    static member inline secondary = prop.className "toggle-secondary"
    /// Adds `accent` to toggle
    static member inline accent = prop.className "toggle-accent"
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
    /// Set custom theme
    static member inline custom (t:string) = prop.custom("data-theme", t)

[<Erase>]
type color =
    static member inline bgPrimary = prop.className "bg-primary"
    static member inline bgPrimaryFocus = prop.className "bg-primary-focus"
    static member inline bgPrimaryContent = prop.className "bg-primary-content"
    static member inline bgSecondary = prop.className "bg-secondary"
    static member inline bgSecondaryFocus = prop.className "bg-secondary-focus"
    static member inline bgSecondaryContent = prop.className "bg-secondary-content"
    static member inline bgAccent = prop.className "bg-accent"
    static member inline bgAccentFocus = prop.className "bg-accent-focus"
    static member inline bgAccentContent = prop.className "bg-accent-content"
    static member inline bgNeutral = prop.className "bg-neutral"
    static member inline bgNeutralFocus = prop.className "bg-neutral-focus"
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
    static member inline textPrimaryFocus = prop.className "text-primary-focus"
    static member inline textPrimaryContent = prop.className "text-primary-content"
    static member inline textSecondary = prop.className "text-secondary"
    static member inline textSecondaryFocus = prop.className "text-secondary-focus"
    static member inline textSecondaryContent = prop.className "text-secondary-content"
    static member inline textAccent = prop.className "text-accent"
    static member inline textAccentFocus = prop.className "text-accent-focus"
    static member inline textAccentContent = prop.className "text-accent-content"
    static member inline textNeutral = prop.className "text-neutral"
    static member inline textNeutralFocus = prop.className "text-neutral-focus"
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
    static member inline borderPrimaryFocus = prop.className "border-primary-focus"
    static member inline borderPrimaryContent = prop.className "border-primary-content"
    static member inline borderSecondary = prop.className "border-secondary"
    static member inline borderSecondaryFocus = prop.className "border-secondary-focus"
    static member inline borderSecondaryContent = prop.className "border-secondary-content"
    static member inline borderAccent = prop.className "border-accent"
    static member inline borderAccentFocus = prop.className "border-accent-focus"
    static member inline borderAccentContent = prop.className "border-accent-content"
    static member inline borderNeutral = prop.className "border-neutral"
    static member inline borderNeutralFocus = prop.className "border-neutral-focus"
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
    static member inline fromPrimaryFocus = prop.className "from-primary-focus"
    static member inline fromPrimaryContent = prop.className "from-primary-content"
    static member inline fromSecondary = prop.className "from-secondary"
    static member inline fromSecondaryFocus = prop.className "from-secondary-focus"
    static member inline fromSecondaryContent = prop.className "from-secondary-content"
    static member inline fromAccent = prop.className "from-accent"
    static member inline fromAccentFocus = prop.className "from-accent-focus"
    static member inline fromAccentContent = prop.className "from-accent-content"
    static member inline fromNeutral = prop.className "from-neutral"
    static member inline fromNeutralFocus = prop.className "from-neutral-focus"
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
    static member inline viaPrimaryFocus = prop.className "via-primary-focus"
    static member inline viaPrimaryContent = prop.className "via-primary-content"
    static member inline viaSecondary = prop.className "via-secondary"
    static member inline viaSecondaryFocus = prop.className "via-secondary-focus"
    static member inline viaSecondaryContent = prop.className "via-secondary-content"
    static member inline viaAccent = prop.className "via-accent"
    static member inline viaAccentFocus = prop.className "via-accent-focus"
    static member inline viaAccentContent = prop.className "via-accent-content"
    static member inline viaNeutral = prop.className "via-neutral"
    static member inline viaNeutralFocus = prop.className "via-neutral-focus"
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
    static member inline toPrimaryFocus = prop.className "to-primary-focus"
    static member inline toPrimaryContent = prop.className "to-primary-content"
    static member inline toSecondary = prop.className "to-secondary"
    static member inline toSecondaryFocus = prop.className "to-secondary-focus"
    static member inline toSecondaryContent = prop.className "to-secondary-content"
    static member inline toAccent = prop.className "to-accent"
    static member inline toAccentFocus = prop.className "to-accent-focus"
    static member inline toAccentContent = prop.className "to-accent-content"
    static member inline toNeutral = prop.className "to-neutral"
    static member inline toNeutralFocus = prop.className "to-neutral-focus"
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
    static member inline placeholderPrimaryFocus = prop.className "placeholder-primary-focus"
    static member inline placeholderPrimaryContent = prop.className "placeholder-primary-content"
    static member inline placeholderSecondary = prop.className "placeholder-secondary"
    static member inline placeholderSecondaryFocus = prop.className "placeholder-secondary-focus"
    static member inline placeholderSecondaryContent = prop.className "placeholder-secondary-content"
    static member inline placeholderAccent = prop.className "placeholder-accent"
    static member inline placeholderAccentFocus = prop.className "placeholder-accent-focus"
    static member inline placeholderAccentContent = prop.className "placeholder-accent-content"
    static member inline placeholderNeutral = prop.className "placeholder-neutral"
    static member inline placeholderNeutralFocus = prop.className "placeholder-neutral-focus"
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
    static member inline dividePrimaryFocus = prop.className "divide-primary-focus"
    static member inline dividePrimaryContent = prop.className "divide-primary-content"
    static member inline divideSecondary = prop.className "divide-secondary"
    static member inline divideSecondaryFocus = prop.className "divide-secondary-focus"
    static member inline divideSecondaryContent = prop.className "divide-secondary-content"
    static member inline divideAccent = prop.className "divide-accent"
    static member inline divideAccentFocus = prop.className "divide-accent-focus"
    static member inline divideAccentContent = prop.className "divide-accent-content"
    static member inline divideNeutral = prop.className "divide-neutral"
    static member inline divideNeutralFocus = prop.className "divide-neutral-focus"
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
    static member inline ringPrimaryFocus = prop.className "ring-primary-focus"
    static member inline ringPrimaryContent = prop.className "ring-primary-content"
    static member inline ringSecondary = prop.className "ring-secondary"
    static member inline ringSecondaryFocus = prop.className "ring-secondary-focus"
    static member inline ringSecondaryContent = prop.className "ring-secondary-content"
    static member inline ringAccent = prop.className "ring-accent"
    static member inline ringAccentFocus = prop.className "ring-accent-focus"
    static member inline ringAccentContent = prop.className "ring-accent-content"
    static member inline ringNeutral = prop.className "ring-neutral"
    static member inline ringNeutralFocus = prop.className "ring-neutral-focus"
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
    static member inline ringOffsetPrimaryFocus = prop.className "ring-offset-primary-focus"
    static member inline ringOffsetPrimaryContent = prop.className "ring-offset-primary-content"
    static member inline ringOffsetSecondary = prop.className "ring-offset-secondary"
    static member inline ringOffsetSecondaryFocus = prop.className "ring-offset-secondary-focus"
    static member inline ringOffsetSecondaryContent = prop.className "ring-offset-secondary-content"
    static member inline ringOffsetAccent = prop.className "ring-offset-accent"
    static member inline ringOffsetAccentFocus = prop.className "ring-offset-accent-focus"
    static member inline ringOffsetAccentContent = prop.className "ring-offset-accent-content"
    static member inline ringOffsetNeutral = prop.className "ring-offset-neutral"
    static member inline ringOffsetNeutralFocus = prop.className "ring-offset-neutral-focus"
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