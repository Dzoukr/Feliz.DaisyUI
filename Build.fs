open Fake
open Fake.Core
open Fake.IO
open Fake.IO.FileSystemOperators
open Fake.Core.TargetOperators

open BuildHelpers
open BuildTools

initializeContext()

let publishPath = Path.getFullName "publish"
let srcPath = Path.getFullName "src"
let clientSrcPath = srcPath </> "Docs"
let appPublishPath = publishPath </> "app"

// Targets
let clean proj = [ proj </> "bin"; proj </> "obj" ] |> Shell.cleanDirs

Target.create "InstallClient" (fun _ ->
    printfn "Node version:"
    Tools.node "--version" clientSrcPath
    printfn "Yarn version:"
    Tools.yarn "--version" clientSrcPath
    Tools.yarn "install --frozen-lockfile" clientSrcPath
)

Target.create "Publish" (fun _ ->
//    [ appPublishPath ] |> Shell.cleanDirs
//    let publishArgs = sprintf "publish -c Release -o \"%s\"" appPublishPath
//    Tools.dotnet publishArgs serverSrcPath
//    [ appPublishPath </> "appsettings.Development.json" ] |> File.deleteAll
    Tools.yarn "build" ""
)

Target.create "Run" (fun _ ->
    Tools.yarn "start" ""
)

let dependencies = [
    "InstallClient"
        ==> "Publish"

    "InstallClient"
        ==> "Run"
]

[<EntryPoint>]
let main args = runOrDefault "Run" args