module Docs.Pages.Breadcrumbs

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.breadcrumbs [
            Html.ul [
                Html.li "New project"
                Html.li ".NET"
                Html.li "F# as always"
            ]
        ]
        |> Html.div

    let code = """Daisy.breadcrumbs [
    Html.ul [
        Html.li "New project"
        Html.li ".NET"
        Html.li "F# as always"
    ]
]"""
    let title = Html.text "Turn ul/li into beautiful breadcrumbs."
    codedView title code example


[<ReactComponent>]
let BreadcrumbsView () =
    React.fragment [
        ex1
    ]