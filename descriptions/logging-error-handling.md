# Logging & Error Handling

Add logging functionality to already existing REST service.

1. Add logger which will log incoming requests to service (at least `url`, `query parameters`, `body`) and response `status code`.
2. Add logger which will log all unhandled `errors` and return a standard message with HTTP code `500` (Internal Server Error).
3. Add listener and logging to `uncaughtException`.
4. Add listener and logging to `unhandledRejection`.
5. Writing to `process.stdout` or to a file both can be used for logging. Any third-party logging library can also be used for this purpose.
6. Create multiple logging levels and store logging level in environment variable.