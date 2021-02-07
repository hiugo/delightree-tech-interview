# delightree-tech-interview

I decided to create the app using `expo` to avoid losing unecessary time on the initial setup.

### Setup

Install the dependencies and start the app

```
$ npm install --global expo-cli
$ yarn
$ expo start
```

### Developer notes

Although this exercise was more complex than I initially expected I'm pretty confident on the overall work I'm delivering.
I tried to make the layout as similar as possible from the designs and implemented a lot of logic to handle all the app's functionalities, with the exception of some very complex components that would be impossible to make in this time frame like a custom working calendar or the file upload.

There are some things that I would like to improve if I have more time:
* Use typescript - Although it's a pretty simple app I believe we should always use types
* Make it visually more appealing - With the expection of the `<Button />` component, where I implemented the ripple effect for Android, I've used `<TouchableOpacity />` for almost all clickable elements
* Write tests