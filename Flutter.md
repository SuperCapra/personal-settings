# Flutter 101

Goes to flutter website https://docs.flutter.dev/get-started/quick and follow the instruction, if `flutter --version` does not work in the terminal follow this instruction
1. `nano ~/.zshrc`
2. set `export PATH="$PATH:/Users/youruser/yourfolder/flutter/bin"` for me it's export `PATH="$PATH:/Users/gmaggi/Progetti/flutter/bin"`
3. `source ~/.zshrc`

## Running the app
Just launch `flutter run`

## Local DB stuff
Always launch `flutter pub run build_runner build --delete-conflicting-outputs` to initiate the db

## Notification on iOS
In the file iOS/Runner/AppDelegate.swift add the line `UNUserNotificationCenter.current().delegate = self` before the `return`