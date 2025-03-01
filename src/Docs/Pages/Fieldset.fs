module Docs.Pages.Fieldset

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let labelLegend =
    let example =
        Daisy.fieldset [
            prop.className "bg-base-200 border border-base-300 rounded-box p-4"

            prop.children [
                Daisy.fieldsetLegend "Page title"
                Daisy.input [ prop.placeholder "My awesome page" ]
                Daisy.fieldsetLabel "You can edit page title later on from settings"
            ]
        ]
        |> Html.div

    let code = """Daisy.fieldset [
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"

    prop.children [
        Daisy.fieldsetLegend "Page title"
        Daisy.input [ prop.placeholder "My awesome page" ]
        Daisy.fieldsetLabel "You can edit page title later on from settings"
    ]
]"""
    let title = Html.text "With label and legend"
    codedView title code example

let multiple =
    let example =
        Daisy.fieldset [
            prop.className "bg-base-200 border border-base-300 rounded-box p-4"

            prop.children [
                Daisy.fieldsetLegend "Page details"
                Daisy.fieldsetLabel "Title"
                Daisy.input [ prop.placeholder "My awesome page" ]
                Daisy.fieldsetLabel "Slug"
                Daisy.input [ prop.placeholder "my-awesome-page" ]
                Daisy.fieldsetLabel "Author"
                Daisy.input [ prop.placeholder "Name" ]
            ]
        ]
        |> Html.div

    let code = """Daisy.fieldset [
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"

    prop.children [
        Daisy.fieldsetLegend "Page details"
        Daisy.fieldsetLabel "Title"
        Daisy.input [ prop.placeholder "My awesome page" ]
        Daisy.fieldsetLabel "Slug"
        Daisy.input [ prop.placeholder "my-awesome-page" ]
        Daisy.fieldsetLabel "Author"
        Daisy.input [ prop.placeholder "Name" ]
    ]
]"""
    let title = Html.text "Multiple inputs"
    codedView title code example

let joined =
    let example =
        Daisy.fieldset [
            prop.className "bg-base-200 border border-base-300 rounded-box p-4"

            prop.children [
                Daisy.fieldsetLegend "Settings"
                Daisy.join [
                    Daisy.input [
                        join.item
                        prop.placeholder "Product name"
                    ]
                    Daisy.button.button [
                        join.item
                        prop.text "Save"
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.fieldset [
    prop.className "bg-base-200 border border-base-300 rounded-box p-4"

    prop.children [
        Daisy.fieldsetLegend "Settings"
        Daisy.join [
            Daisy.input [
                join.item
                prop.text "Product name"
            ]
            Daisy.button.button [
                join.item
                prop.text "Save"
            ]
        ]
    ]
]"""
    let title = Html.text "With joined items"
    codedView title code example

[<ReactComponent>]
let FieldsetView () =
    React.fragment [
        labelLegend
        multiple
        joined
    ]