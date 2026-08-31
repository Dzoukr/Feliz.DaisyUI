module Docs.View

open Feliz
open Feliz.UseElmish
open Router
open Elmish
open SharedView
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators

type private Msg =
    | UrlChanged of Page

type private State =
    { Page : Page }

let private init () =
    let nextPage = Router.currentUrl() |> Page.parseFromUrlSegments
    { Page = nextPage }, Cmd.navigatePage nextPage

let private update (msg:Msg) (state:State) : State * Cmd<Msg> =
    match msg with
    | UrlChanged page -> { state with Page = page }, Cmd.none

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
            "night", "🌃 night"
            "coffee", "☕ coffee"
            "winter", "❄ winter"
            "dim", "🔅 dim"
            "nord", "⛰️ nord"
            "sunset", "🌆 sunset"
            "caramellatte", "☕ caramellatte"
            "abyss", "🕳️ abyss"
            "silk", "👗 silk"
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
                    prop.className "z-50"
                    prop.children [
                        Daisy.button.div [ prop.tabIndex 0; button.secondary; prop.text "Change Theme" ]
                        Daisy.dropdownContent [
                            prop.tabIndex 0
                            prop.children [
                                Daisy.menu [
                                    menu.md
                                    color.bgBase200
                                    color.textBaseContent
                                    prop.className "p-4 w-96 h-120 rounded-b-box overflow-y-auto"

                                    prop.children [
                                        for n,t in themes do
                                            Html.li [
                                                Daisy.input [
                                                    prop.type'.radio
                                                    theme.controller
                                                    prop.value n
                                                    prop.name "theme"
                                                    prop.className "btn btn-sm btn-block btn-ghost justify-start"
                                                    prop.custom("aria-label", t)
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

        Html.divClassed "px-5 py-5 bg-base-100" [
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

    let miDeprecated (b:string) (t: string) (mp:Page) =
        Html.li [
            Html.a [
                prop.href mp
                prop.onClick Router.goToUrl
                if p = mp then (menuItem.active ++ prop.className "justify-between")
                else prop.className "justify-between"
                prop.children [
                    Html.span [ prop.className "line-through"; prop.text t ]
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

    let categoryDivider () =
        Html.li []

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
                Html.divClassed "p-4" [
                    Daisy.alert [
                        alert.info
                        prop.children [
                            Html.divClassed "flex flex-col gap-2" [
                                Html.div [
                                    prop.dangerouslySetInnerHTML "🎉 Now based on <strong>DaisyUI v5!</strong>"
                                ]
                                Html.divClassed "text-sm self-center underline" [
                                    Html.a [ prop.text "Read the change log"; prop.href "https://daisyui.com/docs/changelog/#500" ]
                                ]
                            ]
                        ]
                    ]
                ]

                Daisy.menu [
                    menu.md
                    prop.className "flex flex-col p-4 pt-0 w-full"
                    prop.children [
                        Daisy.menuTitle [ Html.span "Docs" ]
                        mi "Install" Page.Install
                        mi "Use" Page.Use
                        mi "Themes" Page.Themes
                        mi "Colors" Page.Colors
                    ]
                ]
                Daisy.menu [
                    menu.md
                    prop.className "flex flex-col p-4 pt-0 w-full"
                    prop.children [
                        Daisy.menuTitle [ Html.span "Components" ]

                        Daisy.menuTitle [ Html.span "Actions" ]
                        mi "Button" Page.Button
                        mi "Dropdown" Page.Dropdown
                        mi "FAB / Speed Dial" Page.Fab
                        mi "Modal" Page.Modal
                        mi "Swap" Page.Swap
                        mi "Theme Controller" Page.ThemeController

                        categoryDivider ()
                        Daisy.menuTitle [ Html.span "Data display" ]
                        mi "Accordion" Page.Accordion
                        mi "Avatar" Page.Avatar
                        miBadge "new" "Aura" Page.Aura
                        mi "Badge" Page.Badge
                        mi "Card" Page.Card
                        mi "Carousel" Page.Carousel
                        mi "Chat bubble" Page.ChatBubble
                        mi "Collapse" Page.Collapse
                        mi "Countdown" Page.Countdown
                        mi "Diff" Page.Diff
                        mi "Hover 3D card" Page.Hover3D
                        mi "Hover Gallery" Page.HoverGallery
                        mi "Kbd" Page.Kbd
                        mi "List" Page.List
                        mi "Stat" Page.Stat
                        mi "Status" Page.Status
                        mi "Table" Page.Table
                        mi "Text Rotate" Page.TextRotate
                        mi "Timeline" Page.Timeline

                        categoryDivider ()
                        Daisy.menuTitle [ Html.span "Navigation" ]
                        mi "Breadcrumbs" Page.Breadcrumbs
                        mi "Dock" Page.Dock
                        mi "Link" Page.Link
                        miBadge "new" "Megamenu" Page.Megamenu
                        mi "Menu" Page.Menu
                        mi "Navbar" Page.Navbar
                        mi "Pagination" Page.Pagination
                        mi "Steps" Page.Steps
                        mi "Tab" Page.Tab

                        categoryDivider ()
                        Daisy.menuTitle [ Html.span "Feedback" ]
                        mi "Alert" Page.Alert
                        mi "Loading" Page.Loading
                        mi "Progress" Page.Progress
                        mi "Radial progress" Page.RadialProgress
                        mi "Skeleton" Page.Skeleton
                        mi "Toast" Page.Toast
                        mi "Tooltip" Page.Tooltip

                        categoryDivider ()
                        Daisy.menuTitle [ Html.span "Data input" ]
                        mi "Checkbox" Page.FormCheckbox
                        mi "Fieldset" Page.Fieldset
                        mi "File Input" Page.FileInput
                        mi "Filter" Page.Filter
                        mi "Label" Page.Label
                        mi "Radio" Page.FormRadio
                        mi "Range" Page.FormRange
                        mi "Rating" Page.Rating
                        mi "Select" Page.FormSelect
                        mi "Input field" Page.FormInput
                        mi "Textarea" Page.FormTextarea
                        mi "Toggle" Page.FormToggle
                        mi "Validator" Page.Validator
                        miBadge "new" "OTP" Page.Otp

                        categoryDivider ()
                        Daisy.menuTitle [ Html.span "Layout" ]
                        mi "Divider" Page.Divider
                        mi "Drawer sidebar" Page.Drawer
                        mi "Footer" Page.Footer
                        mi "Hero" Page.Hero
                        mi "Indicator" Page.Indicator
                        mi "Join (group items)" Page.Join
                        mi "Mask" Page.Mask
                        mi "Stack" Page.Stack

                        categoryDivider ()
                        Daisy.menuTitle [ Html.span "Mockup" ]
                        mi "Browser" Page.MockupBrowser
                        mi "Code" Page.MockupCode
                        mi "Phone" Page.MockupPhone
                        mi "Window" Page.MockupWindow
                    ]
                ]
            ]
        ]
    ]

let private inLayout state dispatch (title:string) (docLink:string)  (p:Page) (elm:ReactElement) =
    Html.div [
        prop.className "bg-base-100 text-base-content h-screen"
        //theme.custom state.Theme
        prop.children [
            Daisy.drawer [
                prop.className "lg:drawer-open"
                prop.children [
                    Daisy.drawerToggle [ prop.id "main-menu" ]
                    rightSide state dispatch title docLink elm
                    leftSide p
                ]
            ]
        ]
    ]



[<ReactComponent>]
let AppView () =
    let state,dispatch = React.useElmish(init, update)
    let title,docLink,content =
        match state.Page with
        | Page.Install      -> "Installation"   , "/docs/install"            , Pages.Install.InstallView()
        | Page.Use          -> "How to use"     , "/docs/use"                , Pages.Use.UseView()
        | Page.Themes       -> "Themes"         , "/docs/default-themes"     , Pages.Themes.ThemesView ()
        | Page.Colors       -> "Colors"         , "/core/colors"             , Pages.Colors.ColorsView ()
        | Page.Accordion    -> "Accordion"      , "/components/accordion"    , Pages.Accordion.AccordionView ()
        | Page.Alert        -> "Alert"          , "/components/alert"        , Pages.Alert.AlertView ()
        | Page.Aura         -> "Aura"           , "/components/aura"         , Pages.Aura.AuraView ()
        | Page.Avatar       -> "Avatar"         , "/components/avatar"       , Pages.Avatar.AvatarView ()
        | Page.Badge        -> "Badge"          , "/components/badge"        , Pages.Badge.BadgeView ()
        | Page.Breadcrumbs  -> "Breadcrumbs"    , "/components/breadcrumbs"  , Pages.Breadcrumbs.BreadcrumbsView ()
        | Page.Button       -> "Button"         , "/components/button"       , Pages.Button.ButtonView ()
        | Page.Card         -> "Card"           , "/components/card"         , Pages.Card.CardView ()
        | Page.Carousel     -> "Carousel"       , "/components/carousel"     , Pages.Carousel.CarouselView ()
        | Page.ChatBubble   -> "ChatBubble"     , "/components/chat"         , Pages.ChatBubble.ChatBubble ()
        | Page.Collapse     -> "Collapse"       , "/components/collapse"     , Pages.Collapse.CollapseView ()
        | Page.Countdown    -> "Countdown"      , "/components/countdown"    , Pages.Countdown.CountdownView ()
        | Page.Diff         -> "Diff"           , "/components/diff"         , Pages.Diff.DiffView ()
        | Page.Divider      -> "Divider"        , "/components/divider"      , Pages.Divider.DividerView ()
        | Page.Dock         -> "Dock"           , "/components/dock"         , Pages.Dock.DockView ()
        | Page.Drawer       -> "Drawer"         , "/components/drawer"       , Pages.Drawer.DrawerView ()
        | Page.Dropdown     -> "Dropdown"       , "/components/dropdown"     , Pages.Dropdown.DropdownView ()
        | Page.Fab          -> "FAB"            , "/components/fab"          , Pages.Fab.FabView ()
        | Page.Fieldset     -> "Fieldset"       , "/components/fieldset"     , Pages.Fieldset.FieldsetView ()
        | Page.Filter       -> "Filter"         , "/components/filter"       , Pages.Filter.FilterView ()
        | Page.Footer       -> "Footer"         , "/components/footer"       , Pages.Footer.FooterView ()
        | Page.Hero         -> "Hero"           , "/components/hero"         , Pages.Hero.HeroView ()
        | Page.Hover3D      -> "Hover 3D"       , "/components/hover-3d"     , Pages.Hover3D.Hover3DView ()
        | Page.HoverGallery -> "Hover Gallery"  , "/components/hover-gallery", Pages.HoverGallery.HoverGalleryView ()
        | Page.Indicator    -> "Indicator"      , "/components/indicator"    , Pages.Indicator.IndicatorView ()
        | Page.Join         -> "Join"           , "/components/join"         , Pages.Join.JoinView ()
        | Page.Kbd          -> "Kbd"            , "/components/kdb"          , Pages.Kbd.KbdView ()
        | Page.Label        -> "Label"          , "/components/label"        , Pages.Label.LabelView ()
        | Page.Link         -> "Link"           , "/components/link"         , Pages.Link.LinkView ()
        | Page.List         -> "List"           , "/components/list"         , Pages.List.ListView ()
        | Page.Loading      -> "Loading"        , "/components/loading"      , Pages.Loading.LoadingView ()
        | Page.Mask         -> "Mask"           , "/components/mask"         , Pages.Mask.MaskView ()
        | Page.Menu         -> "Menu"           , "/components/menu"         , Pages.Menu.MenuView ()
        | Page.Megamenu     -> "Megamenu"       , "/components/megamenu"     , Pages.Megamenu.MegamenuView ()
        | Page.Modal        -> "Modal"          , "/components/modal"        , Pages.Modal.ModalView ()
        | Page.Navbar       -> "Navbar"         , "/components/navbar"       , Pages.Navbar.NavbarView ()
        | Page.Otp          -> "OTP"            , "/components/otp"          , Pages.Otp.OtpView ()
        | Page.Pagination   -> "Pagination"     , "/components/pagination"   , Pages.Pagination.PaginationView ()
        | Page.Progress     -> "Progress"       , "/components/progress"     , Pages.Progress.ProgressView ()
        | Page.RadialProgress -> "RadialProgress", "/components/radial-progress", Pages.RadialProgress.RadialProgressView ()
        | Page.Rating       -> "Rating"         , "/components/rating"       , Pages.Rating.RatingView ()
        | Page.Skeleton     -> "Skeleton"       , "/components/skeleton"     , Pages.Skeleton.SkeletonView ()
        | Page.Stack        -> "Stack"          , "/components/stack"        , Pages.Stack.StackView ()
        | Page.Stat         -> "Stat"           , "/components/stat"         , Pages.Stat.StatView ()
        | Page.Status       -> "Status"         , "/components/status"       , Pages.Status.StatusView ()
        | Page.Steps        -> "Steps"          , "/components/steps"        , Pages.Step.StepView ()
        | Page.Swap         -> "Swap"           , "/components/swap"         , Pages.Swap.SwapView ()
        | Page.Tab          -> "Tab"            , "/components/tab"          , Pages.Tab.TabView ()
        | Page.Table        -> "Table"          , "/components/table"        , Pages.Table.TableView ()
        | Page.TextRotate   -> "Text Rotate"    , "/components/text-rotate"  , Pages.TextRotate.TextRotateView ()
        | Page.ThemeController -> "Theme Controller", "/components/theme-controller", Pages.ThemeController.ThemeControllerView ()
        | Page.Timeline     -> "Timeline"       , "/components/timeline"     , Pages.Timeline.TimelineView()
        | Page.Toast        -> "Toast"          , "/components/toast"        , Pages.Toast.ToastView ()
        | Page.Tooltip      -> "Tooltip"        , "/components/tooltip"      , Pages.Tooltip.TooltipView ()
        | Page.Validator    -> "Validator"      , "/components/validator"    , Pages.Validator.ValidatorView ()
        | Page.FileInput    -> "File - Input"   , "/components/file-input"   , Pages.FileInput.FileInputView ()
        | Page.FormCheckbox -> "Form - Checkbox", "/components/form/checkbox", Pages.FormCheckbox.FormCheckboxView ()
        | Page.FormInput    -> "Form - Input"   , "/components/form/input"   , Pages.FormInput.FormInputView ()
        | Page.FormRadio    -> "Form - Radio"   , "/components/form/radio"   , Pages.FormRadio.FormRadioView ()
        | Page.FormRange    -> "Form - Range"   , "/components/form/range"   , Pages.FormRange.FormRangeView ()
        | Page.FormSelect   -> "Form - Select"  , "/components/form/select"  , Pages.FormSelect.FormSelectView ()
        | Page.FormTextarea -> "Form - Textarea", "/components/form/textarea", Pages.FormTextarea.FormTextareaView ()
        | Page.FormToggle   -> "Form - Toggle"  , "/components/form/toggle"  , Pages.FormToggle.FormToggleView ()
        | Page.MockupBrowser -> "Browser Mockup", "/components/mockup-browser", Pages.MockupBrowser.MockupBrowserView ()
        | Page.MockupCode   -> "MockupCode"     , "/components/mockup/code"  , Pages.MockupCode.MockupCodeView ()
        | Page.MockupPhone  -> "MockupPhone"    , "/components/mockup/phone" , Pages.MockupPhone.MockupPhoneView ()
        | Page.MockupWindow -> "MockupWindow"   , "/components/mockup/window", Pages.MockupWindow.MockupWindowView ()

    React.router [
        router.hashMode
        router.onUrlChanged (Page.parseFromUrlSegments >> UrlChanged >> dispatch)
        router.children [ content |> inLayout state dispatch title docLink state.Page ]
    ]
