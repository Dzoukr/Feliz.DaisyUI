module Docs.View

open Feliz
open Router
open Elmish
open SharedView
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators

type Msg =
    | UrlChanged of Page
    | SetTheme of string

type State =
    { Page : Page
      Theme : string }

let init () =
    let nextPage = Router.currentUrl() |> Page.parseFromUrlSegments
    { Page = nextPage; Theme = "light" }, Cmd.navigatePage nextPage

let update (msg:Msg) (state:State) : State * Cmd<Msg> =
    match msg with
    | UrlChanged page -> { state with Page = page }, Cmd.none
    | SetTheme theme -> { state with Theme = theme }, Cmd.none

let private rightSide state dispatch (title:string) (docLink:string) elm =
    let themes =
        [
            "light", "🌝 light"
            "dark", "🌚 dark"
            "cupcake", "🧁 cupcake"
            "bumblebee", "🐝 bumblebee"
            "emerald", "✳️ emerald"
            "corporate", "🏢 corporate"
            "synthwave", "🌃 synthwave"
            "retro", "👴 retro"
            "cyberpunk", "🤖 cyberpunk"
            "valentine", "🌸 valentine"
            "halloween", "🎃 halloween"
            "garden", "🌷 garden"
            "forest", "🌲 forest"
            "aqua", "🐟 aqua"
            "lofi", "👓 lofi"
            "pastel", "🖍 pastel"
            "️fantasy", "🧚‍️ fantasy"
            "wireframe", "📝 wireframe"
            "black", "🏴 black"
            "luxury", "💎 luxury"
            "️dracula", "🧛‍️ dracula"
            "cmyk", "🖨 CMYK"
            "autumn", "🍁 autumn"
            "business", "💼 business"
            "acid", "💊 acid"
            "lemonade", "🍋 lemonade"
        ]

    Daisy.drawerContent [
        Daisy.navbar [
            Daisy.navbarStart [
                Html.divClassed "lg:hidden" [
                    Daisy.button.label [
                        button.square
                        button.ghost
                        prop.htmlFor "main-menu"
                        prop.children [
                            Svg.svg [
                                svg.viewBox (0, 0, 24, 24)
                                svg.className "inline-block w-6 h-6 stroke-current"
                                svg.children [
                                    Svg.path [ svg.d "M4 6h16M4 12h16M4 18h16"; svg.strokeWidth 2; ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
            Daisy.navbarEnd [
                Daisy.dropdown [
                    dropdown.end'
                    prop.children [
                        Daisy.button.div [ prop.tabIndex 0; button.secondary; prop.text "Change Theme" ]
                        Daisy.dropdownContent [
                            prop.tabIndex 0
                            prop.children [
                                Daisy.menu [
                                    menu.compact
                                    color.bgBase200
                                    color.textBaseContent
                                    prop.className "p-4 h-96 w-52 rounded-b-box overflow-y-auto"

                                    prop.children [
                                        for n,t in themes do
                                            Html.li [
                                                Html.a [
                                                    if n = state.Theme then prop.className "active"
                                                    prop.text t
                                                    prop.onClick (fun _ -> SetTheme n |> dispatch )
                                                ]
                                            ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

        Html.divClassed "px-5 py-5" [
            Html.h2 [
                color.textPrimary
                ++ prop.className "my-6 text-5xl font-bold"

                prop.children [
                    Html.text title
                    Daisy.button.a [
                        prop.className "ml-2"
                        button.warning
                        button.outline
                        button.xs
                        prop.href $"https://daisyui.com{docLink}"
                        prop.children [
                            Html.text "daisyui docs"
                        ]
                    ]
                ]
            ]

            elm
        ]
    ]

let private leftSide (p:Page) =
    let miBadge (b:string) (t: string) (mp:Page) =
        Html.li [
            Html.a [
                prop.href mp
                prop.onClick Router.goToUrl
                if p = mp then (menuItem.active ++ prop.className "justify-between")
                else prop.className "justify-between"
                prop.children [
                    Html.span t
                    Html.span [
                        prop.className "badge"
                        prop.text b
                    ]
                ]
            ]
        ]

    let mi (t:string) (mp:Page) =
        Html.li [
            Html.a [
                if p = mp then menuItem.active
                prop.text t
                prop.href mp
                prop.onClick Router.goToUrl
            ]
        ]
    Daisy.drawerSide [
        Daisy.drawerOverlay [ prop.htmlFor "main-menu" ]
        Html.aside [
            prop.className "flex flex-col border-r w-80 bg-base-100 text-base-content"
            prop.children [
                Html.divClassed "inline-block text-3xl font-title px-5 py-5 font-bold" [
                    Html.span [
                        color.textPrimary
                        prop.text "Feliz."
                    ]
                    Html.text "DaisyUI"
                    Html.a [
                        prop.href "https://www.nuget.org/packages/Feliz.DaisyUI"
                        prop.children [
                            Html.img [ prop.src "https://img.shields.io/nuget/v/Feliz.DaisyUI.svg?style=flat-square" ]
                        ]
                    ]
                ]
                Daisy.menu [
                    menu.compact
                    prop.className "flex flex-col p-4 pt-0"
                    prop.children [
                        Daisy.menuTitle [ Html.span "Docs" ]
                        mi "Install" Page.Install
                        mi "Use" Page.Use
                        mi "Themes" Page.Themes
                        mi "Colors" Page.Colors
                    ]
                ]
                Daisy.menu [
                    menu.compact
                    prop.className "flex flex-col p-4 pt-0"
                    prop.children [
                        Daisy.menuTitle [ Html.span "Components" ]
                        mi "Alert" Page.Alert
                        mi "Artboard" Page.Artboard
                        mi "Avatar" Page.Avatar
                        mi "Badge" Page.Badge
                        mi "Breadcrumbs" Page.Breadcrumbs
                        mi "Button" Page.Button
                        mi "ButtonGroup" Page.ButtonGroup
                        mi "Card" Page.Card
                        mi "Carousel" Page.Carousel
                        mi "Collapse" Page.Collapse
                        mi "Countdown" Page.Countdown
                        mi "Divider" Page.Divider
                        mi "Drawer" Page.Drawer
                        mi "Dropdown" Page.Dropdown
                        mi "Footer" Page.Footer
                        mi "Hero" Page.Hero
                        mi "Indicator" Page.Indicator
                        mi "Kbd" Page.Kbd
                        mi "Link" Page.Link
                        mi "Mask" Page.Mask
                        mi "Menu" Page.Menu
                        mi "Modal" Page.Modal
                        mi "Navbar" Page.Navbar
                        mi "Pagination" Page.Pagination
                        mi "Progress" Page.Progress
                        mi "Radial Progress" Page.RadialProgress
                        mi "Rating" Page.Rating
                        mi "Stack" Page.Stack
                        mi "Stat" Page.Stat
                        mi "Steps" Page.Steps
                        mi "Swap" Page.Swap
                        mi "Tab" Page.Tab
                        mi "Table" Page.Table
                        miBadge "new" "Toast" Page.Toast
                        mi "Tooltip" Page.Tooltip
                        mi "Form - Checkbox" Page.FormCheckbox
                        mi "Form - Input" Page.FormInput
                        mi "Form - Radio" Page.FormRadio
                        mi "Form - Range" Page.FormRange
                        mi "Form - Select" Page.FormSelect
                        mi "Form - Textarea" Page.FormTextarea
                        mi "Form - Toggle" Page.FormToggle
                        mi "MockupCode" Page.MockupCode
                        mi "MockupPhone" Page.MockupPhone
                        mi "MockupWindow" Page.MockupWindow
                    ]
                ]
            ]
        ]
    ]

let private inLayout state dispatch (title:string) (docLink:string)  (p:Page) (elm:ReactElement) =
    Html.div [
        prop.className "bg-base-100 text-base-content h-screen"
        theme.custom state.Theme
        prop.children [
            Daisy.drawer [
                drawer.mobile
                prop.children [
                    Daisy.drawerToggle [ prop.id "main-menu" ]
                    rightSide state dispatch title docLink elm
                    leftSide p
                ]
            ]
        ]
    ]



[<ReactComponent>]
let AppView (state:State) (dispatch:Msg -> unit) =

    let title,docLink,content =
        match state.Page with
        | Page.Install      -> "Installation"   , "/docs/install"            , Pages.Install.InstallView()
        | Page.Use          -> "How to use"     , "/docs/use"                , Pages.Use.UseView()
        | Page.Themes       -> "Themes"         , "/docs/default-themes"     , Pages.Themes.ThemesView ()
        | Page.Colors       -> "Colors"         , "/core/colors"             , Pages.Colors.ColorsView ()
        | Page.Alert        -> "Alert"          , "/components/alert"        , Pages.Alert.AlertView ()
        | Page.Artboard     -> "Artboard"       , "/components/artboard"     , Pages.Artboard.ArtboardView ()
        | Page.Avatar       -> "Avatar"         , "/components/avatar"       , Pages.Avatar.AvatarView ()
        | Page.Badge        -> "Badge"          , "/components/badge"        , Pages.Badge.BadgeView ()
        | Page.Breadcrumbs  -> "Breadcrumbs"    , "/components/breadcrumbs"  , Pages.Breadcrumbs.BreadcrumbsView ()
        | Page.Button       -> "Button"         , "/components/button"       , Pages.Button.ButtonView ()
        | Page.ButtonGroup  -> "ButtonGroup"    , "/components/button-group" , Pages.ButtonGroup.ButtonGroupView ()
        | Page.Card         -> "Card"           , "/components/card"         , Pages.Card.CardView ()
        | Page.Carousel     -> "Carousel"       , "/components/carousel"     , Pages.Carousel.CarouselView ()
        | Page.Collapse     -> "Collapse"       , "/components/collapse"     , Pages.Collapse.CollapseView ()
        | Page.Countdown    -> "Countdown"      , "/components/countdown"    , Pages.Countdown.CountdownView ()
        | Page.Divider      -> "Divider"        , "/components/divider"      , Pages.Divider.DividerView ()
        | Page.Drawer       -> "Drawer"         , "/components/drawer"       , Pages.Drawer.DrawerView ()
        | Page.Dropdown     -> "Dropdown"       , "/components/dropdown"     , Pages.Dropdown.DropdownView ()
        | Page.Footer       -> "Footer"         , "/components/footer"       , Pages.Footer.FooterView ()
        | Page.Hero         -> "Hero"           , "/components/hero"         , Pages.Hero.HeroView ()
        | Page.Indicator    -> "Indicator"      , "/components/indicator"    , Pages.Indicator.IndicatorView ()
        | Page.Kbd          -> "Kbd"            , "/components/kdb"          , Pages.Kbd.KbdView ()
        | Page.Link         -> "Link"           , "/components/link"         , Pages.Link.LinkView ()
        | Page.Mask         -> "Mask"           , "/components/mask"         , Pages.Mask.MaskView ()
        | Page.Menu         -> "Menu"           , "/components/menu"         , Pages.Menu.MenuView ()
        | Page.Modal        -> "Modal"          , "/components/modal"        , Pages.Modal.ModalView ()
        | Page.Navbar       -> "Navbar"         , "/components/navbar"       , Pages.Navbar.NavbarView ()
        | Page.Pagination   -> "Pagination"     , "/components/pagination"   , Pages.Pagination.PaginationView ()
        | Page.Progress     -> "Progress"       , "/components/progress"     , Pages.Progress.ProgressView ()
        | Page.RadialProgress -> "RadialProgress", "/components/radial-progress", Pages.RadialProgress.RadialProgressView ()
        | Page.Rating       -> "Rating"         , "/components/rating"       , Pages.Rating.RatingView ()
        | Page.Stack        -> "Stack"          , "/components/stack"        , Pages.Stack.StackView ()
        | Page.Stat         -> "Stat"           , "/components/stat"         , Pages.Stat.StatView ()
        | Page.Steps        -> "Steps"          , "/components/steps"        , Pages.Step.StepView ()
        | Page.Swap         -> "Swap"           , "/components/swap"         , Pages.Swap.SwapView ()
        | Page.Tab          -> "Tab"            , "/components/tab"          , Pages.Tab.TabView ()
        | Page.Table        -> "Table"          , "/components/table"        , Pages.Table.TableView ()
        | Page.Toast        -> "Toast"          , "/components/toast"        , Pages.Toast.ToastView ()
        | Page.Tooltip      -> "Tooltip"        , "/components/tooltip"      , Pages.Tooltip.TooltipView ()
        | Page.FormCheckbox -> "Form - Checkbox", "/components/form/checkbox", Pages.FormCheckbox.FormCheckboxView ()
        | Page.FormInput    -> "Form - Input"   , "/components/form/input"   , Pages.FormInput.FormInputView ()
        | Page.FormRadio    -> "Form - Radio"   , "/components/form/radio"   , Pages.FormRadio.FormRadioView ()
        | Page.FormRange    -> "Form - Range"   , "/components/form/range"   , Pages.FormRange.FormRangeView ()
        | Page.FormSelect   -> "Form - Select"  , "/components/form/select"  , Pages.FormSelect.FormSelectView ()
        | Page.FormTextarea -> "Form - Textarea", "/components/form/textarea", Pages.FormTextarea.FormTextareaView ()
        | Page.FormToggle   -> "Form - Toggle"  , "/components/form/toggle"  , Pages.FormToggle.FormToggleView ()
        | Page.MockupCode   -> "MockupCode"     , "/components/mockup/code"  , Pages.MockupCode.MockupCodeView ()
        | Page.MockupPhone  -> "MockupPhone"    , "/components/mockup/phone" , Pages.MockupPhone.MockupPhoneView ()
        | Page.MockupWindow -> "MockupWindow"   , "/components/mockup/window", Pages.MockupWindow.MockupWindowView ()

    React.router [
        router.hashMode
        router.onUrlChanged (Page.parseFromUrlSegments >> UrlChanged >> dispatch)
        router.children [ content |> inLayout state dispatch title docLink state.Page ]
    ]