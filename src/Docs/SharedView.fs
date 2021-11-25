module Docs.SharedView

open Feliz
open Router
open Feliz.DaisyUI

type prop
    with
        static member inline href (p:Page) = prop.href (p |> Page.toUrlSegments |> Router.format)

type Html
    with
        static member inline a (text:string, p:Page) =
            Html.a [
                prop.href p
                prop.onClick Router.goToUrl
                prop.text text
            ]
        static member inline divClassed (cn:string) (elm:ReactElement list) =
            Html.div [
                prop.className cn
                prop.children elm
            ]

let codedView (title:ReactElement) (code:string) example =
    let lines = code.Split("\n")
    Html.divClassed "mb-10" [
        Html.divClassed "description" [ title ]
        Html.divClassed "flex lg:flex-row w-full" [
            Html.divClassed "w-full" [
                Daisy.mockupCode (
                    lines |> Seq.mapi (fun i l ->
                        Html.pre [
                            mockupCode.prefix (i + 1 |> string)
                            if l.Contains("// ") then color.textWarning
                            prop.children [ Html.code l ]
                        ]
                    )
                )
            ]
            Daisy.divider [ divider.vertical; prop.text "👉"; color.textNeutral; prop.className "after:bg-opacity-30 before:bg-opacity-30" ]
            Html.divClassed "w-full" [ example ]
        ]
    ]