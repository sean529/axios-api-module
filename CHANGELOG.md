## v1.4.1 [(2019-5-31)](https://github.com/CalvinVon/axios-api-module/compare/v1.4.0...v1.4.1)
### Bug Fixes
- fix the bug that the `data` option would be *parsed* first before processing in `foreRequestHook` function.

# v1.4.0 [(2019-5-29)](https://github.com/CalvinVon/axios-api-module/compare/v1.3.2release...v1.4.0)

### BREAKING CHANGES
- **ApiModule#`globalForeRequestMiddleWare`:** method name changed from `registerForeRequestMiddleWare`
- **ApiModule#`globalFallbackMiddleWare`:** method name changed from `registerFallbackMiddleWare`
- **registerFallbackMiddleWare(fallbackHook):** change the second parameters to an object which contains `error` and `data` fields.
- **`axios` dependence:** you need to install `axios` dependence by `npm i axios -S` additional, cause you can have better control of dependency version.

### Bug fixes
- **`getAxios`:** now return an axios instance by `axios.create(config)`

### Features
- adding unit test and coverage test.
- better error tips when you passing invalid values to `apiMetas` or registering middlewares.

## v1.3.2 [(2019-4-2)](https://github.com/CalvinVon/axios-api-module/compare/v1.3.0...v1.3.2release)
### Bug fixes
- fix default error handler would still be invoked when fallbackMiddle has been registered already.

# v1.3.0 [(2019-3-19)](https://github.com/CalvinVon/axios-api-module/compare/v1.2.0...v1.3.0)
### Features
- **`baseConfig`:** add baseConfig for creating axios by default configuration.