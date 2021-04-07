# stefanocecere.org
the source of my website <https://stefano.cecere.org>.
hope you'll find something useful, please share and let me know.

powered by:
- [Hugo](https://gohugo.io) - static site generator
- [Wowchemy](https://wowchemy.com) - Hugo Template Framework
- [Netlify](https://www.netlify.com) - hosting and CDN
- [brain+heart](https://stefano.cecere.org) - personal work

## snippets
link to page:
```
[A post]({{< ref "/post/my-page-name.md" >}})
[A post]({{< relref "my-rel-name.md" >}})

{{< youtube 82f0_jqhVgs >}}
```

## terminal commands
```
hugo new --kind post post/articles/
hugo new --kind post post/blog/2021/03/
hugo new --kind played played/boardgame/

hugo serve --gc

# upgrade Hugo on macOS:
brew upgrade hugo

# update theme modules
hugo mod get -u ./...
```
## copyright
This site and all its contents produced by me are Copyright by Stefano Cecere and  licensed under [CC BY NC SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0)
