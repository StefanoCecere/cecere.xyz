# stefanocecere.com
the source of my website <https://stefanocecere.com>. hope you'll find something nice.

## snippets
link to page:
[A post]({{< ref "/post/my-page-name.md" >}})

{{< youtube 82f0_jqhVgs >}}

## terminal commands
```
hugo new --kind post brain/_articles/
hugo new --kind post brain/2021/3/title

hugo serve --gc

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

## theme
i use Wowchemy https://wowchemy.com/
