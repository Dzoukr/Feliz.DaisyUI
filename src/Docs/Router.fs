module Docs.Router

open Browser.Types
open Feliz.Router
open Fable.Core.JsInterop

type Page =
    | Install
    | Use
    | Themes
    | Colors
    | Alert
    | Artboard
    | Avatar
    | Badge
    | Breadcrumbs
    | Button
    | ButtonGroup
    | Card
    | Carousel
    | Collapse
    | Countdown
    | Divider
    | Drawer
    | Dropdown
    | Footer
    | Hero
    | Indicator
    | Kbd
    | Link
    | Mask
    | Menu
    | Modal
    | Navbar
    | Pagination
    | Progress
    | Stack
    | Stat
    | Steps
    | Tab
    | Table
    | Tooltip
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

[<RequireQualifiedAccess>]
module Page =
    let defaultPage = Page.Install

    let parseFromUrlSegments = function
        | [ "use" ] -> Page.Use
        | [ "themes" ] -> Page.Themes
        | [ "colors" ] -> Page.Colors
        | [ "alert" ] -> Page.Alert
        | [ "artboard" ] -> Page.Artboard
        | [ "avatar" ] -> Page.Avatar
        | [ "badge" ] -> Page.Badge
        | [ "breadcrumbs" ] -> Page.Breadcrumbs
        | [ "button" ] -> Page.Button
        | [ "buttongroup" ] -> Page.ButtonGroup
        | [ "card" ] -> Page.Card
        | [ "carousel" ] -> Page.Carousel
        | [ "collapse" ] -> Page.Collapse
        | [ "countdown" ] -> Page.Countdown
        | [ "divider" ] -> Page.Divider
        | [ "drawer" ] -> Page.Drawer
        | [ "dropdown" ] -> Page.Dropdown
        | [ "footer" ] -> Page.Footer
        | [ "hero" ] -> Page.Hero
        | [ "indicator" ] -> Page.Indicator
        | [ "kbd" ] -> Page.Kbd
        | [ "link" ] -> Page.Link
        | [ "mask" ] -> Page.Mask
        | [ "menu" ] -> Page.Menu
        | [ "modal" ] -> Page.Modal
        | [ "navbar" ] -> Page.Navbar
        | [ "pagination" ] -> Page.Pagination
        | [ "progress" ] -> Page.Progress
        | [ "stack" ] -> Page.Stack
        | [ "stat" ] -> Page.Stat
        | [ "steps" ] -> Page.Steps
        | [ "tab" ] -> Page.Tab
        | [ "table" ] -> Page.Table
        | [ "tooltip" ] -> Page.Tooltip
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

        | [ ] -> Page.Install
        | _ -> defaultPage

    let noQueryString segments : string list * (string * string) list = segments, []

    let toUrlSegments = function
        | Page.Install -> [ ] |> noQueryString
        | Page.Use -> [ "use" ] |> noQueryString
        | Page.Themes -> [ "themes" ] |> noQueryString
        | Page.Colors -> [ "colors" ] |> noQueryString
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
        | Page.Countdown -> [ "countdown" ] |> noQueryString
        | Page.Divider -> [ "divider" ] |> noQueryString
        | Page.Drawer -> [ "drawer" ] |> noQueryString
        | Page.Dropdown -> [ "dropdown" ] |> noQueryString
        | Page.Footer -> [ "footer" ] |> noQueryString
        | Page.Hero -> [ "hero" ] |> noQueryString
        | Page.Indicator -> [ "indicator" ] |> noQueryString
        | Page.Kbd -> [ "kbd" ] |> noQueryString
        | Page.Link -> [ "link" ] |> noQueryString
        | Page.Mask -> [ "mask" ] |> noQueryString
        | Page.Menu -> [ "menu" ] |> noQueryString
        | Page.Modal -> [ "modal" ] |> noQueryString
        | Page.Navbar -> [ "navbar" ] |> noQueryString
        | Page.Pagination -> [ "pagination" ] |> noQueryString
        | Page.Progress -> [ "progress" ] |> noQueryString
        | Page.Stack -> [ "stack" ] |> noQueryString
        | Page.Stat -> [ "stat" ] |> noQueryString
        | Page.Steps -> [ "steps" ] |> noQueryString
        | Page.Tab -> [ "tab" ] |> noQueryString
        | Page.Table -> [ "table" ] |> noQueryString
        | Page.Tooltip -> [ "tooltip" ] |> noQueryString
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