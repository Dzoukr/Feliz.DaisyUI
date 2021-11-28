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

let linedMockupCode (code:string) =
    let lines = code.Split("\n")
    Daisy.mockupCode (
        lines |> Seq.mapi (fun i l ->
            Html.pre [
                mockupCode.prefix (i + 1 |> string)
                if l.Contains("// ") then color.textWarning
                prop.children [ Html.code l ]
            ]
        )
    )

let codedView (title:ReactElement) (code:string) example =
    Html.divClassed "mb-10" [
        Html.divClassed "description" [ title ]
        Html.divClassed "flex flex-row w-full" [
            Html.divClassed "grid flex-1 h-full" [
                linedMockupCode code
            ]
            Daisy.divider [ divider.vertical; prop.text "👉"; color.textNeutral; prop.className "after:bg-opacity-30 before:bg-opacity-30" ]
            Html.divClassed "grid flex-1" [ example ]
        ]
    ]