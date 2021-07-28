---
layout: layouts/default.njk
---

{% assign numPosts = collections.posts | size %}

{% if numPosts != 0 %}
  {%- for post in collections.posts reversed %}
  <div class="post">
    <h2><a href={{ post.url }}>{{ post.data.title }}</a></h2>
    <div class="meta"
      <span>by {{ post.data.author.name }}</span>
      <span>| Posted on 
        <time datetime="{{ post.date }}">{{ post.date | toLocaleString }}</time>
      <span>
      <span>|</span>
      {%- for tag in post.data.tags %}
      <a href="/tags/{{ tag }}" class="tag">#{{ tag }}</a>
      {%- endfor %}
    </div>
    <p>{{ post.data.summary }}</p>
  </div>
  {%- endfor %}
{% else %}
  Nothing in here for now

  <pre>
 _______________________
< here be dragons >
 -----------------------
                       \                    ^    /^
                        \                  / \  // \
                         \   |\___/|      /   \//  .\
                          \  /O  O  \__  /    //  | \ \           *----*
                            /     /  \/_/    //   |  \  \          \   |
                            @___@`    \/_   //    |   \   \         \/\ \
                           0/0/|       \/_ //     |    \    \         \  \
                       0/0/0/0/|        \///      |     \     \       |  |
                    0/0/0/0/0/_|_ /   (  //       |      \     _\     |  /
                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\.-~       /   /
                             ,-}        _      *-.|.-~-.           .~    ~
            \     \__/        `/\      /                 ~-. _ .-~      /
             \____(oo)           *.   }            {                   /
             (    (--)          .----~-.\        \-`                 .~
             //__\\  \__ Ack!   ///.----..<        \             _ -~
            //    \\               ///-._ _ _ _ _ _ _{^ - - - - ~

  </pre>
{% endif %}
