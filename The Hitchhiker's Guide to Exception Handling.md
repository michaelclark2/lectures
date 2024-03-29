# The Hitchhiker's Guide to Exception Handling

It's a wacky world out there, and there's a lot in it that can go wrong.  Take comfort in this fact.  You can be the most intelligent being in the universe, but you will still write some breaking code.  But knowing what goes wrong will guide you to making everything right again.

There is no one-size-fits-all for handling an error in your code.  If there were, then nothing would ever be broken and frankly, that's no fun at all.  There is, however, a mindset you can adopt to make your life just a little bit more sane, in a relative sense of the word.  Provided here is a loose-knit guide to finding your way around any exception thrown your way.

Always knowing where one's towel is will get you far.



## Don't Panic

**THIS IS THE SINGLE MOST IMPORTANT RULE**

Errors are an inevitable part of writing software and the sooner you embrace them for the beacons of hope that they are, the sooner you can regrow the hair you've been pulling out.  Panicking is the worst thing you can do when an error is raised, because you will surely miss the underlying message your code is trying to scream at you.  The big, bold, and bright red messages all over your screen may seem alarming at first, but they are simply a polite message provided with information about what went wrong;  information that you can use to potentially pull yourself out of the sticky situation you have found yourself.

## Read between the lines

The error message is your compass through treacherous waters.  The error message will usually tell you what went wrong, exactly where the error happened, and if you're really lucky, some steps to take to resolve the issue.  Take the time to read the error message several times to break down the error message to really understand what it's trying to tell you.

Here is an error message you have probably seen before:

```
Uncaught TypeError: myFunction is not a function
```

And you probably got this error when you tried to do something like this:

```
myFunction();
```

So when you read the error message about 100 times, you'll start to realize what it's trying to say.

Let's break it down:

`Uncaught TypeError` : This part is telling you the type of error you have in your code.  This error is a TypeError which means it involves an improper use of JavaScript's primitive types. (i.e. numbers, strings, functions, objects, etc...)

`myFunction is not a function` : This is the actual error message.  It is clearly telling you that the variable myFunction is not a function.  Even if you intended `myFunction` to be an actual function, the JavaScript interpreter does not see it that way, which it is politely screaming at you.  So because you definitely know that `myFunction` is not a function, there's some questions you need to ask yourself.

- If `myFunction` is not a function, then what is it?
- Where is `myFunction` defined and is it defined properly?
- Should I really be using `myFunction` this way?

These questions will lead you to the actual source of the error, but the original error message was the starting signpost to lead you down these paths.

## Just Google it

The internet is big.  Really big.  You just won't believe how vastly, hugely, mind-bogglingly big it is.  Chances are pretty high that you're not the first developer to encounter a bug.  If you have run into a roadblock debugging on your own, you can usually get a few hits on Google by copying and pasting the error messaging into the search bar.

If you can't get good results, try to put some keywords about what you were trying to do. (i.g. 'android build', 'javascript modules', 'webpack config', etc...)  This will narrow down your results when you have a very vague error message.

## Follow the stack

JavaScript does an excellent job at telling you about your errors.  Included with most errors is what is called the 'stack trace' which is literally a list of how JavaScript ran your code, in the order the functions were called, and it will end on where the exception was thrown.  The stack trace will also spit out line numbers that the functions were called on.  This is extremely helpful when you have modular code or using an external library.

Here is an example of an error stack from a project using several libraries:

![error stack](https://raw.githubusercontent.com/michaelclark2/lectures/master/imgs/errorstack.png)

Each of the lines listed here are the line numbers that the code followed to reach the exception, much as a breadcrumb trail leads directly to the witch's hut.  You can usually follow this trail right to the source of the error, and you know that something definitely went wrong along the way.  So if you follow the stack trace you will eventually find something that looks off.  The only problem with this particular example is that almost none of the lines in this stack trace are code that is written by me, they are all from the libraries I am using in the project.  However, there is one line in here that is written by me, and is a point in this stack trace where I can look to see if maybe I messed up somewhere.  The line in question is the fourth item in the above stack trace `at Module../src/main.js (main.js: 5)`

Clicking on this line will take me directly to line 5 of my main.js file:

![error on line 5](https://raw.githubusercontent.com/michaelclark2/lectures/master/imgs/error_line.PNG)

So we now know that somewhere on line 5, there is a mistake.  Looking closely at line 5, there's definitely a few places where a mistake could have been made.

- Maybe I didn't use the `mount` method right?
- Maybe the `new App()` failed?
- Maybe the `document.getElementById('App')` line didn't return anything?

Of these three options, I'm going to start with the one that takes the least effort to check.  I can easily determine whether or not there is an element on the DOM with the id of `App` by simply looking at the Elements pane:
![the element tab](https://raw.githubusercontent.com/michaelclark2/lectures/master/imgs/error_index.PNG)

And look at that, turns out I simply capitalized the word `app` in the id, so I'll just try and fix it by putting the lowercase 'app' on line 5 in my main.js

## Breakpoints and the Debugger

Dealing with bugs found in loops can be a bothersome chore, but luckily for you, there is a tool to help with this issue.  

## Paying it forward

Writing your own exceptions and error messages

