module Docs.Pages.Collapse

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Daisy.collapse [
            prop.tabIndex 0
            prop.children [
                Daisy.collapseTitle "I open with focus"
                Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]
            ]
        ]
        |> Html.div

    let code = """Daisy.collapse [
    prop.tabIndex 0
    prop.children [
        Daisy.collapseTitle "I open with focus"
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]
    ]
]"""
    let title = Html.text "Basic"
    codedView title code example

let arrow =
    let example =
        Daisy.collapse [
            prop.tabIndex 0
            collapse.arrow
            prop.className "border"
            prop.children [
                Daisy.collapseTitle "I open with focus"
                Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]
            ]
        ]
        |> Html.div

    let code = """Daisy.collapse [
    prop.tabIndex 0
    collapse.arrow
    prop.className "border"
    prop.children [
        Daisy.collapseTitle "I open with focus"
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes. Adding a tabIndex will allow focus."]
    ]
]"""
    let title = Html.text "Arrow"
    codedView title code example

let withCheckbox =
    let example =
        Daisy.collapse [
            collapse.plus
            prop.className "border"
            prop.children [
                Html.input [prop.type' "checkbox"]
                Daisy.collapseTitle "I open with a checkbox"
                Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes."]
            ]
        ]
        |> Html.div

    let code = """Daisy.collapse [
    collapse.arrow
    prop.className "border"
    prop.children [
        Html.input [prop.type' "checkbox"]
        Daisy.collapseTitle "I open with a checkbox"
        Daisy.collapseContent [Html.p "Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using collapse-open and collapse-close classes."]
    ]
]"""
    let title = Html.text "With checkbox"
    codedView title code example

[<ReactComponent>]
let CollapseView () =
    React.fragment [
        basic
        arrow
        withCheckbox
    ]