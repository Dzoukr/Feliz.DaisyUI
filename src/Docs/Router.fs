module Docs.Router

open Browser.Types
open Feliz.Router
open Fable.Core.JsInterop

type Page =
    | Install
    | Use
    | Themes
    | Colors
    | Accordion
    | Alert
    | Artboard
    | Avatar
    | Badge
    | Breadcrumbs
    | Button
    | ButtonGroup
    | Card
    | Carousel
    | ChatBubble
    | Collapse
    | Countdown
    | Diff
    | Divider
    | Drawer
    | Dropdown
    | Footer
    | Hero
    | Join
    | Indicator
    | Kbd
    | Link
    | Loading
    | Mask
    | Menu
    | Modal
    | Navbar
    | Pagination
    | Progress
    | RadialProgress
    | Skeleton
    | Stack
    | Stat
    | Steps
    | Swap
    | Tab
    | Table
    | ThemeController
    | Timeline
    | Toast
    | Tooltip
    | FileInput
    | FormCheckbox
    | FormInput
    | FormRadio
    | FormRange
    | FormSelect
    | FormTextarea
    | FormToggle
    | MockupCode
    | MockupPhone
    | MockupWindow
    | Rating

[<RequireQualifiedAccess>]
module Page =
    let defaultPage = Page.Install

    let parseFromUrlSegments = function
        | [ "use" ] -> Page.Use
        | [ "themes" ] -> Page.Themes
        | [ "colors" ] -> Page.Colors
        | [ "alert" ] -> Page.Alert
        | [ "accordion" ] -> Page.Accordion
        | [ "artboard" ] -> Page.Artboard
        | [ "avatar" ] -> Page.Avatar
        | [ "badge" ] -> Page.Badge
        | [ "breadcrumbs" ] -> Page.Breadcrumbs
        | [ "button" ] -> Page.Button
        | [ "buttongroup" ] -> Page.ButtonGroup
        | [ "card" ] -> Page.Card
        | [ "carousel" ] -> Page.Carousel
        | [ "chatbubble" ] -> Page.ChatBubble
        | [ "collapse" ] -> Page.Collapse
        | [ "countdown" ] -> Page.Countdown
        | [ "diff" ] -> Page.Diff
        | [ "divider" ] -> Page.Divider
        | [ "drawer" ] -> Page.Drawer
        | [ "dropdown" ] -> Page.Dropdown
        | [ "footer" ] -> Page.Footer
        | [ "hero" ] -> Page.Hero
        | [ "indicator" ] -> Page.Indicator
        | [ "join" ] -> Page.Join
        | [ "kbd" ] -> Page.Kbd
        | [ "link" ] -> Page.Link
        | [ "loading" ] -> Page.Loading
        | [ "mask" ] -> Page.Mask
        | [ "menu" ] -> Page.Menu
        | [ "modal" ] -> Page.Modal
        | [ "navbar" ] -> Page.Navbar
        | [ "pagination" ] -> Page.Pagination
        | [ "progress" ] -> Page.Progress
        | [ "radialprogress" ] -> Page.RadialProgress
        | [ "skeleton" ] -> Page.Skeleton
        | [ "stack" ] -> Page.Stack
        | [ "stat" ] -> Page.Stat
        | [ "steps" ] -> Page.Steps
        | [ "swap" ] -> Page.Swap
        | [ "tab" ] -> Page.Tab
        | [ "table" ] -> Page.Table
        | [ "themecontroller" ] -> Page.ThemeController
        | [ "timeline" ] -> Page.Timeline
        | [ "toast" ] -> Page.Toast
        | [ "tooltip" ] -> Page.Tooltip
        | [ "fileinput" ] -> Page.FileInput
        | [ "formcheckbox" ] -> Page.FormCheckbox
        | [ "forminput" ] -> Page.FormInput
        | [ "formradio" ] -> Page.FormRadio
        | [ "formrange" ] -> Page.FormRange
        | [ "formselect" ] -> Page.FormSelect
        | [ "formtextarea" ] -> Page.FormTextarea
        | [ "formtoggle" ] -> Page.FormToggle
        | [ "mockupcode" ] -> Page.MockupCode
        | [ "mockupphone" ] -> Page.MockupPhone
        | [ "mockupwindow" ] -> Page.MockupWindow
        | [ "rating" ] -> Page.Rating
        | [ ] -> Page.Install
        | _ -> defaultPage

    let noQueryString segments : string list * (string * string) list = segments, []

    let toUrlSegments = function
        | Page.Install -> [ ] |> noQueryString
        | Page.Use -> [ "use" ] |> noQueryString
        | Page.Themes -> [ "themes" ] |> noQueryString
        | Page.Colors -> [ "colors" ] |> noQueryString
        | Page.Accordion -> [ "accordion" ] |> noQueryString
        | Page.Alert -> [ "alert" ] |> noQueryString
        | Page.Artboard -> [ "artboard" ] |> noQueryString
        | Page.Avatar -> [ "avatar" ] |> noQueryString
        | Page.Badge -> [ "badge" ] |> noQueryString
        | Page.Breadcrumbs -> [ "breadcrumbs" ] |> noQueryString
        | Page.Button -> [ "button" ] |> noQueryString
        | Page.ButtonGroup -> [ "buttongroup" ] |> noQueryString
        | Page.Card -> [ "card" ] |> noQueryString
        | Page.Carousel -> [ "carousel" ] |> noQueryString
        | Page.Collapse -> [ "collapse" ] |> noQueryString
        | Page.ChatBubble -> [ "chatbubble" ] |> noQueryString
        | Page.Countdown -> [ "countdown" ] |> noQueryString
        | Page.Diff -> [ "diff" ] |> noQueryString
        | Page.Divider -> [ "divider" ] |> noQueryString
        | Page.Drawer -> [ "drawer" ] |> noQueryString
        | Page.Dropdown -> [ "dropdown" ] |> noQueryString
        | Page.Footer -> [ "footer" ] |> noQueryString
        | Page.Hero -> [ "hero" ] |> noQueryString
        | Page.Indicator -> [ "indicator" ] |> noQueryString
        | Page.Join -> [ "join" ] |> noQueryString
        | Page.Kbd -> [ "kbd" ] |> noQueryString
        | Page.Link -> [ "link" ] |> noQueryString
        | Page.Loading -> [ "loading" ] |> noQueryString
        | Page.Mask -> [ "mask" ] |> noQueryString
        | Page.Menu -> [ "menu" ] |> noQueryString
        | Page.Modal -> [ "modal" ] |> noQueryString
        | Page.Navbar -> [ "navbar" ] |> noQueryString
        | Page.Pagination -> [ "pagination" ] |> noQueryString
        | Page.Progress -> [ "progress" ] |> noQueryString
        | Page.RadialProgress -> [ "radialprogress" ] |> noQueryString
        | Page.Skeleton -> [ "skeleton" ] |> noQueryString
        | Page.Stack -> [ "stack" ] |> noQueryString
        | Page.Stat -> [ "stat" ] |> noQueryString
        | Page.Steps -> [ "steps" ] |> noQueryString
        | Page.Swap -> [ "swap" ] |> noQueryString
        | Page.Tab -> [ "tab" ] |> noQueryString
        | Page.Table -> [ "table" ] |> noQueryString
        | Page.ThemeController -> [ "themecontroller" ] |> noQueryString
        | Page.Timeline -> [ "timeline" ] |> noQueryString
        | Page.Toast -> [ "toast" ] |> noQueryString
        | Page.Tooltip -> [ "tooltip" ] |> noQueryString
        | Page.FileInput -> [ "fileinput" ] |> noQueryString
        | Page.FormCheckbox -> [ "formcheckbox" ] |> noQueryString
        | Page.FormInput -> [ "forminput" ] |> noQueryString
        | Page.FormRadio -> [ "formradio" ] |> noQueryString
        | Page.FormRange -> [ "formrange" ] |> noQueryString
        | Page.FormSelect -> [ "formselect" ] |> noQueryString
        | Page.FormTextarea -> [ "formtextarea" ] |> noQueryString
        | Page.FormToggle -> [ "formtoggle" ] |> noQueryString
        | Page.MockupCode -> [ "mockupcode" ] |> noQueryString
        | Page.MockupPhone -> [ "mockupphone" ] |> noQueryString
        | Page.MockupWindow -> [ "mockupwindow" ] |> noQueryString
        | Page.Rating -> [ "rating" ] |> noQueryString

[<RequireQualifiedAccess>]
module Router =
    let goToUrl (e:MouseEvent) =
        e.preventDefault()
        let href : string = !!e.currentTarget?attributes?href?value
        Router.navigate href

    let navigatePage (p:Page) = p |> Page.toUrlSegments |> Router.navigate

[<RequireQualifiedAccess>]
module Cmd =
    let navigatePage (p:Page) = p |> Page.toUrlSegments |> Cmd.navigate