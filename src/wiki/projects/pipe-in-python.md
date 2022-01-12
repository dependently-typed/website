# Adding a pipe operator to CPython

Languages like Elixir, Elm, OCaml, and F# have a pipe (|>) operator that makes function chaining convenient and ergonomic. 

Take the following nested function sequence:

```
split(uppercase("hello world"))
```

Using pipes, we can write it as follows:

```
"hello world" |> uppercase |> split
```

Note that this is similar (but not equivalent) to the `|` operator in bash which lets you compose multiple programs together.

There is currently even a proposal to [add pipes to JavaScript](https://github.com/tc39/proposal-pipeline-operator).

Through this project, we will try to add pipes to CPython.

Technical pre-reqs:

- Familiar with Python
- C/C++ experience is a plus (not required though)

Relevant documents:

- [CPython Developer guide](https://devguide.python.org/)
- [Elixir pipes](https://elixir-lang.org/getting-started/enumerables-and-streams.html#the-pipe-operator)
- [JavaScript pipes proposal](https://github.com/tc39/proposal-pipeline-operator)
