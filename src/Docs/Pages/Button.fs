module Docs.Pages.Button

open Browser.Types
open Fable.Core
open Fable.Core.JS
open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.button.button [
            button.outline
            button.primary
            button.lg
            prop.onClick (fun _ -> Browser.Dom.window.alert("Oh, we have a rebel here!"))
            prop.text "Do NOT click on me!"
        ]
        |> Html.div

    let code = """Daisy.button.button [
    button.outline
    button.primary
    button.lg
    prop.text "Do NOT click on me!"
]"""
    let title = Html.text "Nicely styled buttons at your service."
    codedView title code example

let ex2 =
    let example =
        [ "neutral", button.neutral
          "primary", button.primary
          "secondary", button.secondary
          "accent", button.accent
          "ghost", button.ghost
          "link", button.link ]
        |> List.map (fun (n,c) ->
            Daisy.button.button [
                c
                prop.text n
            ]
        )
        |> (fun btns ->
            Html.div [
                prop.className "flex gap-2"
                prop.children [
                    Daisy.button.button [ prop.text "Default" ]
                    yield! btns
                ]
            ]
        )


    let code = """[ "neutral", button.neutral
  "primary", button.primary
  "secondary", button.secondary
  "accent", button.accent
  "ghost", button.ghost
  "link", button.link ]
|> List.map (fun (n,c) ->
    Daisy.button.button [
        c
        prop.text n
    ]
)
|> (fun btns ->
    Html.div [
        prop.className "flex gap-2"
        prop.children [
            Daisy.button.button [ prop.text "Default" ]
            yield! btns
        ]
    ]
)"""
    let title = Html.text "Colors are nice."
    codedView title code example

let ex3 =
    let example =
        Html.div [
            prop.className "p-20 bg-cover card bg-base-200"
            prop.style [ style.backgroundImage "url('https://picsum.photos/id/314/400/300')" ]
            prop.children [
                Daisy.button.button [
                    button.glass
                    button.lg
                    prop.onClick (fun _ -> Browser.Dom.window.alert("One keep clickin' right?"))
                    prop.text "Glassy is very classy"
                ]
            ]
        ]
        |> Html.div

    let code = """Html.div [
    prop.className "p-20 bg-cover card bg-base-200"
    prop.style [ style.backgroundImage "url('https://picsum.photos/id/314/400/300')" ]
    prop.children [
        Daisy.button.button [
            button.glass
            button.lg
            prop.text "Glassy is very classy"
        ]
    ]
]"""
    let title =
        Html.div [
            Html.text "See "
            Html.a [ prop.className "link"; prop.href "https://daisyui.com/components/button"; prop.text "original docs" ]
            Html.text " for more combinations."
        ]
    codedView title code example

[<ReactComponent>]
let ButtonView () =
    React.fragment [
        ex1
        ex2
        ex3
    ]