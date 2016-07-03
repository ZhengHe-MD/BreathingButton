# BreathingButton
This is a react component of a breathing button. It makes use of [MDButton](https://github.com/Madadata/MDButton) and [anime](https://github.com/juliangarnier/anime)

# Demo
![demo](https://raw.githubusercontent.com/ZhengHe-MD/BreathingButton/master/demo.gif)

# Install
```
npm install breathingbutton
```

# Usage
## Properties

* **isDisabled**: Bool - determine whether or not the button is disabled.
* **theme**: String['default', 'primary', 'danger'] - bootstrap like theme.
* **href**: String - url redirect after clicked.
* **targetScale**: number - the target scale that the button is animated to. See [anime](https://github.com/juliangarnier/anime). The value usually lies in [0, 2], but it can be some crazy number either. Try it yourself. (default to 1.05)
* **period**: number - breathing period of button in milliseconds. (default to 1000)
* **onClick**: Function - function to be called when the button is clicked
