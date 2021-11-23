module Docs.Pages.Generator

open Feliz
open Docs.SharedView
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI

type BlockType = Utility | Component

type Block = {
    ClassName : string
    Type : BlockType
    Comment : string
}

let parse (s:string) =
    let parts = s.Split("	")
    if parts.Length = 3 then
        Some { ClassName = parts.[0]; Type = (if parts.[1] = "Component" then Component else Utility); Comment = parts.[2] }
    else None

let writeComponent (element:string) (b:Block) =
    $"""
    static member inline {b.ClassName} props = Elm.props Html.{element} props "{b.ClassName}"
    static member inline {b.ClassName} children = Elm.children Html.{element} children "{b.ClassName}"
    static member inline {b.ClassName} elm = Elm.elm Html.{element} elm "{b.ClassName}"
    static member inline {b.ClassName} string = Elm.string Html.{element} string "{b.ClassName}"
    static member inline {b.ClassName} int = Elm.int Html.{element} int "{b.ClassName}"
    static member inline {b.ClassName} float = Elm.float Html.{element} float "{b.ClassName}"
    """

let writeUtilities (bx:Block list) =
    let name = bx |> List.tryHead |> Option.map (fun x -> x.ClassName.Split("-").[0]) |> Option.defaultValue "NA"
    let head = $"""
[<Erase>]
type {name} ="""
    bx |> List.map (fun b ->
    let p = b.ClassName.Split("-") |> Array.last
    $"""
    /// {b.Comment}
    static member inline {p} = prop.className "{b.ClassName}" """
    )
    |> String.concat ""
    |> fun x -> head + x

let colorMods = [
    "primary"
    "primary-focus"
    "primary-content"
    "secondary"
    "secondary-focus"
    "secondary-content"
    "accent"
    "accent-focus"
    "accent-content"
    "neutral"
    "neutral-focus"
    "neutral-content"
    "base-100"
    "base-200"
    "base-300"
    "base-content"
    "info"
    "success"
    "warning"
    "error"
]

let colorTypes = [
    "bg"
    "text"
    "border"
    "from"
    "via"
    "to"
    "placeholder"
    "divide"
    "ring"
    "ring-offset"
]

[<ReactComponent>]
let GeneratorView () =
    let code,setCode = React.useState("")

    let processText (t:string) =
        let c,u =
            t.Split("\n")
            |> Array.choose parse
            |> (fun list ->
                let c = list |> Array.filter (fun x -> x.Type = Component) |> Array.toList
                let u = list |> Array.filter (fun x -> x.Type = Utility) |> Array.toList
                c,u
            )

        (c |> List.map (writeComponent "div") |> String.concat "\n") + "\n\n" + (u |> writeUtilities)
        |> setCode

    let setColors _ =

        [ for t in colorTypes do
            for m in colorMods do
                let mm = m.Replace("-","")
                yield $"static member inline {t}{mm} = prop.className \"{t}-{m}\""
        ]
        |> String.concat "\n"
        |> setCode

    Html.div [

        Html.divClassed "form-control" [
            Html.textarea [
                prop.className "textarea h-24 textarea-bordered"
                prop.onTextChange setColors
            ]
        ]

        Html.divClassed "mockup-code" [
            Html.pre [ Html.code code ]
        ]
    ]
