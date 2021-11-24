module Docs.Pages.Install

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators


[<ReactComponent>]
let InstallView () =
    React.fragment [
        Html.h2 [
            color.textPrimary
            ++ prop.className "my-6 text-5xl font-bold"
            prop.text "Installation"
        ]
    ]
