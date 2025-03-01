module Docs.Pages.Filter

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let form =
    let example =
        Daisy.filter.form [
            Daisy.button.reset [ prop.value "x" ]
            Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Svelte" ]
            Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Vue" ]
            Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "React" ]
        ]

    let code = """Daisy.filter.form [
    Daisy.button.value [ prop.text "x" ]
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Svelte" ]
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "Vue" ]
    Daisy.button.radio [ prop.name "frameworks"; prop.ariaLabel "React" ]
]"""
    let title = Html.text "As form"
    codedView title code example

let div =
    let example =
        Daisy.filter.div [
            Daisy.filterReset [ prop.name "frameworks2" ]
            Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Svelte" ]
            Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Vue" ]
            Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "React" ]
        ]

    let code = """Daisy.filter.div [
    Daisy.filterReset [ prop.name "frameworks2" ]
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Svelte" ]
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "Vue" ]
    Daisy.button.radio [ prop.name "frameworks2"; prop.ariaLabel "React" ]
]"""
    let title = Html.text "As div"
    codedView title code example

[<ReactComponent>]
let FilterView () =
    React.fragment [
        form
        div
    ]