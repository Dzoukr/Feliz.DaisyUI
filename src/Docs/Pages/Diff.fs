module Docs.Pages.Diff

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let ex1 =
    let example =
        Daisy.diff [
            prop.className "aspect-[16/9]"
            prop.children [
                Daisy.diffItem1 [
                    Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" ]
                ]
                Daisy.diffItem2 [
                    Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" ]
                ]
                Daisy.diffResizer []
            ]
        ]

    let code = """Daisy.diff [
    prop.className "aspect-[16/9]"
    prop.children [
        Daisy.diffItem1 [
            Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" ]
        ]
        Daisy.diffItem2 [
            Html.img [ prop.src "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" ]
        ]
        Daisy.diffResizer []
    ]
]"""
    let title = Html.text "Diff component shows a side-by-side comparison of two items."
    codedView title code example

let ex2 =
    let example =
        Daisy.diff [
            prop.className "aspect-[16/9]"
            prop.children [
                Daisy.diffItem1 [
                    Html.div [
                        prop.className "bg-primary text-primary-content text-9xl font-black grid place-content-center"
                        prop.text "F# rulez!"
                    ]
                ]
                Daisy.diffItem2 [
                    Html.div [
                        prop.className "bg-base-200 text-9xl font-black grid place-content-center"
                        prop.text "F# rulez!"
                    ]
                ]
                Daisy.diffResizer []
            ]
        ]

    let code = """Daisy.diff [
    prop.className "aspect-[16/9]"
    prop.children [
        Daisy.diffItem1 [
            Html.div [
                prop.className "bg-primary text-primary-content text-9xl font-black grid place-content-center"
                prop.text "F# rulez!"
            ]
        ]
        Daisy.diffItem2 [
            Html.div [
                prop.className "bg-base-200 text-9xl font-black grid place-content-center"
                prop.text "F# rulez!"
            ]
        ]
        Daisy.diffResizer []
    ]
]"""
    let title = Html.text "Diff text"
    codedView title code example


[<ReactComponent>]
let DiffView () =
    React.fragment [
        ex1
        ex2
    ]