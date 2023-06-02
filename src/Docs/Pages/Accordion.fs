module Docs.Pages.Accordion

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Html.div [
            Daisy.collapse [
                color.bgBase200
                prop.className "mb-2"
                prop.children [
                    Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]
                    Daisy.collapseTitle [
                        prop.className "text-xl"
                        prop.text "Click to open this one and close others"
                    ]
                    Daisy.collapseContent [
                        Html.p "Hello"
                    ]
                ]
            ]
            Daisy.collapse [
                color.bgBase200
                prop.children [
                    Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]
                    Daisy.collapseTitle [
                        prop.className "text-xl"
                        prop.text "Click to open this one and close others"
                    ]
                    Daisy.collapseContent [
                        Html.p "Hello"
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.collapse [
        color.bgBase200
        prop.className "mb-2"
        prop.children [
            Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]
            Daisy.collapseTitle [
                prop.className "text-xl"
                prop.text "Click to open this one and close others"
            ]
            Daisy.collapseContent [
                Html.p "Hello"
            ]
        ]
    ]
    Daisy.collapse [
        color.bgBase200
        prop.children [
            Html.input [ prop.type'.radio; prop.isChecked true; prop.name "my-accordion" ]
            Daisy.collapseTitle [
                prop.className "text-xl"
                prop.text "Click to open this one and close others"
            ]
            Daisy.collapseContent [
                Html.p "Hello"
            ]
        ]
    ]
]"""
    let title = Html.text "Accordion is cool and easy to use"
    codedView title code example



[<ReactComponent>]
let AccordionView () =
    React.fragment [
        Html.divClassed "flex flex-col gap-2" [
            Daisy.alert "Accordion uses the same style as the collapse component but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input."
            Daisy.alert "All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set."
        ]
        ex1
    ]