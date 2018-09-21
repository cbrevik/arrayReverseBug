# React Native Array.reverse bug

This is an example app to demonstrate that the Array.reverse bug for iOS 12 exists in React Native as well.

Some have called to calling this a "Safari bug", but that is misleading. The bug exists in the `JavascriptCore`-framework for iOS, which several other apps/frameworks depend upon, React Native among them.

# Links

- https://news.ycombinator.com/item?id=18021835
- https://stackoverflow.com/a/52394459/5703116
- https://bugs.webkit.org/show_bug.cgi?id=188794
