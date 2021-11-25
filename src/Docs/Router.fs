module Docs.Router

open Browser.Types
open Feliz.Router
open Fable.Core.JsInterop

type Page =
    | Install
    | Themes
    | Colors
    | Alert

[<RequireQualifiedAccess>]
module Page =
    let defaultPage = Page.Install

    let parseFromUrlSegments = function
        | [ "themes" ] -> Page.Themes
        | [ "colors" ] -> Page.Colors
        | [ "alert" ] -> Page.Alert
        | [ ] -> Page.Install
        | _ -> defaultPage

    let noQueryString segments : string list * (string * string) list = segments, []

    let toUrlSegments = function
        | Page.Install -> [ ] |> noQueryString
        | Page.Themes -> [ "themes" ] |> noQueryString
        | Page.Colors -> [ "colors" ] |> noQueryString
        | Page.Alert -> [ "alert" ] |> noQueryString

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