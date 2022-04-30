# KMM Core

[![GitHub license](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg?style=flat)](http://www.apache.org/licenses/LICENSE-2.0) ![Kotlin Version](https://img.shields.io/badge/kotlin-v1.6.21-F88909?style=flat&logo=kotlin)

This is **Kotlin Mobile Multiplatform** project which showcases core module for mobile application. It includes shared module contains business model for mobile consumption and reusable UI component.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Set Up Locally](#set-up-locally)
- [Contributing](#contributing)
- [License](#license)

## Features
[x] Auth Feature
[x] Account Feature
[x] Article Feature

## Requirements
- JDK 11+
- Android 6+
- iOS 14.1+
- Swift 5.6+

## Dependencies
- [Koin](https://insert-koin.io) is a pragmatic lightweight dependency injection framework for Kotlin developers.
- [Serialization](https://kotlinlang.org/docs/serialization.html) consists of a compiler plugin, that generates visitor code for serializable classes, runtime library with core serialization API and support libraries with various serialization formats.
- [Ktor](https://ktor.io) is a multiplatform asynchronous HTTP client, which allows you to make requests and handle responses, extend its functionality with plugins, such as authentication, JSON serialization, and so on.
- [SQLDelight](https://cashapp.github.io/sqldelight) is generates typesafe kotlin APIs from your SQL statements. It verifies your schema, statements, and migrations at compile-time and provides IDE features like autocomplete and refactoring which make writing and maintaining SQL simple.

## Project Structure

This project implement [Clean Architecture by Fernando Cejas](https://fernandocejas.com/2018/05/07/architecting-android-reloaded)

### Clean architecture
![Image Clean architecture](https://raw.githubusercontent.com/android10/Sample-Data/master/Android-CleanArchitecture-Kotlin/architecture/clean_architecture_reloaded_main.png)

### UI Layer: MVVM
![Image UI Layer: MVVM](https://raw.githubusercontent.com/android10/Sample-Data/master/Android-CleanArchitecture-Kotlin/architecture/clean_architecture_reloaded_mvvm_app.png)

### Data Layer: Repository
![Image Data Layer: Repository](https://raw.githubusercontent.com/android10/Sample-Data/master/Android-CleanArchitecture-Kotlin/architecture/clean_archictecture_reloaded_repository.png)

### Module
For the high level hierarchy, the project separate into 3 main modules, which are :

1. shared/commonMain
> This module contains Domain layer and Data layer. Domain layer consists of use cases and entities. Data layer consists of data sources, can be network call or local data.
```
├── data/
│   └── {Feature}/
│       ├── local/
│       │   ├── {Model}Data.sq
│       │   └── Local{Feature}DataSource.kt
│       ├── remote/
│       │   ├── request/
│       │   │   └── {Model}Request.kt
│       │   ├── response/
│       │   │   └── {Model}Response.kt
│       │   └── Remote{Feature}DataSource.kt
│       ├── {Feature}DataSource.kt
│       └── {Feature}RepositoryImpl.kt
├── domain/
│   └── {Feature}/
│       ├── usecase/
│       │   └── {Action}UseCase.kt
│       ├── {Feature}Repository.kt
│       └── {Entity}.kt
└── utils/
```

2. shared/commonAndroid
> This module contains reusable component for android platform and expected implementation.
```
├── utils/
└── widget/
```

3. shared/iosMain
> This module contains reusable component for iOS platform and expected implementation.
```
├── utils/
└── widget/
```

## Set Up Locally
- Clone this repo
- Sync gradle

## Contributing
All development (both new features and bug fixes) is performed in the `develop` branch. This way `master` always contains the sources of the most recently released version. Please send PRs with bug fixes to the `develop` branch. Documentation fixes in the markdown files are an exception to this rule. They are updated directly in `master`.

The `develop` branch is pushed to `master` on release.

For more details on contributing please see the [contributing guide](CONTRIBUTING.md).


## License

    Copyright 2022 Lukma Gayo.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
