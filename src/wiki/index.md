# Introduction

Hello!

Welcome to the `dependently-typed` wiki.

## Browsing

The entire list of pages can be found in the sidebar. We do not have search functionality yet, but it is in the works.

## Editing the wiki

The wiki is a static site built from a github repository. To make changes to it, submit a PR to [dependently-typed/wiki](https://github.com/dependently-typed/wiki). 

If you are a collaborator on the repo, you can directly commit your changes to `main`. This is, however, **not recommended**.


### Adding new pages

Each page is a markdown file located in the `src/` directory. Subpages are in located in sub-directories corresponding to the root page. The content for the root page itself is written in an `index.md` file in the sub-directory.

Here is an example in which we create a `governance` sub-page under the `about` root page:
```
src/
├── about                   # sub-directory for the root page
│   ├── index.md            # root page (url: /about)
│   ├── governance.md       # about sub-page (url: /about/governance)
```

You can nest as many sub-pages as you want.

We use Common Mark flavored markdown. You can read about it [here](https://commonmark.org/).

**IMPORTANT** Before you make a PR, be sure to update the table of contents (located at `src/_includes/toc.md`)! It is not auto-generated.


### Advanced editing

The wiki is implemented using the [11ty](https://11ty.dev) static site generator. This means that you can extend the wiki to do things like auto-generate RSS feeds, code-block execution and type-checking (this is useful when, for example, we want to typecheck Coq proofs), and much much more. Basically anything the web-platform supports.

You are welcome to submit PRs with your extensions!
