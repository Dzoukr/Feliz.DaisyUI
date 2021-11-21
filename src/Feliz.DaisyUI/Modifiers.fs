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
    /// Divide elements next to each other
    static member inline vertical = prop.className "divider-vertical"

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
    static member inline compact = prop.className "compact"

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