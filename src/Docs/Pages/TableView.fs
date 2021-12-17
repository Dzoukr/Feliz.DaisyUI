module Docs.Pages.Table

open Feliz
open Elmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let simple =
    let example =
        Daisy.table [
            prop.className "w-full"
            prop.children [
                Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
                Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
                Html.tbody [Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]
                Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
                Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
            ]
        ]
        |> Html.div

    let code = """Daisy.table [
    prop.className "w-full"
    prop.children [
        Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
        Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
        Html.tbody [Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]
        Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
        Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
    ]
]"""
    let title = Html.text "Simple"
    codedView title code example

let activeRow =
    let example =
        Daisy.table [
            prop.className "w-full"
            prop.children [
                Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
                Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
                Html.tbody [Html.tr [table.active; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]]
                Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
                Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
            ]
        ]
        |> Html.div

    let code = """Daisy.table [
    prop.className "w-full"
    prop.children [
        Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
        Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
        Html.tbody [Html.tr [table.active; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]]
        Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
        Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
    ]
]"""
    let title = Html.text "Active Row"
    codedView title code example

let hoverRow =
    let example =
        Daisy.table [
            prop.className "w-full"
            prop.children [
                Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
                Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
                Html.tbody [Html.tr [table.hover; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]]
                Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
                Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
            ]
        ]
        |> Html.div

    let code = """Daisy.table [
    prop.className "w-full"
    prop.children [
        Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
        Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
        Html.tbody [Html.tr [table.hover; prop.children [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]]
        Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
        Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
    ]
]"""
    let title = Html.text "Hover Row"
    codedView title code example

let zebra =
    let example =
        Daisy.table [
            table.zebra
            prop.className "w-full"
            prop.children [
                Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
                Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
                Html.tbody [Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]
                Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
                Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
            ]
        ]
        |> Html.div

    let code = """Daisy.table [
    table.zebra
    prop.className "w-full"
    prop.children [
        Html.thead [Html.tr [Html.th ""; Html.th "Name"; Html.th "Job"; Html.th "Favorite Color"]]
        Html.tbody [Html.tr [Html.td "1"; Html.td "Cy Ganderton"; Html.td "Quality Control Specialist"; Html.td "Blue"]]
        Html.tbody [Html.tr [Html.td "2"; Html.td "Hart Hagerty"; Html.td "Desktop Support Technician"; Html.td "Purple"]]
        Html.tbody [Html.tr [Html.td "3"; Html.td "Brice Swyre"; Html.td "Tax Accountant"; Html.td "Red"]]
        Html.tbody [Html.tr [Html.td "4"; Html.td "Marjy Ferencz"; Html.td "Office Assistant I"; Html.td "Crimson"]]
    ]
]"""
    let title = Html.text "Zebra"
    codedView title code example

let tableWithVisuals =
    let example =

        let row (url: string, name: string, country: string, group: string, title: string, color: string) =
            Html.tr [
                Html.td [Daisy.checkbox []]
                Html.td [
                    Html.div [
                        prop.classes ["flex"; "items-center"; "space-x-3"]
                        prop.children [
                            Daisy.avatar [
                                Html.img [
                                    mask.squircle ++ prop.className "w-12 h-12"
                                    prop.src url
                                ]
                            ]
                            Html.div [
                                Html.div name
                                Html.div country
                            ]
                        ]
                    ]
                ]
                Html.td [
                    Html.span group
                    Html.br []
                    Daisy.badge [badge.sm; badge.outline; prop.text title]
                ]
                Html.td color
                Html.td [Daisy.button.button [button.ghost; button.xs; prop.text "Details"]]
            ]

        Daisy.table [
            table.compact
            prop.className "w-full"
            prop.children [
                Html.thead [
                    Html.tr [
                        Html.th [Daisy.checkbox []]
                        Html.th "Name"
                        Html.th "Job"
                        Html.th "Favorite Color"
                        Html.th ""
                    ]
                ]

 
                Html.tbody [
                    row ("https://daisyui.com/tailwind-css-component-profile-2@56w.png", "Hart Hagerty", "United States", "Zemlak, Daniel and Leannon", "Desktop Support Technician", "Purple")
                    row ("https://daisyui.com/tailwind-css-component-profile-3@56w.png", "Brice Swyre", "China", "Carroll Group", "Tax Accountant", "Red")
                    row ("https://daisyui.com/tailwind-css-component-profile-4@56w.png", "Marjy Ferencz", "Russia", "Rowe-Schoen", "Office Assistant I", "Crimson")
                    row ("https://daisyui.com/tailwind-css-component-profile-5@56w.png", "Yancy Tear", "Brazil", "Wyman-Ledner", "Community Outreach Specialist", "Indigo")
                ]
                Html.thead [
                    Html.tr [
                        Html.th ""
                        Html.th "Name"
                        Html.th "Job"
                        Html.th "Favorite Color"
                        Html.th ""
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """let row (url: string, name: string, country: string, group: string, title: string, color: string) =
    Html.tr [
        Html.td [Daisy.checkbox []]
        Html.td [
            Html.div [
                prop.classes ["flex"; "items-center"; "space-x-3"]
                prop.children [
                    Daisy.avatar [
                        Html.img [
                            mask.squircle ++ prop.className "w-12 h-12"
                            prop.src url
                        ]
                    ]
                    Html.div [
                        Html.div name
                        Html.div country
                    ]
                ]
            ]
        ]
        Html.td [
            Html.span group
            Html.br []
            Daisy.badge [badge.sm; badge.outline; prop.text title]
        ]
        Html.td color
        Html.td [Daisy.button.button [button.ghost; button.xs; prop.text "Details"]]
    ]

Daisy.table [
    table.compact
    prop.className "w-full"
    prop.children [
        Html.thead [
            Html.tr [
                Html.th [Daisy.checkbox []]
                Html.th "Name"
                Html.th "Job"
                Html.th "Favorite Color"
                Html.th ""
            ]
        ]

 
        Html.tbody [
            row ("https://daisyui.com/tailwind-css-component-profile-2@56w.png", "Hart Hagerty", "United States", "Zemlak, Daniel and Leannon", "Desktop Support Technician", "Purple")
            row ("https://daisyui.com/tailwind-css-component-profile-3@56w.png", "Brice Swyre", "China", "Carroll Group", "Tax Accountant", "Red")
            row ("https://daisyui.com/tailwind-css-component-profile-4@56w.png", "Marjy Ferencz", "Russia", "Rowe-Schoen", "Office Assistant I", "Crimson")
            row ("https://daisyui.com/tailwind-css-component-profile-5@56w.png", "Yancy Tear", "Brazil", "Wyman-Ledner", "Community Outreach Specialist", "Indigo")
        ]
        Html.thead [
            Html.tr [
                Html.th ""
                Html.th "Name"
                Html.th "Job"
                Html.th "Favorite Color"
                Html.th ""
            ]
        ]
    ]
]"""
    let title = Html.text "Table With Visuals"
    codedView title code example

let compact =
    let example =
        let header = ["";"NAME";"JOB";"COMPANY";"LOCATION";"LAST LOGIN";"FAVORITE COLOR"]
        let data = [
            ["1";"Cy Ganderton";"Quality Control Specialist";"Littel; Schaden and Vandervort";"Canada";"12/16/2020";"Blue"]
            ["2";"Hart Hagerty";"Desktop Support Technician";"Zemlak; Daniel and Leannon";"United States";"12/5/2020";"Purple"]
            ["3";"Brice Swyre";"Tax Accountant";"Carroll Group";"China";"8/15/2020";"Red"]
            ["4";"Marjy Ferencz";"Office Assistant I";"Rowe-Schoen";"Russia";"3/25/2021";"Crimson"]
            ["5";"Yancy Tear";"Community Outreach Specialist";"Wyman-Ledner";"Brazil";"5/22/2020";"Indigo"]
            ["6";"Irma Vasilik";"Editor";"Wiza; Bins and Emard";"Venezuela";"12/8/2020";"Purple"]
            ["7";"Meghann Durtnal";"Staff Accountant IV";"Schuster-Schimmel";"Philippines";"2/17/2021";"Yellow"]
            ["8";"Sammy Seston";"Accountant I";"O'Hara; Welch and Keebler";"Indonesia";"5/23/2020";"Crimson"]
            ["9";"Lesya Tinham";"Safety Technician IV";"Turner-Kuhlman";"Philippines";"2/21/2021";"Maroon"]
            ["10";"Zaneta Tewkesbury";"VP Marketing";"Sauer LLC";"Chad";"6/23/2020";"Green"]
            ["11";"Andy Tipple";"Librarian";"Hilpert Group";"Poland";"7/9/2020";"Indigo"]
            ["12";"Sophi Biles";"Recruiting Manager";"Gutmann Inc";"Indonesia";"2/12/2021";"Maroon"]
            ["13";"Florida Garces";"Web Developer IV";"Gaylord; Pacocha and Baumbach";"Poland";"5/31/2020";"Purple"]
            ["14";"Maribeth Popping";"Analyst Programmer";"Deckow-Pouros";"Portugal";"4/27/2021";"Aquamarine"]
            ["15";"Moritz Dryburgh";"Dental Hygienist";"Schiller; Cole and Hackett";"Sri Lanka";"8/8/2020";"Crimson"]
            ["16";"Reid Semiras";"Teacher";"Sporer; Sipes and Rogahn";"Poland";"7/30/2020";"Green"]
            ["17";"Alec Lethby";"Teacher";"Reichel; Glover and Hamill";"China";"2/28/2021";"Khaki"]
            ["18";"Aland Wilber";"Quality Control Specialist";"Kshlerin; Rogahn and Swaniawski";"Czech Republic";"9/29/2020";"Purple"]
            ["19";"Teddie Duerden";"Staff Accountant III";"Pouros; Ullrich and Windler";"France";"10/27/2020";"Aquamarine"]
            ["20";"Lorelei Blackstone";"Data Coordiator";"Witting; Kutch and Greenfelder";"Kazakhstan";"6/3/2020";"Red"]
        ]

        Daisy.table [
            table.compact
            prop.className "w-full"
            prop.children [
                Html.thead [Html.tr [for h in header do Html.th h]]
                Html.tbody [
                    for row in data do
                        Html.tr [
                            for col in row do Html.td col
                        ]
                ]
                Html.tfoot [Html.tr [for h in header do Html.th h]]
            ]
        ]
        |> Html.div

    let code = """let header = ["";"NAME";"JOB";"COMPANY";"LOCATION";"LAST LOGIN";"FAVORITE COLOR"]
let data = [
    ["1";"Cy Ganderton";"Quality Control Specialist";"Littel; Schaden and Vandervort";"Canada";"12/16/2020";"Blue"]
    ["2";"Hart Hagerty";"Desktop Support Technician";"Zemlak; Daniel and Leannon";"United States";"12/5/2020";"Purple"]
    ["3";"Brice Swyre";"Tax Accountant";"Carroll Group";"China";"8/15/2020";"Red"]
    ["4";"Marjy Ferencz";"Office Assistant I";"Rowe-Schoen";"Russia";"3/25/2021";"Crimson"]
    ["5";"Yancy Tear";"Community Outreach Specialist";"Wyman-Ledner";"Brazil";"5/22/2020";"Indigo"]
    ["6";"Irma Vasilik";"Editor";"Wiza; Bins and Emard";"Venezuela";"12/8/2020";"Purple"]
    ["7";"Meghann Durtnal";"Staff Accountant IV";"Schuster-Schimmel";"Philippines";"2/17/2021";"Yellow"]
    ["8";"Sammy Seston";"Accountant I";"O'Hara; Welch and Keebler";"Indonesia";"5/23/2020";"Crimson"]
    ["9";"Lesya Tinham";"Safety Technician IV";"Turner-Kuhlman";"Philippines";"2/21/2021";"Maroon"]
    ["10";"Zaneta Tewkesbury";"VP Marketing";"Sauer LLC";"Chad";"6/23/2020";"Green"]
    ["11";"Andy Tipple";"Librarian";"Hilpert Group";"Poland";"7/9/2020";"Indigo"]
    ["12";"Sophi Biles";"Recruiting Manager";"Gutmann Inc";"Indonesia";"2/12/2021";"Maroon"]
    ["13";"Florida Garces";"Web Developer IV";"Gaylord; Pacocha and Baumbach";"Poland";"5/31/2020";"Purple"]
    ["14";"Maribeth Popping";"Analyst Programmer";"Deckow-Pouros";"Portugal";"4/27/2021";"Aquamarine"]
    ["15";"Moritz Dryburgh";"Dental Hygienist";"Schiller; Cole and Hackett";"Sri Lanka";"8/8/2020";"Crimson"]
    ["16";"Reid Semiras";"Teacher";"Sporer; Sipes and Rogahn";"Poland";"7/30/2020";"Green"]
    ["17";"Alec Lethby";"Teacher";"Reichel; Glover and Hamill";"China";"2/28/2021";"Khaki"]
    ["18";"Aland Wilber";"Quality Control Specialist";"Kshlerin; Rogahn and Swaniawski";"Czech Republic";"9/29/2020";"Purple"]
    ["19";"Teddie Duerden";"Staff Accountant III";"Pouros; Ullrich and Windler";"France";"10/27/2020";"Aquamarine"]
    ["20";"Lorelei Blackstone";"Data Coordiator";"Witting; Kutch and Greenfelder";"Kazakhstan";"6/3/2020";"Red"]
]

Daisy.table [
    table.compact
    prop.className "w-full"
    prop.children [
        Html.thead [Html.tr [for h in header do Html.th h]]
        Html.tbody [
            for row in data do
                Html.tr [
                    for col in row do Html.td col
                ]
        ]
        Html.tfoot [Html.tr [for h in header do Html.th h]]
    ]
]"""
    let title = Html.text "Compact"
    codedView title code example

[<ReactComponent>]
let TableView () =
    React.fragment [
        simple
        activeRow
        hoverRow
        zebra
        tableWithVisuals
        compact
    ]
