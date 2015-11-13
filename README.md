log.io UI Extender
==================

- Change default color of log messages
- Change colors of log messages, based on their log level (debug, warn, error)
- Adds auto-scroll to log screens

**Issues / possible improvements**

- Not configurable
    - Only works on localhost, have to change manifest.json for different domains
    - Styles and string patterns for log levels have to be changed in code
- Chrome probably ignores the port and loads the script for all localhost pages since ports are never mentioned in the docs?
