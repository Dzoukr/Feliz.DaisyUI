module Docs.Pages.Loading

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Html.div [
            Daisy.loading [ loading.spinner; loading.xs ]
            Daisy.loading [ loading.spinner; loading.sm ]
            Daisy.loading [ loading.spinner; loading.md ]
            Daisy.loading [ loading.spinner; loading.lg ]
        ]

    let code = """Html.div [
    Daisy.loading [ loading.spinner; loading.xs ]
    Daisy.loading [ loading.spinner; loading.sm ]
    Daisy.loading [ loading.spinner; loading.md ]
    Daisy.loading [ loading.spinner; loading.lg ]
]"""
    let title = Html.text "Use Loading for cool spinners with different sizes"
    codedView title code example

let ex2 =
    let example =
        Html.div [
            Daisy.loading [ loading.dots ]
            Daisy.loading [ loading.ring ]
            Daisy.loading [ loading.ball ]
            Daisy.loading [ loading.bars ]
            Daisy.loading [ loading.infinity ]
        ]

    let code = """Html.div [
    Daisy.loading [ loading.dots ]
    Daisy.loading [ loading.ring ]
    Daisy.loading [ loading.ball ]
    Daisy.loading [ loading.bars ]
    Daisy.loading [ loading.infinity ]
]"""
    let title = Html.text "And many others"
    codedView title code example

let ex3 =
    let example =
        Html.div [
            Daisy.loading [ loading.dots; color.textAccent ]
            Daisy.loading [ loading.ring; color.textWarning ]
            Daisy.loading [ loading.ball; color.textSecondary ]
            Daisy.loading [ loading.bars; color.textSuccess ]
            Daisy.loading [ loading.infinity; color.textError ]
        ]

    let code = """Html.div [
    Daisy.loading [ loading.dots; color.textAccent ]
    Daisy.loading [ loading.ring; color.textWarning ]
    Daisy.loading [ loading.ball; color.textSecondary ]
    Daisy.loading [ loading.bars; color.textSuccess ]
    Daisy.loading [ loading.infinity; color.textError ]
]"""
    let title = Html.text "Fancy colors? Oh yeah!"
    codedView title code example



[<ReactComponent>]
let LoadingView () =
    React.fragment [
        ex1
        ex2
        ex3
    ]