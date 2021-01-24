# stefanocecere.com

the source of my website <https://stefanocecere.com>. hope you'll find something nice.

## terminal commands
```
hugo serve --gc
hugo new --kind post blog/2020/10/title

# upgrade Hugo on macOS:
brew upgrade hugo

# update theme modules
hugo mod get -u ./...
```

## content organization
having tons of content in many areas, i think to use:
- sections
- categories
- tags

## snippets

link to page:
[A post]({{< ref "/post/my-page-name.md" >}})

{{< youtube 82f0_jqhVgs >}}

## theme
i use Wowchemy https://wowchemy.com/
