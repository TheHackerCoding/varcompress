# `varcompress`

#### Some 'algorithm' to compress files like a zip file but 'better'

## The theory

Take something like a ROM file like a Gamecube .iso or a .nes file where they are multiple FF or 00 hexes. Now what would happen if we replaced that a variable name with the definition of those hexes, shorten it from `FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF` to `FF*22` and put it into a dictionary file in the form of something like a .json file so every time we see our variable name in said file, we would get it from our dictionary, do whatever conversion from short to actual usable bytes, and replace it with the variable name in the file returning it from its original state.

### Why?

╮ (. ❛ ᴗ ❛.) ╭ I just randomly thought about this in my head :/

### Files

```
nodejs/ - the node.js version of this 'algorithm' / the concept design (which doesn't work for some reason ¯\_◉‿◉_/¯)
dart/ - the dart version of this 'algorithm'
README.md - what ur reading :/
```

### Things to note

Please ignore how my Dart code looks like; JS is my primary language but I decided to learn something different 


### TODO 
- possibly using AI to detect patterns, shorten it and put it in a dictionary `.json` file?