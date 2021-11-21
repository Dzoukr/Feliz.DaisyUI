module Docs.App

open Elmish
open Elmish.React

#if DEBUG
open Elmish.Debug
open Elmish.HMR
#endif

Program.mkProgram View.init View.update View.AppView
#if DEBUG
|> Program.withConsoleTrace
#endif
|> Program.withReactSynchronous "safer-app"
#if DEBUG
|> Program.withDebugger
#endif
|> Program.run