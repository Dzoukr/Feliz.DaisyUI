module Docs.Pages.Skeleton

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.skeleton [
            prop.className "w-32 h-32"
        ]

    let code = """Daisy.skeleton [
    prop.className "w-32 h-32"
]"""
    let title = Html.text "Skeleton is a component that can be used to show a loading state of a component."
    codedView title code example

let ex2 =
    let example =
        Html.div [
            prop.className "flex flex-col gap-4 w-52"
            prop.children [
                Daisy.skeleton [ prop.className "h-32 w-full" ]
                Daisy.skeleton [ prop.className "h-4 w-28" ]
                Daisy.skeleton [ prop.className "h-4 w-full" ]
                Daisy.skeleton [ prop.className "h-4 w-full" ]
            ]
        ]

    let code = """Html.div [
    prop.className "flex flex-col gap-4 w-52"
    prop.children [
        Daisy.skeleton [ prop.className "h-32 w-full" ]
        Daisy.skeleton [ prop.className "h-4 w-28" ]
        Daisy.skeleton [ prop.className "h-4 w-full" ]
        Daisy.skeleton [ prop.className "h-4 w-full" ]
    ]
]"""
    let title = Html.text "Skeleton - rectangle with content"
    codedView title code example


[<ReactComponent>]
let SkeletonView () =
    React.fragment [
        ex1
        ex2
    ]