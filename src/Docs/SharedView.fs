module Docs.SharedView

open Feliz
open Router

type prop
    with
        static member inline href (p:Page) = prop.href (p |> Page.toUrlSegments |> Router.formatPath)

type Html
    with
        static member inline a (text:string, p:Page) =
            Html.a [
                prop.href p
                prop.onClick Router.goToUrl
                prop.text text
            ]
        static member inline divClassed (cn:string) (elm:ReactElement list) =
            Html.div [
                prop.className cn
                prop.children elm
            ]

