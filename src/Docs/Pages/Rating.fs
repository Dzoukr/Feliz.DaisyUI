module Docs.Pages.Rating

open Feliz
open Elmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let big =
    let example =
        Html.div [
            Daisy.rating [
                rating.lg
                prop.children [
                    Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
                    Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
                    Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
                    Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]
                    Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
                ]
            ]
        ]

    let code = """Daisy.rating [
    rating.lg
    prop.children [
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
    ]
]"""
    let title = Html.text "Large stars"
    codedView title code example

let small =
    let example =
        Html.div [
            Daisy.rating [
                prop.className "gap-1"
                ++ rating.sm
                prop.children [
                    Html.input [ prop.type'.radio; prop.name "rating-2"; color.bgError ++ mask.heart ]
                    Html.input [ prop.type'.radio; prop.name "rating-2"; color.bgError ++ mask.heart; prop.defaultChecked true ]
                    Html.input [ prop.type'.radio; prop.name "rating-2"; color.bgError ++ mask.heart ]
                    Html.input [ prop.type'.radio; prop.name "rating-2"; color.bgError ++ mask.heart ]
                    Html.input [ prop.type'.radio; prop.name "rating-2"; color.bgError ++ mask.heart ]
                ]
            ]
        ]

    let code = """Daisy.rating [
    prop.className "gap-1"
    ++ rating.sm
    prop.children [
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star; prop.defaultChecked true ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
        Html.input [ prop.type'.radio; prop.name "rating-1"; color.bgWarning ++ mask.star ]
    ]
]"""
    let title = Html.text "Small hearts"
    codedView title code example



[<ReactComponent>]
let RatingView () =
    React.fragment [
        big
        small
    ]