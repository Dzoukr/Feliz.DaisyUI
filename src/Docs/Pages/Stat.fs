module Docs.Pages.Stat

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.stats [
            Daisy.stat [
                Daisy.statTitle "Total Page Views"
                Daisy.statValue "89,400"
                Daisy.statDesc "21% more than last month"
            ]
        ]
        |> Html.div

    let code = """Daisy.stats [
    Daisy.stat [
        Daisy.statTitle "Total Page Views"
        Daisy.statValue "89,400"
        Daisy.statDesc "21% more than last month"
    ]
]"""
    let title = Html.text "Simple"
    codedView title code example

let withFigure =
    let example =
        Daisy.stats [
            prop.className "w-full"
            prop.children [
                Daisy.stat [
                    Daisy.statFigure [
                        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                    ]
                    Daisy.statTitle "Downloads"
                    Daisy.statValue "310M"
                    Daisy.statDesc "Jan 1st - Feb 1st"
                ]
                Daisy.stat [
                    Daisy.statFigure [
                        Html.i [ prop.className "fas fa-hand-spock mr-2" ]
                    ]
                    Daisy.statTitle "New Users"
                    Daisy.statValue "4,200"
                    Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]
                ]
                Daisy.stat [
                    Daisy.statFigure [
                        Html.i [ prop.className "fas fa-layer-group mr-2" ]
                    ]
                    Daisy.statTitle "New Registers"
                    Daisy.statValue "1,200"
                    Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.stats [
    prop.className "w-full"
    prop.children [
        Daisy.stat [
            Daisy.statFigure [
                Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
            ]
            Daisy.statTitle "Downloads"
            Daisy.statValue "310M"
            Daisy.statDesc "Jan 1st - Feb 1st"
        ]
        Daisy.stat [
            Daisy.statFigure [
                Html.i [ prop.className "fas fa-hand-spock mr-2" ]
            ]
            Daisy.statTitle "New Users"
            Daisy.statValue "4,200"
            Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]
        ]
        Daisy.stat [
            Daisy.statFigure [
                Html.i [ prop.className "fas fa-layer-group mr-2" ]
            ]
            Daisy.statTitle "New Registers"
            Daisy.statValue "1,200"
            Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]
        ]
    ]
]"""
    let title = Html.text "With Figure"
    codedView title code example

let centered =
    let example =
        Daisy.stats [
            prop.className "w-full"
            prop.children [
                Daisy.stat [
                    prop.className "place-items-center place-content-center"
                    prop.children [
                        Daisy.statTitle "Downloads"
                        Daisy.statValue "310M"
                        Daisy.statDesc "Jan 1st - Feb 1st"
                    ]
                ]
                Daisy.stat [
                    prop.className "place-items-center place-content-center"
                    prop.children [
                        Daisy.statTitle "New Users"
                        Daisy.statValue "4,200"
                        Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]
                    ]
                ]
                Daisy.stat [
                    prop.className "place-items-center place-content-center"
                    prop.children [
                        Daisy.statTitle "New Registers"
                        Daisy.statValue "1,200"
                        Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.stats [
    prop.className "w-full"
    prop.children [
        Daisy.stat [
            prop.className "place-items-center place-content-center"
            prop.children [
                Daisy.statTitle "Downloads"
                Daisy.statValue "310M"
                Daisy.statDesc "Jan 1st - Feb 1st"
            ]
        ]
        Daisy.stat [
            prop.className "place-items-center place-content-center"
            prop.children [
                Daisy.statTitle "New Users"
                Daisy.statValue "4,200"
                Daisy.statDesc [prop.className "text-success"; prop.text "↗︎ 400 (22%)"]
            ]
        ]
        Daisy.stat [
            prop.className "place-items-center place-content-center"
            prop.children [
                Daisy.statTitle "New Registers"
                Daisy.statValue "1,200"
                Daisy.statDesc [prop.className "text-error"; prop.text "↘︎ 90 (14%)"]
            ]
        ]
    ]
]"""
    let title = Html.text "With Figure"
    codedView title code example

[<ReactComponent>]
let StatView () =
    React.fragment [
        simple
        withFigure
        centered
    ]
