module Docs.Pages.Step

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let horizontalSteps =
    let example =
        Daisy.steps [
            Daisy.step [step.primary; prop.text "Register"]
            Daisy.step [step.primary; prop.text "Choose Plan"]
            Daisy.step "Purchase"
            Daisy.step "Receive Product"
        ]
        |> Html.div

    let code = """Daisy.steps [
    Daisy.step [step.primary; prop.text "Register"]
    Daisy.step [step.primary; prop.text "Choose Plan"]
    Daisy.step "Purchase"
    Daisy.step "Receive Product"
]"""
    let title = Html.text "Horizontal Steps"
    codedView title code example

let verticalSteps =
    let example =
        Daisy.steps [
            steps.vertical
            prop.children [
                Daisy.step [step.primary; prop.text "Register"]
                Daisy.step [step.primary; prop.text "Choose Plan"]
                Daisy.step "Purchase"
                Daisy.step "Receive Product"
            ]
        ]
        |> Html.div

    let code = """Daisy.steps [
    steps.vertical
    prop.children [
        Daisy.step [step.primary; prop.text "Register"]
        Daisy.step [step.primary; prop.text "Choose Plan"]
        Daisy.step "Purchase"
        Daisy.step "Receive Product"
    ]
]"""
    let title = Html.text "Vertical Steps"
    codedView title code example

let customContent =
    let example =
        Daisy.steps [
            Daisy.step [step.content "?"; step.primary; prop.text "Step 1"]
            Daisy.step [step.content "!"; step.secondary; prop.text "Step 2"]
            Daisy.step [step.content "✓"; step.accent; prop.text "Step 3"]
            Daisy.step [step.content "✕"; step.error; prop.text "Step 4"]
            Daisy.step [step.content "★"; step.info; prop.text "Step 5"]
            Daisy.step [step.content ""; step.success; prop.text "Step 6"]
            Daisy.step [step.content "✕"; step.warning; prop.text "Step 7"]
            Daisy.step [step.content "●"; prop.text "Step 8"]
        ]
        |> Html.div

    let code = """Daisy.steps [
    Daisy.step [step.content "?"; step.primary; prop.text "Step 1"]
    Daisy.step [step.content "!"; step.secondary; prop.text "Step 2"]
    Daisy.step [step.content "✓"; step.accent; prop.text "Step 3"]
    Daisy.step [step.content "✕"; step.error; prop.text "Step 4"]
    Daisy.step [step.content "★"; step.info; prop.text "Step 5"]
    Daisy.step [step.content ""; step.success; prop.text "Step 6"]
    Daisy.step [step.content "✕"; step.warning; prop.text "Step 7"]
    Daisy.step [step.content "●"; prop.text "Step 8"]
]"""
    let title = Html.text "Custom Content"
    codedView title code example

[<ReactComponent>]
let StepView () =
    React.fragment [
        horizontalSteps
        verticalSteps
        customContent
    ]