module Docs.Pages.Label

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let input' =
    let example =
        Daisy.containerWithLabel.input [
            Daisy.label "https://"
            Html.input [ prop.placeholder "URL" ]
        ]

    let code = """Daisy.containerWithLabel.input [
    Daisy.label "https://"
    Html.input [ prop.placeholder "URL" ]
]"""
    let title = Html.text "Label for input"
    codedView title code example

let inputEnd =
    let example =
        Daisy.containerWithLabel.input [
            Html.input  [ prop.placeholder "domain name" ]
            Daisy.label ".com"
        ]

    let code = """Daisy.containerWithLabel.input [
    Html.input [ prop.placeholder "domain name" ]
    Daisy.label ".com"
] """
    let title = Html.text "Label for input at the end"
    codedView title code example

let select =
    let example =
        Daisy.containerWithLabel.select [
            Daisy.label "Type"
            Html.select [
                Html.option "Personal"
                Html.option "Business"
            ]
        ]

    let code = """Daisy.containerWithLabel.select [
    Daisy.label "Type"
    Html.select [
        Html.option "Personal"
        Html.option "Business"
    ]
]"""
    let title = Html.text "Label for select"
    codedView title code example

let floating =
    let example =
        Daisy.floatingLabel [
            Html.span "Your email"
            Daisy.input [ prop.placeholder "mail@site.com" ]
        ]

    let code = """Daisy.floatingLabel [
    Html.span "Your email"
    Daisy.input [ prop.placeholder "mail@site.com" ]
]"""
    let title = Html.text "Floating label"
    codedView title code example

let floatingSizes =
    let example =
        Html.div [
            prop.className "flex flex-col gap-4"

            prop.children [
                Daisy.floatingLabel [
                    Daisy.input [ input.xs; prop.placeholder "xs" ]
                    Html.span "xs"
                ]
                Daisy.floatingLabel [
                    Daisy.input [ input.sm; prop.placeholder "sm" ]
                    Html.span "sm"
                ]
                Daisy.floatingLabel [
                    Daisy.input [ input.md; prop.placeholder "md" ]
                    Html.span "md"
                ]
                Daisy.floatingLabel [
                    Daisy.input [ input.lg; prop.placeholder "lg" ]
                    Html.span "lg"
                ]
                Daisy.floatingLabel [
                    Daisy.input [ input.xl; prop.placeholder "xl" ]
                    Html.span "xl"
                ]
            ]
        ]
        |> Html.div

    let code = """Html.div [
    prop.className "flex flex-col gap-4"

    prop.children [
        Daisy.floatingLabel [
            Daisy.input [ input.xs; prop.placeholder "xs" ]
            Html.span "xs"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.sm; prop.placeholder "sm" ]
            Html.span "sm"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.md; prop.placeholder "md" ]
            Html.span "md"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.lg; prop.placeholder "lg" ]
            Html.span "xl"
        ]
        Daisy.floatingLabel [
            Daisy.input [ input.xl; prop.placeholder "xl" ]
            Html.span "xl"
        ]
    ]
]"""
    let title = Html.text "Floating label with different sizes"
    codedView title code example

[<ReactComponent>]
let LabelView () =
    React.fragment [
        input'
        inputEnd
        select
        floating
        floatingSizes
    ]