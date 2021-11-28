module Docs.Pages.Install

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

[<ReactComponent>]
let InstallView () =
    React.fragment [
        Html.divClassed "description" [
            Html.text "First of all you need to follow the "
            Html.a [ prop.className "link"; prop.href "https://daisyui.com/docs/install"; prop.text "DaisyUI installation steps" ]
            Html.text " and then proceed with installing "
            Html.a [ prop.className "link"; prop.href "https://www.nuget.org/packages/Feliz.DaisyUI"; prop.text "Feliz.DaisyUI NuGet" ]
            Html.text "."
        ]
        Html.divClassed "description" [ Html.text "Using NuGet package command" ]
        Html.divClassed "max-w-xl" [
            Daisy.mockupCode [
                Html.pre [
                    mockupCode.prefix "$"
                    prop.children [ Html.code "Install-Package Feliz.DaisyUI" ]
                ]
            ]
        ]
        Html.divClassed "description" [ Html.text "or Paket" ]
        Html.divClassed "max-w-xl" [
            Daisy.mockupCode [
                Html.pre [
                    mockupCode.prefix "$"
                    prop.children [ Html.code "paket add Feliz.DaisyUI" ]
                ]
            ]
        ]
    ]
